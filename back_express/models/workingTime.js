const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class WorkingTime extends (
  Model
) {
  static init(sequelize) {
    return super.init(
      {
        signin_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        signout_at: {
          type: DataTypes.DATE,
          allowNull: false, //필수값으로 설정
          unique: true,
        },
        sign_type: {
          type: DataTypes.STRING(300),
          allowNull: false, //필수값으로 설정
        },
        overtime_at: {
          type: DataTypes.DATE,
          allowNull: false, //필수값으로 설정
        },
        overtime_reason: {
          type: DataTypes.STRING(1000),
          allowNull: false, //필수값으로 설정
        },
      },
      {
        modelName: 'WorkingTime',
        tableName: 'workingTimes',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
        timestamps: true,
        underscored: true,
      },
    );
  }
  static associate(db) {
    db.WorkingTime.belongsTo(db.User, {
      foreignKey: 'worker_id',
      targetKey: 'id',
    });
    db.WorkingTime.hasOne(db.WorkingTimeLog);
  }
};
