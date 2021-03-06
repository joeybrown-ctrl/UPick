/* eslint-disable no-unused-vars */
const Axios = require('axios');
require('dotenv').config();


const cuisine = [
    {id: '1', name: 'American'},
    {id: '3', name: 'Asian'},
    {id: '193', name: 'BBQ'},
    {id: '30', name: 'Cafe'},
    {id: '40', name: 'Fast Food'},
    {id: '156', name: 'Greek'},
    {id: '55', name: 'Italian'},
    {id: '82', name: 'Pizza'},
    {id: '997', name:'Taco'},
    {id: '308', name: 'Vegetarian'},

];
//we need to hide the user key
const zomatoHeaders = { 'user-key': process.env.ZOMATO_APIKEY };

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