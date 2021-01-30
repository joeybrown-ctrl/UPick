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
            //npx sequelize-cli db:seed:all (command to run in terminal)
        ], 'Activity', [
            {
                Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRUab8e9aGUukN2TTgiEKL5CyOC9gmK5ZrS8qDKi7fTJbsqvgMrICj8BalIBY5_gdDYLPgeNwvxLbsIt3Xc_vQRjrA.jpg?r=873',
                URL: null,
                Name: 'A Clockwork Orange'
            },

            {
                Image: 'https://occ-0-2042-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ2L-aAQwmbHEuZB_eAX318AprTPU_64ZGoeM6lZQH86EWMnyJeBTKizTn6N-Zw1EjdG8lzZKJWmS939Fv5nGfa_NA.jpg?r=653',
                URL: null,
                Name: 'Pan&#39;s Labyrinth'
            },
            {
                Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRm6tLkz61Vf642kd0FoVwlDSGez0m2GoGpfoef6N3NqESC4w894WT4G7OYjFpjXN3ZYMsGF88z5BqI0OlfBmxt-LQ.jpg?r=02b',
                URL: null,
                Name: 'The End of Evangelion'
            },
            {
                Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQdWb-yEyl6MvqUrDy8HzwH3Molb7YodPcQ17fw4O5hbQolKBCas6XRzopiUht9Eibv7LlsdJ2mvNBcjj4LImsL3SA.jpg?r=25b',
                URL: null,
                Name: 'PK'
            },
            {
                Image: 'http://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdv6--bKph64dWDdMhifdRLcyOQ92e-ewoCxo9Zcp1EjK2b88wCbmBow4QpnwZkQEzmtgRx4Mk2T5n4KSCcJDTkfTA.jpg?r=b38',
                URL: null,
                Name: 'Love O2O'
            },
            {
                Image: 'http://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABT3nNmLh0BysF4q26e-noID0kxYtWA1w-O9DQP9Zk20olMa0tGIwDw438JXCEeX6Ki1Nk2BcMBzsccbJMnlwhOVR5g.jpg?r=4cf',
                URL: null,
                Name: 'Manu'
            },
            {
                Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWDfrKovyiAVZxA6-maDWmZNXbLlTz3Zq-rZTjiznB-eu4aoAN9SWlivwIDCzGqSJaEIs79u6wt9hQVk7Ihbe6US4w.jpg?r=33b',
                URL: null,
                Name: 'Awe'
            },
            {
                Image: 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXjEuK3z6CKSTcOV70UDwgpJq07oqmDhMPRQ1SDr3dazAP7Oo4IGDl7Dbn7VlM5RzmK1VVeyNrnH1sT3SM4XgWxLPQ.jpg?r=df6',
                URL: null,
                Name: 'Berserk: The Golden Age Arc III - The Advent'
            },
            {
                Image: 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbPU1FyUUWTnTgTdPZNjaTsDuV8Xe2dURhrl688bTXXJeGBIpgZCqyr8H6Cg86j7LmEEhP5EDzD2rzMXprBO9CXsGSNBgzwcLr00ohgqH2ekbSw2lCvIt2nVcQk.jpg?r=7d6',
                URL: null,
                Name: 'Outside the Wire'
            },
            {
                Image: 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSK0AFV3nIAcq7S4-TBo3GGv4xjGTFOy9vurAxM5cal9XyOlPKXTHP0vFsfiCPgrD6lG998c41zCWcL2_rGyUxjGQA.jpg?r=7aa',
                URL: null,
                Name: 'InuYasha: The Movie 3: Swords of an Honorable Ruler'
            },
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
