module.exports = function (sequelize, DataTypes) {
    var group = sequelize.define('group', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      }
    });

    return group;
  };