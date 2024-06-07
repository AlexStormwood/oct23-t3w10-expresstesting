const express = require("express");
const router = express.Router();

const HomeRouter = require("./controllers/home.js");

router.use("/", HomeRouter);

module.exports = router;