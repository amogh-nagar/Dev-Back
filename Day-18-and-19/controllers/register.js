/**
 * check if email already exists
 * hash password
 * email lowercase
 * save in db
 */

const prisma = require("../prisma/prismaClient");
var bcrypt = require("bcryptjs");
const e = require("express");

const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (user) res.status(400).send("email already exists");
    else {
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
      const newUser = await prisma.user.create({
        data: {
          fullname: name,
          email: email.toLowerCase(),
          password: bcryptPassword,
        },
      });
      res.status(201).json(newUser);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = register;
