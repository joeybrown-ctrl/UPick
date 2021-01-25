//require providers
const zomato = require ('./providers/zomato.js');
const unogsng = require ('./providers/unogsng.js');

//providers are functions that have event and number passed as args.

//dummy provider:

// eslint-disable-next-line no-unused-vars


//registry is an object, each item is an array with functions

const eventRegistry = {
    restaurants: [zomato],
    movies: [unogsng],
};

module.exports = eventRegistry;