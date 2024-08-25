const { Sequelize, DataTypes } = require('sequelize');

// Creación de la instancia de Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'books.sqlite'  // Este es el nombre del archivo de la base de datos SQLite
});

// Definición del modelo Book
const Book = sequelize.define('Book', {
  fieldName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fieldType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fieldSize: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Exporta el modelo y la instancia de sequelize
module.exports = { Book, sequelize };