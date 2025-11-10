exports.getUserProfile = async (req, res) => {
  try {
    // req.user comes from verifyToken middleware

    res.json({ message: "User verified successfully", user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
