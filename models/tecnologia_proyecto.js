
module.exports = (sequelize, Sequelize) => {
    const tecnologia = sequelize.define("tecnologia", {
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
    const proyecto = sequelize.define("proyecto", {
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
    const tecnologia_proyecto = sequelize.define("tecnologia_proyecto", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    }, 
    {
        tableName: "tecnologia_proyecto" 
    });
    tecnologia_proyecto.belongsTo(tecnologia, {as: "tecnologia"})
    tecnologia_proyecto.belongsTo(proyecto, {as: "proyecto"})
    return tecnologia_proyecto
  };