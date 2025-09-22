const { Review } = require('../models');

exports.add = async (req,res,next) => {
  try{
    const pid = req.params.productId;
    const { rating, comment } = req.body;
    if(!rating) return res.status(400).json({msg:'rating required'});
    const r = await Review.create({
      productId: pid,
      userId: req.user ? req.user.id : null,
      name: req.user ? req.user.name : (req.body.name || 'Invité'),
      rating, comment
    });
    res.status(201).json(r);
  }catch(err){ next(err) }
};

exports.list = async (req,res,next) => {
  try{
    const pid = req.params.productId;
    const reviews = await Review.findAll({ where:{ productId: pid }, order:[['createdAt','DESC']] });
    res.json(reviews);
  }catch(err){ next(err) }
};

exports.like = async (req,res,next) => {
  try{
    const r = await Review.findByPk(req.params.id); if(!r) return res.status(404).json({msg:'not found'});
    r.likes = (r.likes||0)+1; await r.save(); res.json(r);
  }catch(err){ next(err) }
};
