const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};
// const User = require('./user');
// const Post = require('./post');
// const Hashtag = require('./hashtag');

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
// db.User = User;
// db.Post = Post;
// db.Hashtag = Hashtag;
// User.initiate(sequelize);
// Post.initiate(sequelize);
// Hashtag.initiate(sequelize);
// User.associate(db);
// Post.associate(db);
// Hashtag.associate(db);
// module.exports = db;

const basename = path.basename(__filename);
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    console.log(file, model.name);
    db[model.name] = model;
    model.initiate(sequelize);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
