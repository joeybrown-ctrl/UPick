const Axios = require('axios');

//we need to hide the user key
const zomatoHeaders = { 'user-key': 'c0a1e1bcc2400f06c52b3bdc464aa489' };

async function zomato(event, activityNum) {
    const result = await Axios.get(
        `https://developers.zomato.com/api/v2.1/search?count=${activityNum}&${event.latitude}&${event.longitude}&sort=rating&order=desc`,
        { headers: zomatoHeaders }
    );
    return result.data.restaurants.map((restaurant) => {
        return {
            Name: restaurant.restaurant.name,
            URL: restaurant.restaurant.url,
            Image: restaurant.restaurant.featured_image || null,
        };
    });
    //we are going to map results to the activity object array

}

module.exports = zomato;