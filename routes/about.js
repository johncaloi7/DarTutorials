const express = require("express");
const router = express.Router();

// import controllers
const aboutPage = require("../controllers/about");

router.get("/", aboutPage.about);

module.exports = router;
