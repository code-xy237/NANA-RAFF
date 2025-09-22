require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { sequelize } = require('./models');
const errorHandler = require('./middleware/errorHandler');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static files (index.html + JS + CSS)
app.use(express.static(path.join(__dirname, 'public')));

// sync DB
(async ()=> {
  await sequelize.sync({ alter: true });
  console.log('SQLite DB synced');
})();

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/misc', require('./routes/misc'));

// webhooks
app.post('/webhook/om/notify', (req,res) => {
  console.log('[OM webhook] body:', req.body);
  res.json({ ok: true });
});
app.post('/webhook/momo/notify', (req,res) => {
  console.log('[MoMo webhook] body:', req.body);
  res.json({ ok: true });
});

// health
app.get('/api/health', (req,res) => res.json({ ok:true }));

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));
