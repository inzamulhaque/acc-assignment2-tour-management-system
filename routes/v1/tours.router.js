const express = require("express");
const createTour = require("../../controller/tours/createTours");
const router = express.Router();

router.route("/").get().post(createTour);

module.exports = router;
