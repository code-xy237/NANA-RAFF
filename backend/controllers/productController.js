const { Product } = require('../models');
const slugify = require('slugify');

exports.list = async (req,res,next)=>{
  try{
    const { q, category } = req.query;
    const where = {};
    if(q) where.name = { [require('sequelize').Op.like ]: `%${q}%` };
    if(category) where.category = category;
    const products = await Product.findAll({ where });
    res.json(products);
  }catch(err){ next(err) }
};

exports.get = async (req,res,next)=>{
  try{ const p = await Product.findByPk(req.params.id); if(!p) return res.status(404).json({msg:'Not found'}); res.json(p) }catch(err){ next(err) }
};

exports.create = async (req,res,next)=>{ try{
  const data = req.body; data.slug = slugify(data.name||'');
  const p = await Product.create(data); res.status(201).json(p);
}catch(err){ next(err) }};

exports.update = async (req,res,next)=>{ try{
  const p = await Product.findByPk(req.params.id); if(!p) return res.status(404).json({msg:'Not found'});
  await p.update(req.body); res.json(p);
}catch(err){ next(err) }};

exports.delete = async (req,res,next)=>{ try{
  const p = await Product.findByPk(req.params.id); if(!p) return res.status(404).json({msg:'Not found'});
  await p.destroy(); res.json({msg:'deleted'});
}catch(err){ next(err) }};
