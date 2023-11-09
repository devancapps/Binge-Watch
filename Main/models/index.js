const User = require('./User');
const TVShow = require('./TVShow');

User.hasMany(TVShow, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TVShow.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, TVShow };
