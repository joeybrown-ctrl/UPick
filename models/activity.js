// Activity tracks Up-Votes and Down-Votes (Owner and Invitee)

// const { stubTrue } = require('lodash');

module.exports = function (sequelize, DataTypes) {
    const Activity = sequelize.define('Activity', {
        Image: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        URL: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        Name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }

    });

    Activity.associate = function (models) {
    // We're saying that a Activity should belong to an Event
    // An Activity can't be created without an Event due to the foreign key constraint
        Activity.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false,
                name: 'EventId',
                as: 'Event'
            }
        });

        // look up hasMany in Sequelize docs to see if we can incorporate the belongsTo into this association
        // After reading the docs it looks like the hasMany we have on line 45 is fine

        Activity.hasMany(models.Vote, {
        });
    };

    return Activity;
};