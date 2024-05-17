const express = require("express");
const {creatingUser, loginUser, passwordReset, signingOut } = require("../Controller/userController");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", creatingUser);
router.delete("/logout", signingOut);
router.post("/resetpassword", passwordReset);

module.exports = router;