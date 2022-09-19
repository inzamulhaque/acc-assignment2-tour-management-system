const express = require("express");
const createTour = require("../../controller/tours/createTours");
const getAllTours = require("../../controller/tours/getAllTours");
const router = express.Router();

router.route("/").get(getAllTours).post(createTour);

module.exports = router;
