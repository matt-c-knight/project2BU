module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      blurb: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
    });
    Post.associate = function(models) {
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    Post.associate = function(models) {
      Post.belongsTo(models.Tag, {
        as: 'child_tag',
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    Post.associate = function(models) {
      Post.belongsTo(models.Tag, {
        as: 'parent_tag',
        foreignKey: {
          allowNull: false
        }
      });
    };
   return Post;
  };