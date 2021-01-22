// vote is split from activity into it's own table to allow groups to vote

module.exports = function (sequelize, DataTypes) {
    const Vote = sequelize.define('Vote', {
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        }
    });

    Vote.associate = function (models) {
    // We're saying that a Vote should belong to an User
    // A Vote can't be created without an User due to the foreign key constraint
        Vote.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Vote.belongsTo(models.Activity, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Vote;
};