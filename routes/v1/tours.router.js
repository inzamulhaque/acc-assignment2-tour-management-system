const express = require("express");
const createTour = require("../../controller/tours/createTours");
const getAllTours = require("../../controller/tours/getAllTours");
const getOneTourById = require("../../controller/tours/getOneTourById");
const getTrending = require("../../controller/tours/getTrending");
const updateById = require("../../controller/tours/updateById");
const router = express.Router();

router.route("/").get(getAllTours).post(createTour);

router.route("/trending").get(getTrending);

router.route("/:id").get(getOneTourById).patch(updateById);

module.exports = router;
