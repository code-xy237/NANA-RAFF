const express = require("express");
const router = express.Router();

// ➤ GET : page d’accueil API
router.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l’API NANA RAFF 🚀" });
});

// ➤ GET : infos sur l’app
router.get("/about", (req, res) => {
  res.json({
    name: "NANA RAFF",
    version: "1.0.0",
    description: "API pour la boutique santé / bien-être",
  });
});

module.exports = router;
