const express = require("express");
const router = express.Router();
const directoryRouter = require("./routes/directory/router");

router.use("/directory", directoryRouter);

module.exports = router;
