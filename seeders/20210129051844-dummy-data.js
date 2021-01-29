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
        ],
        //is this correctly laid out? What is the npx command to add this to the seeders?
        'Events', [
            {
                name: 'MEOW',
                latitude: '32.2226° N',
                longitude: '110.9747° W',
                activityType: 'restaurant',
                entertainmentType: null,
                movieGenre: null,
                pricePoint: null,
                cuisine: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }
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
