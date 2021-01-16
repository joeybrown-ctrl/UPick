//An event is a collection of users deciding on activities
//Once the Invitee accepts invite they become a user
//Tracks Owner and Invitee (two users)

module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define('Event', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        //this is a comma-separated list (movie, restaurant -- these are the two main data providers)
        activityType: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        entertainment: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        pricePoint: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        cuisine: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });

    Event.associate = function (models) {
        // We're saying that a Event should belong to an User
        // A Event can't be created without an User due to the foreign key constraint
        // Needs Owner ID and Invitee ID (created multiples)
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                name: 'OwnerId',
                as: 'Owner'
            }
        });

        // Event.hasMany(models.Activity, {
        // });
    };

    return Event;
};