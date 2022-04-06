
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("tecnologia", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING
      }
    },
    {
        tableName: "tecnologia"
    });
  };