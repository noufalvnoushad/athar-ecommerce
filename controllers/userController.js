const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => 
{
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

const loginUser = async (req, res) => 
{
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) 
    {
    return res.status(401).json({
        message: "Invalid email or password"
    });
   }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
    return res.status(401).json({
        message: "Invalid email or password"
    });
    }
    const token = jwt.sign(
    { id: user._id, role: user.role },  
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
    );
    return res.status(200).json({
    message: "Login successful",
    token,
    user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        referralCode: user.referralCode
    }
    });
};

module.exports = {
  createUser,
  loginUser,
};