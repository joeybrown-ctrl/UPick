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
        }
    });

    Event.associate = function (models) {
        // We're saying that a Event should belong to an User and the Invitee(user2)
        // A Event can't be created without an User due to the foreign key constraint
        // Needs Owner ID and Invitee ID (created multiples)
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                name: 'OwnerId',
                as: 'Owner'
            }
        });

        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                name: 'InviteeId',
                as: 'Invitee'
            }
        });

        Event.hasMany(models.Activity, {

        });
    };

    return Event;
};