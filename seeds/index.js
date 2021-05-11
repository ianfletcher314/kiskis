const sequelize = require('../config/connection');
const { User, Secret } = require('../models');

const userData = require('./userData.json');
const secretData = require('./secretData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const secret of secretData) {
    await Secret.create({
      ...secret,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
