var express = require("express");

var User = require("../models").User;
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render("userManager", { users });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
