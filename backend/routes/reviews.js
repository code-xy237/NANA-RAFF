const express = require("express");
const router = express.Router();

// Exemple de données en mémoire (plus tard, tu les mettras en BDD)
let reviews = [
  { id: 1, productId: 1, user: "Alice", rating: 5, comment: "Excellent produit !", likes: 2, date: new Date() },
  { id: 2, productId: 1, user: "Bob", rating: 4, comment: "Bon mais un peu cher.", likes: 1, date: new Date() },
];

// ➤ GET : toutes les reviews d’un produit
router.get("/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const productReviews = reviews.filter(r => r.productId === productId);
  res.json(productReviews);
});

// ➤ POST : ajouter une review
router.post("/:productId", (req, res) => {
  const { user, rating, comment } = req.body;
  const newReview = {
    id: reviews.length + 1,
    productId: parseInt(req.params.productId),
    user,
    rating,
    comment,
    likes: 0,
    date: new Date()
  };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

// ➤ PATCH : liker une review
router.patch("/:id/like", (req, res) => {
  const review = reviews.find(r => r.id === parseInt(req.params.id));
  if (!review) return res.status(404).json({ message: "Avis introuvable" });
  review.likes++;
  res.json(review);
});

module.exports = router;
