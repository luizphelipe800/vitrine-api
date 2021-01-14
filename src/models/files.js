module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    path: DataTypes.STRING,
    shopId: DataTypes.INTEGER,
    url: {
      type: DataTypes.VIRTUAL,
      get: function(){
        return `http://localhost:3000/${this.path}`
      }
    }
  });

  files.associate = models => {
    files.belongsTo(models.shops);
  }

  return files;
};
