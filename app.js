// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/tutoriales', (req, res) => {
  // Devuelve la lista de tutoriales disponibles
});

app.post('/api/usuarios', (req, res) => {
  // Registra un nuevo usuario
});

// Más rutas de la API según las necesidades de la aplicación

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
