module.exports = function(sequelize, DataTypes) {
    var Tag = sequelize.define("Tags", {
  
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,20]
            }
         },
         parent: {
           type: DataTypes.INTEGER,
           allowNull: true
         },
         
  
    });
    return Tag;
  };