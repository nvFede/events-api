const Joi = require('joi');

const eventSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.date().required(),
  time: Joi.string().required(),
  location: Joi.string().required(),
  city: Joi.string().max(30).required(),
  country: Joi.string().max(30).required(),
  category: Joi.string().max(30).required(),
  price: Joi.number().required().min(0),
  images: Joi.array().items(Joi.string())
});

module.exports.validateEvent = (req, res, next) => {
  const { error } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
