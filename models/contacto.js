module.exports = (sequelize, Sequelize) => {
    return sequelize.define("contacto", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nombreCompleto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mensaje:{
        type: Sequelize.STRING,
        allowNull: false
      },
    },
    {
        tableName: "contacto"
    });
  };