const { User } = require("../models/users.model");

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    res.status(200).json({
      success: true,
      message: "LoggedIn Successfully",
      user
    });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

module.exports = { userLogin };
