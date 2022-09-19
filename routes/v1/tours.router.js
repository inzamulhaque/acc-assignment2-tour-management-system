const express = require("express");
const createTour = require("../../controller/tours/createTours");
const getAllTours = require("../../controller/tours/getAllTours");
const getOneTourById = require("../../controller/tours/getOneTourById");
const updateById = require("../../controller/tours/updateById");
const router = express.Router();

router.route("/").get(getAllTours).post(createTour);

router.route("/:id").get(getOneTourById).patch(updateById);

module.exports = router;
