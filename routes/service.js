const express = require("express");
const router = express.Router();

// import controllers
const servicePage = require("../controllers/service");

router.get("/", servicePage.service);

module.exports = router;
