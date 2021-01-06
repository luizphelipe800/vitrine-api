module.exports = (sequelize, DataTypes) => {
  const shops = sequelize.define('shops', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  shops.associate = models => {
    shops.belongsTo(models.users);
    shops.hasMany(models.files, { foreignKey: 'shopId' });
  }

  return shops;
};
