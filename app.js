const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Configuración de la conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Configuración del middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración de las rutas
const eventsRoutes = require('./routes/events.routes');
app.use('/api/v1/events', eventsRoutes);

module.exports = app;