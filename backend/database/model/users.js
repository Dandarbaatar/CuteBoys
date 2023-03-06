const mongoose = require("mongoose");
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [8, "Username must be at least 8 characters"],
    maxlength: [20, "Username must be contains from 8 to 20 characters"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [12, "Password must be contains from 8 to 12 characters"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  createdAt: { type: Date, default: Date.now() },
  userImg: { type: String, required: true },
  admin: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
