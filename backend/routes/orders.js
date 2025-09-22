const express = require("express");
const router = express.Router();

// Exemple de données
let orders = [
  { id: 1, user: "Alice", products: [1, 2], total: 30.98, status: "pending" },
  { id: 2, user: "Bob", products: [2], total: 19.99, status: "paid" },
];

// ➤ GET : toutes les commandes
router.get("/", (req, res) => {
  res.json(orders);
});

// ➤ GET : une commande par ID
router.get("/:id", (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ message: "Commande non trouvée" });
  res.json(order);
});

// ➤ POST : créer une commande
router.post("/", (req, res) => {
  const { user, products, total } = req.body;
  const newOrder = {
    id: orders.length + 1,
    user,
    products,
    total,
    status: "pending",
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// ➤ PATCH : mise à jour du statut
router.patch("/:id/status", (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ message: "Commande non trouvée" });
  order.status = req.body.status || order.status;
  res.json(order);
});

module.exports = router;
