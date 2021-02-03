const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class WorkingTimeLog extends (
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
        modelName: 'WorkingTimeLog',
        tableName: 'workingTimelogs',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
        timestamps: true,
        underscored: true,
      },
    );
  }
  static associate(db) {
    db.WorkingTimeLog.belongsTo(db.WorkingTimeLog);
  }
};
