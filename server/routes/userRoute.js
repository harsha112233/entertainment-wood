const express=require('express');
const { registerUser } = require('../controller/user');
const router = express.Router();


router.route("/register").post(registerUser)
module.exports = router;