const db = require("../../../models");
const User = db.user;
const messages = require("../../helpers/messages");
async function getAllUsers(account) {
  try {
    const users = await User.findOne({ id: account.id });
    console.log("account", users);
    return messages.success("Users found", users);
  } catch (error) {
    throw messages.error(500, "Failed to get users");
  }
}

module.exports = getAllUsers;