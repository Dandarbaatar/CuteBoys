const UserSchema = require("../database/model/users");
const mongoose = require("mongoose");

exports.getUserDataById = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  return result;
};

exports.getUserData = async (req) => {
  const result = await UserSchema.find();
  return result;
};

exports.createUserQuery = async (req) => {
  const { username, password, email } = req.body;
  const result = await new UserSchema({
    username: username,
    password: password,
    email: email,
  }).save();
  return result;
};

exports.uptadeUserQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  const { username, password, email } = req.body;

  await UserSchema.findByIdAndUpdate(result, {
    username: username,
    password: password,
    email: email,
  });
  return result;
};

exports.userDeleteController = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });

  await UserSchema.findByIdAndRemove(result);
  return result;
};
