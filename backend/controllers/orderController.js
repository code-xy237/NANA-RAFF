const { Order, Product } = require('../models');

exports.create = async (req,res,next)=>{
  try{
    const { items, paymentMethod, paymentDetails } = req.body;
    if(!items || !items.length) return res.status(400).json({msg:'cart empty'});
    let total = 0; const orderItems=[];
    for(const it of items){
      const p = await Product.findByPk(it.productId);
      if(!p) return res.status(400).json({msg:`Produit ${it.productId} introuvable`});
      orderItems.push({ productId:p.id, name:p.name, price:p.price, qty:it.qty||1 });
      total += p.price * (it.qty||1);
    }
    const order = await Order.create({
      userId: req.user ? req.user.id : null,
      items: orderItems,
      total,
      paymentMethod,
      paymentInfo: JSON.stringify({ status: 'initialized', details: paymentDetails })
    });
    // If paymentMethod 'om' or 'momo' -> return mock instruction + create webhook expectation
    res.status(201).json({ order, message: 'Commande créée (demo). Utilisez Mobile Money / Stripe pour finaliser.' });
  }catch(err){ next(err) }
};

exports.get = async (req,res,next)=>{
  try{
    const o = await Order.findByPk(req.params.id);
    if(!o) return res.status(404).json({msg:'not found'});
    // only owner or admin
    if(o.userId && (!req.user || req.user.id !== o.userId) && (!req.user || req.user.role!=='admin')) return res.status(403).json({msg:'forbidden'});
    res.json(o);
  }catch(err){ next(err) }
};

exports.updateStatus = async (req,res,next)=>{
  try{
    const o = await Order.findByPk(req.params.id);
    if(!o) return res.status(404).json({msg:'not found'});
    o.status = req.body.status || o.status; await o.save(); res.json(o);
  }catch(err){ next(err) }
};
