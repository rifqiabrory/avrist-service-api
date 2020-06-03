const Response = require("../utils/Response");
const Constant = require("../constant/Constant");
const User = require("../repository/UserRepository");

const getAll = async (req, res) => {
  try {
    const users = await User.getAllUser();
    if (users.length > 0) {
      res.send(
        Response.Success(res, users, 200, Constant.RESPONSE_SUCCESS_MESSAGE)
      );
    } else {
      res.send(
        Response.Exist(res, users, 201, Constant.RESPONSE_EXIST_MESSAGE)
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const create = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.create(body);
    if (user) {
      delete user.password;
      res.send(
        Response.Success(res, user, 200, Constant.RESPONSE_SUCCESS_CREATED)
      );
    } else {
      delete user.password;
      res.send(
        Response.Exist(res, user, 201, Constant.RESPONSE_FAILED_CREATED)
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const getUserBy = async (req, res) => {
  try {
    const user = await User.getUserBy(req.body.user_id);
    if (user) {
      res.send(Response.Success(res, user, 200, Constant.RESPONSE_SUCCESS));
    } else {
      res.send(Response.Exist(res, user, 201, Constant.RESPONSE_EXIST_MESSAGE));
    }
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.updateUser(body);
    if (user) {
      res.send(
        Response.Success(res, user, 200, Constant.RESPONSE_SUCCESS_UPDATED)
      );
    } else {
      res.send(
        Response.Exist(res, user, 201, Constant.RESPONSE_FAILED_UPDATED)
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const remove = async (req, res) => {
  try {
    const { user_id } = req.body;
    const data = await User.getUserBy(user_id);
    if (data) {
      const user = await User.deleteUser(data.user_id);
      if (user) {
        res.send(
          Response.Success(res, user, 200, Constant.RESPONSE_SUCCESS_DELETED)
        );
      }
    } else {
      res.send(
        Response.Success(res, data, 201, Constant.RESPONSE_EXIST_MESSAGE)
      );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAll, create, getUserBy, update, remove };
