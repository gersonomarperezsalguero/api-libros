const { Book, sequelize } = require('./models/book');

// Resto del código para la API
const express = require('express');
const app = express();

app.use(express.json());

// Ruta para crear un libro
app.post('/books', async (req, res) => {
  try {
    const { fieldName, fieldType, fieldSize } = req.body;
    const book = await Book.create({ fieldName, fieldType, fieldSize });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para obtener todos los libros
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Sincronizar la base de datos y levantar el servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});