const { sequelize, Product, User } = require('../models');

(async()=>{
  await sequelize.sync({ force:true });
  await User.create({ name:'Admin', email:'admin@vitalfit.local', password:'admin123', role:'admin' });
  await Product.bulkCreate([
    { name:'Thé Détox Vital', short:'Infusion drainante', description:'...', price:4500, stock:40, category:'thé', images: ['https://picsum.photos/600/400?1'] },
    { name:'Brûleur Pro+', short:'Complément thermogène', description:'...', price:9500, stock:18, category:'compléments', images:['https://picsum.photos/600/400?2'] },
    { name:'Shaker VitalFit', short:'Shaker 600ml', description:'...', price:3500, stock:60, category:'accessoires', images:['https://picsum.photos/600/400?3'] }
  ]);
  console.log('Seed done');
  process.exit(0);
})();
