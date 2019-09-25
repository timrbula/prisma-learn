const jwt = require("jsonwebtoken");
const utils = require("../utils");

async function createUser(parent, args, context, info) {
  const user = await context.prisma.createUser({ ...args });
  return user;
  //const token = jwt.sign({ userId: user.id }, utils.APP_SECRET);
}

async function deleteUser(parent, args, context, info) {
  const user = await context.prisma.deleteUser({ email: args.email });
  return user;
}

module.exports = {
  createUser,
  deleteUser
};
