const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

const referralCode = "ATHAR" + Math.floor(1000 + Math.random() * 9000);

const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    referralCode
});

    res.status(201).json({
    message: "User created successfully",
    user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        referralCode: user.referralCode,
    },
});
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
};