const prisma = require("../prisma/prismaClient");

const getAllUsers = async (req, res, next) => {
  const users = await prisma.user.findMany({});
  // return users;
  res.status(200).json(users);
};

const getUserByid = async function (req, res, next) {
  const id = Number(req.params.id);
  const users = await prisma.user.findUnique({
    where: { id: id },
  });
  res.status(200).json(users);
};

const deleteUser = async function (req, res, next) {
  const id = Number(req.params.id);

  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!user) res.send("No user with this id");

  const Duser = await prisma.user.delete({
    where: {
      id,
    },
  });
  res.json(Duser);
};

module.exports = { getAllUsers, getUserByid, deleteUser };
