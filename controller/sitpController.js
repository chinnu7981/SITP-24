const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.python = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-python", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID,
    });
  } else {
    res.render("sitp-python", { participant: false });
  }
});

exports.iot = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-iot", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID.toString(),
    });
  } else {
    res.render("sitp-iot", { participant: false });
  }
});

exports.marketing = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-marketing", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID.toString(),
    });
  } else {
    res.render("sitp-marketing", { participant: false });
  }
});

exports.pd = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-pd", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID.toString(),
    });
  } else {
    res.render("sitp-pd", { participant: false });
  }
});

exports.frontend = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-frontend", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID,
    });
  } else {
    res.render("sitp-frontend", { participant: false });
  }
});

exports.ml = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-ml", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID,
    });
  } else {
    res.render("sitp-ml", { participant: false });
  }
});

exports.ds = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-ds", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID,
    });
  } else {
    res.render("sitp-ds", { participant: false });
  }
});

exports.js = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-js", {
      participant: user,
      cashfreeButtonId: process.env.CASHFREE_BUTTON_ID,
    });
  } else {
    res.render("sitp-js", { participant: false });
  }
});
