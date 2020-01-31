module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
             len: [1]
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
             len: [1]
         }
      },
      github: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
     }
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
     }
    //   github:  {
    //       type: DataTypes.STRING,
    //       allowNull: true,
    //       validate: {
    //           len: [1]
    //       }
    //     }
    });
    return User;
  };