const bcrypt = require("bcrypt");
const User = require("../models/User");

function create(value) {
  const userID = Math.random().toString(36).substring(7);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(value.password, salt);
  const data = {
    user_id: `u-${userID}`,
    username: value.username,
    password: hash,
    first_name: value.first_name,
    last_name: value.last_name,
    gender: value.gender,
    date_of_birth: value.date_of_birth,
    user_image: value.user_image,
    status: "submitted",
    created_by: value.created_by,
    created_at: value.created_at,
    updated_by: "",
    last_updated_at: "",
  };
  return User.create(data).then((result) => {
    return result.dataValues;
  });
}

function getAll() {
  return User.findAll({
    raw: true,
    attributes: { exclude: ["password"] },
  });
}

function getUserBy(user_id) {
  return User.findOne({
    raw: true,
    attributes: { exclude: ["password"] },
    where: {
      user_id: user_id,
    },
  });
}

function update(value) {
  const userID = value.user_id;
  const data = {
    username: value.username,
    first_name: value.first_name,
    last_name: value.last_name,
    gender: value.gender,
    data_of_birth: value.date_of_birth,
    user_image: value.user_image,
    status: value.status,
    updated_by: value.updated_by,
    last_updated_at: value.last_updated_at,
  };

  return User.update(data, {
    where: {
      user_id: userID,
    },
  }).then((result) => {
    if (result.length > 0) {
      return User.findOne({
        raw: true,
        attributes: { exclude: ["password"] },
        where: {
          user_id: userID,
        },
      });
    }
  });
}

function remove(user_id) {
  return User.destroy({
    where: {
      user_id: user_id,
    },
  });
}

module.exports = {
  create: create,
  getAllUser: getAll,
  getUserBy: getUserBy,
  updateUser: update,
  deleteUser: remove,
};
