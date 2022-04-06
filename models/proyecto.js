module.exports = (sequelize, Sequelize) => {
    return sequelize.define("proyecto", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha:{
        type: Sequelize.DATE,
        allowNull: false
      },
      imgUrl:{
          type: Sequelize.STRING,
          allowNull:true
      },
      githubLink:{
        type: Sequelize.STRING,
        allowNull:true
      }
    },
    {
        tableName: "proyecto"
    });
  };