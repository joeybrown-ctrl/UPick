/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable camelcase */
const Axios = require("axios");


const genres = [
    {id: "1365", name: "Action & Adventure"},
    {id: "7424", name: "Anime"},
    {id: "783", name: "Children & Family"},
    {id: "31574", name: "Classics"},
    {id: "6548", name: "Comedies"},
    {id: "6839", name: "Documentaries"},
    {id: "5763", name: "Dramas"},
    {id: "8711", name: "Horror"},
    {id: "8883", name: "Romantic"},
    {id: "1492", name: "Sci-fi & Fantasy"},
    {id: "8933", name: "Thrillers"},
];

async function unogsng(event, activityNum) {

    const filterGenre = genres.filter(item => item.name === event.movieGenre);


    const netflixHeader = {
        method: "GET",
        url: "https://unogsng.p.rapidapi.com/search",
        params: {
            genrelist: filterGenre[0],
            start_year: "1980",
            orderby: "rating",
            audiosubtitle_andor: "and",
            limit: activityNum,
            subtitle: "english",
            countrylist: "78", //code for US
            audio: "english",
            country_andorunique: "unique",
            offset: "0",
            end_year: "2020",
        },
        headers: {
            "x-rapidapi-key": "eddac634f6msh1369aef8a00bc3fp156f8cjsn43d94794b678",
            "x-rapidapi-host": "unogsng.p.rapidapi.com",
        },
    };

    const result = await Axios.request(netflixHeader);
    console.log(result.data);

    return result.data.results.map(movie => {
        return {
            Name : movie.title,
            URL: null,
            Image: movie.img
        };
    });

}

module.exports = unogsng;
