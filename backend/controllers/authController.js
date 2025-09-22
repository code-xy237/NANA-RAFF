const jwt = require('jsonwebtoken');
const { User } = require('../models');

function genToken(user){ return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }); }

exports.register = async (req,res,next)=>{
  try{
    const { name,email,password,phone } = req.body;
    if(!name||!email||!password) return res.status(400).json({msg:'Champs manquants'});
    const exists = await User.findOne({ where:{ email }});
    if(exists) return res.status(409).json({msg:'Email utilisé'});
    const user = await User.create({ name,email,password,phone });
    res.status(201).json({ user:{ id:user.id,name:user.name,email:user.email }, token: genToken(user) });
  }catch(err){ next(err) }
};

exports.login = async (req,res,next)=>{
  try{
    const { email,password } = req.body;
    if(!email||!password) return res.status(400).json({msg:'Email+pwd requis'});
    const user = await User.findOne({ where:{ email }});
    if(!user) return res.status(401).json({msg:'Utilisateur introuvable'});
    const ok = await user.matchPassword(password);
    if(!ok) return res.status(401).json({msg:'Mot de passe incorrect'});
    res.json({ user:{ id:user.id,name:user.name,email:user.email }, token: genToken(user) });
  }catch(err){ next(err) }
};
