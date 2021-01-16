//An invite is a request from the owner to the invitee
//Needs status and invitee's info

module.exports = function (sequelize, DataTypes) {
    const Invite = sequelize.define('Invite', {
        status: {
            //sent, accept or reject
            //this will be handled within controllers
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn:[['accepted','rejected', 'pending']]
            }
        },
        inviteeEmail: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });

    Invite.associate = function (models) {
    // We're saying that a Invite should belong to an User
    // A Invite can't be created without an User due to the foreign key constraint
        Invite.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Invite;
};