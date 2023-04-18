const Event = require("../models/event.model");

exports.getAllEvents = async () => {
  return Event.find();
};

exports.getEventById = async (id) => {
  return Event.findById(id);
};

exports.getEventsByCity = async (city) => {
  return Event.find({ city });
};

exports.createEvent = async (eventData) => {
  const event = new Event(eventData);
  return event.save();
};

exports.updateEventById = async (id, eventData) => {
  const event = await Event.findByIdAndUpdate(id, eventData, { new: true });
  return event;
};

exports.deleteEventById = async (id) => {
  const event = await Event.findByIdAndDelete(id);
  return event;
};
