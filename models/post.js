module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // preview: DataTypes.TEXT,
    blurb: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
 
  
  
 return Post;
};