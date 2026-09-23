const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => 
{ 
    const token = req.headers.authorization;

    if (!token) {
    return res.status(401).json({
        message: "Authentication required"
    });
    }
    const actualToken = token.split(" ")[1];
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
  return res.status(401).json({
    message: "User not found"
  });
}
req.user = user;
next();
}

module.exports = authMiddleware;