const Sequelize = require("sequelize");
const seq = require("../../config/sequelize");

const User = seq.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    user_image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    created_by: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    created_at: {
      type: "TIMESTAMP",
      allowNull: true,
    },
    updated_by: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    last_updated_at: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

module.exports = User;
