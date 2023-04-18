const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events.controller");
const { validateEvent } = require("../middlewares/events.middleware");

router
  .route("/")
  .get(eventsController.getAllEvents)
  .post(validateEvent, eventsController.createEvent);

router
  .route("/:id")
  .get(eventsController.getEventById)
  .put(validateEvent, eventsController.updateEventById)
  .delete(eventsController.deleteEventById);

router.get("/city/:city", eventsController.getEventsByCity);

module.exports = router;
