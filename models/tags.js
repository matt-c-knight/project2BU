module.exports = function(sequelize, DataTypes) {
var Tag = sequelize.define("Tag", {

  title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1,20]
      }
   },
   
  
});
return Tag;
};