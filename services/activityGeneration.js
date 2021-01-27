//import registry and models
const registry = require('./registry');
const lodash = require('lodash');

//creating the algo to map through the providers:
const activityNum = 10;

//start by creating a function which takes in event as input (this contains the info about the event)
async function activityGeneration(event) {
    //on the front end, we can use the sibling method of array.join('');
    const activityTypes = event.activityType.split(',');

    //our output is a promise of an array of activity objects
    //where those activity objects are inputs to activity model
    //controller is taking care of the transaction method
    //output is always a result of the input

    //lodash range gives us an array from 0 to activityNum
    const range = lodash.range(activityNum);

    //map range to activityTypes
    const randomActivity = range.map(() => {
        return activityTypes[Math.floor(Math.random()* activityTypes.length)];

    });

    //count up the number of activities in randomActivity
    //key of object is the entry in the registry
    //we're adding everything up and totaling it

    //randomActivities is an array of stuff, we want to count up the number of activityTypes into the activityCount object

    const activityCount = {};

    for(const activityType of randomActivity) {
        if(activityCount[activityType] === undefined) {
            activityCount[activityType] = 0;
        }
        activityCount[activityType] += 1;
    }

    const retrievedActivities = await Promise.all(Object.entries(activityCount).map(([ activityType, activityCount ]) => {
        const providers = registry[activityType];
        const provider = providers[Math.floor(Math.random()* providers.length)];


        return provider(event, activityCount);
    }));

    return retrievedActivities.flat();


}

module.exports = activityGeneration;