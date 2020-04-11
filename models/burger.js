module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
      burger_name: {
       type : DataTypes.STRING,
       allowNull: false,
      validate:{
          len:[1,60]
      }
    },
      devoured: DataTypes.BOOLEAN
    });
    return Burger;
  };