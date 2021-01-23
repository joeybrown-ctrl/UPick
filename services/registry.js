//require providers

//providers are functions that have event and number passed as args.

//dummy provider:

// eslint-disable-next-line no-unused-vars
function dummy(event, number) {
    return Promise.resolve([{}, {}, {}]);
}

//registry is an object, each item is an array with functions

const eventRegistry = {
    restaurants: [dummy],
    movies: [dummy],
};

module.exports = eventRegistry;