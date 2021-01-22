import Axios from "axios";
const zomatoHeaders = { "user-key": "c0a1e1bcc2400f06c52b3bdc464aa489" };

//where do i put the key
//lat and lon need to be replaced with variables

//headers with axios ?
// does this is need an await?

const netflixHeader = {
  method: "GET",
  url: "https://unogsng.p.rapidapi.com/search",
  params: {
    genrelist: "1492",  // sci fi and fantasy currently selected 
    start_year: "1980",
    orderby: "rating",
    audiosubtitle_andor: "and",
    limit: "10",
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


// netflix API only wants tthe genre code for the search results 
// Action & Adventure (1365)
// Anime (7424)
// Children & Family (783)
// Classic (31574)
// Comedies (6548)
// Documentaries (6839)
// Dramas (5763)
// Horror (8711)
// Music (1701)
// Romantic (8883)
// Sci-fi & Fantasy (1492)
// Sports (4370)
// Thrillers (8933)

export function zomatoReturn(lat, lon) {
  return Axios.get(
    `https://developers.zomato.com/api/v2.1/search?count=10&${lat}&${lon}&sort=rating&order=desc`,
    { headers: zomatoHeaders }
  );
}

//recommened that i turn it into an async. i said sure 

export async function netflixReturn(genrecode) {
  try {
        const response = await Axios.request(netflixHeader);
        console.log(response.data);
        return response
    } catch (error) {
        console.error(error);
    }
};
