const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class User extends (
  Model
) {
  static init(sequelize) {
    return super.init(
      {
        worker_num: {
          type: DataTypes.STRING(300),
          allowNull: false, //필수값으로 설정
          unique: true,
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
        timestamps: true,
        underscored: true,
      },
    );
  }
  static associate(db) {
    db.User.belongsTo(db.User);
  }
};
