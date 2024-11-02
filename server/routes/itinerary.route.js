const { createItinerary, getSpecificPlan } = require("../controller/itinerary.controller");

const itineraryRoute = require("express").Router();

itineraryRoute.post("/", createItinerary);

itineraryRoute.get("/:id", getSpecificPlan)

module.exports = { itineraryRoute };
