'use strict';

module.exports = {
    up: async (queryInterface) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        return queryInterface.bulkInsert('Users', [
            {
                email: 'marceline@pug.com',
                password: '4321',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'myelin@pug.com',
                password: '1234',
                createdAt: new Date(),
                updatedAt: new Date()
            }
            //make more tables (Events, Activities, etc -- always include createdAt and updatedAt)
            //not super helpful for creating users as this doesn't hash our passwords but useful for dummy events, etc
        ], {
            logging: console.log
        });
    },

    down: async () => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
