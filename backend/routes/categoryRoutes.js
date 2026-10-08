const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");

// Create Category
router.post("/", createCategory);

// Get All Categories
router.get("/", getCategories);

module.exports = router;