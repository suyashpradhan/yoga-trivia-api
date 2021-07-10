const { User } = require("../models/users.model");

const fetchUserData = async (req, res) => {
  const user = await User.findById(req.userId);
  if (user) {
    return res.json({
      success: true,
      user
    });
  }
  return res.json({
    success: false,
    message: "User not found!"
  });
}

module.exports = { fetchUserData }