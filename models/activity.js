// Activity tracks Up-Votes and Down-Votes (Owner and Invitee)

module.exports = function (sequelize, DataTypes) {
    const Activity = sequelize.define('Activity', {
        Image: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        URL: {
            type: DataTypes.TEXT,
            allowNull: false,
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
                allowNull: false
            }
        });
    };

    return Activity;
};