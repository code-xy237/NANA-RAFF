const express = require('express');
const router = express.Router();

// Exemple de produits en dur (à remplacer par la BDD plus tard)
let products = [
  { id: 1, name: "Thé minceur", price: 10.99, description: "Un thé 100% bio pour perdre du poids." },
  { id: 2, name: "Complément nutrition", price: 19.99, description: "Supplément naturel riche en vitamines." },
];

// GET tous les produits
router.get('/', (req, res) => {
  res.json(products);
});

// GET un produit par ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Produit non trouvé" });
  res.json(product);
});

// POST ajouter un produit
router.post('/', (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
