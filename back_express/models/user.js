const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class User extends (
  Model
) {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(30),
          allowNull: false, //필수값으로 설정
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false, //필수값으로 설정
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false, //필수값으로 설정
        },
        department: {
          type: DataTypes.STRING(1),
          allowNull: false, //필수값으로 설정
        },
        phone: {
          type: DataTypes.INTEGER(11),
          allowNull: false, //필수값으로 설정
        },
        join_date: {
          type: DataTypes.DATE,
          allowNull: false, //필수값으로 설정
        },
        resign_date: {
          type: DataTypes.DATE,
          allowNull: false, //필수값으로 설정
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
    db.User.hasMany(db.WorkingTime, {
      foreignKey: 'worker_id',
      sourceKey: 'id',
    });
  }
};
