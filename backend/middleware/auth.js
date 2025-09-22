const jwt = require('jsonwebtoken');
const { User } = require('../models');

const protect = async (req,res,next)=>{
  let token = null;
  const auth = req.headers.authorization;
  if(auth && auth.startsWith('Bearer ')) token = auth.split(' ')[1];
  if(!token) return res.status(401).json({msg:'Non autorisé'});
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if(!user) return res.status(401).json({msg:'Utilisateur introuvable'});
    req.user = user;
    next();
  }catch(err){ res.status(401).json({msg:'Token invalide'}) }
};

const admin = (req,res,next)=> {
  if(req.user && req.user.role === 'admin') return next();
  return res.status(403).json({msg:'Admin requis'});
};

module.exports = { protect, admin };
