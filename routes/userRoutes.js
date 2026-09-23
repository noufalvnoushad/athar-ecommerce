const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/register", createUser);
router.post("/login", loginUser);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile accessed successfully",
    user: req.user
  });
});

module.exports = router;