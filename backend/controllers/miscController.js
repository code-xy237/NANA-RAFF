const { Product } = require('../models');
const { Parser } = require('json2csv');

exports.newsletter = async (req,res)=> {
  const { email } = req.body; // store or forward
  return res.json({ ok:true, email });
};

exports.exportProducts = async (req,res)=>{
  const prods = await Product.findAll();
  const data = prods.map(p=>({ id:p.id, name:p.name, category:p.category, price:p.price, stock:p.stock, short:p.short }));
  const csv = new Parser().parse(data);
  res.header('Content-Type','text/csv'); res.attachment('products.csv'); res.send(csv);
};

exports.importProducts = async (req,res)=>{
  const items = req.body.products; if(!Array.isArray(items)) return res.status(400).json({msg:'invalid'});
  const created = await Product.bulkCreate(items);
  res.json({ createdCount: created.length });
};
