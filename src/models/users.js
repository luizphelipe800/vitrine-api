const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  users.addHook('beforeCreate', async user => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(user.password, salt);
    user.password = hash;
  })

  users.prototype.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
  }

  users.prototype.genJwt = function(){
    return jwt.sign({ id: this.id }, 'secret');
  }

  users.associate = models => {
    users.hasMany(models.shops, { foreignKey: 'userId' });
  }

  return users;
};
