const db = require("../../../models");
const User = db.user;
const messages = require("../../helpers/messages");

async function activateUserByUsername(username) {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw messages.error(404, "User not found");
    }
    await User.update({ is_active: true }, { where: { username } });

    return messages.success("User Activated!");
  } catch (error) {
    throw messages.error(500, error.message);
  }
}

module.exports = activateUserByUsername;
