const { profileService } = require("../services");

async function getProfile(req, res) {
  try {
    const userId = req.account;
    const profile = await profileService.getUser(userId);
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function updateAvatar(req, res) {
  try {
    const userId = req.account;
    const { file } = req;
    const updatedAvatar = await profileService.uploadAvatar(userId, file);

    return res.status(200).json(updatedAvatar);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getProfile,
  updateAvatar,
};