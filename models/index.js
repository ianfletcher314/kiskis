const User = require('./User');
const Secret = require('./Secret');
const LoginHistory = require('./LoginHistory')
const Category = require('./Category')

User.hasMany(Secret, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Secret.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(LoginHistory, {
    foreignKey: 'user_id'
});

LoginHistory.belongsTo(User, {
    foreignKey: 'user_id'
  });

Category.belongsTo(Secret, {
    foreignKey: 'secret_id'
});

module.exports = { User, Secret, Category, LoginHistory };