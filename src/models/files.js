module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    path: DataTypes.STRING,
    shopId: DataTypes.INTEGER
  });

  files.associate = models => {
    files.belongsTo(models.shops);
  }

  return files;
};
