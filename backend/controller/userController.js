const { createUserQuery } = require("../query/userQuery");
const { uptadeUserQuery } = require("../query/userQuery");
const { userDeleteController } = require("../query/userQuery");
const { getUserData } = require("../query/userQuery");
const { getUserDataById } = require("../query/userQuery");

exports.userGetControllerById = async (req, res) => {
  try {
    const result = await getUserDataById(req);
    res.send({ data: result });
  } catch (err) {
    res.send(err.message);
  }
};

exports.usersGetController = async (req, res) => {
  try {
    const result = await getUserData(req);
    res.send({ data: result });
  } catch (err) {
    res.send(err.message);
  }
};

exports.userPostController = async (req, res) => {
  try {
    await createUserQuery(req);
    res.status(201).send(`Successfully created`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.userUpdateController = async (req, res) => {
  try {
    await uptadeUserQuery(req);
    res.send(`Successfully updated `);
  } catch (err) {
    console.log(err);
  }
};

exports.useDeleteController = async (req, res) => {
  try {
    await userDeleteController(req);
    res.send(`Successfully deleted `);
  } catch (err) {
    console.log(err);
  }
};
