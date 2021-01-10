'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);

// removing config.json, since it blows things up.
const env = process.env.NODE_ENV;
const prodDb = process.env.JAWSDB_URL;
const localDb = process.env.LOCALDB_URL;
const sequelize = new Sequelize(env === 'production' ? prodDb : localDb);

const db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        // Sequelize 6.0 deprecated import, fixing that.
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;