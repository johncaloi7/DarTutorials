const express = require("express");
const router = express.Router();

// import controllers
const homepage = require("../controllers/home");

router.get("/", homepage.home);

module.exports = router;
