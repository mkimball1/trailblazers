<<<<<<< HEAD
// import 'axios';
// const axios = require('axios');
// // export var trailResults = { }

// const test_lat = "33.685909"
// const test_long = "-117.824722"

// // const convertZipToLatLong = (zipcode) => {
    
// // }

// export const createOptions = (zipcode) => {
//     // latitude, longitude = convertZipToLatLong(zipcode);
//     return {
//         method: 'GET',
//         url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
//         params: {
//             lat: test_lat,
//             lon: test_long
//         },
//         headers: {
//             'X-RapidAPI-Key': '6aacd49bc6mshd729a53f4cd2021p1896ddjsn624706bd7e13',
//             'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
//         }
//     }
=======
import axios from 'axios';
export var trailResults = { }

const test_lat = "33.685909"
const test_long = "-117.824722"

// const convertZipToLatLong = (zipcode) => {
//     const api_key = '0818bd911078f8059a7e1f4387dbf3d8';
//     const api_address = `https://thezipcodes.com/api/v1/search?zipCode=${zipcode}&apiKey=${api_key}`;
    
//     axios.get(api_address)
//     .then(response => {
//         const lat = response.data.location.latitude;
//         const lon = response.data.location.longitude;
//         console.log(lat);
//         console.log(lon);
//     })
//     .catch(error => {
//         console.error(error);
//     });

//     return lat , lon ;
// };

// f255df9efb841bfe43ab2d741c695756ac4a6cf5

export const createOptions = (zipcode) => {
    // latitude, longitude = convertZipToLatLong(zipcode);
    return {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
        params: {
            lat: test_lat,
            lon: test_long
        },
        headers: {
            'X-RapidAPI-Key': '6aacd49bc6mshd729a53f4cd2021p1896ddjsn624706bd7e13',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    }
};

export const getResponse = async (zipcode) => {
    try {
        console.log("Success")
        let response = await axios.request(createOptions(zipcode));
        response = response.data.data
        console.log(response)
        return response
    } catch (error) {
        console.error(error);
    }
};

// }
//   method: 'GET',
//   url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
//   params: {
//     lat: '<REQUIRED>',
//     lon: '<REQUIRED>'
//   },
//   headers: {
//     'X-RapidAPI-Key': '6aacd49bc6mshd729a53f4cd2021p1896ddjsn624706bd7e13',
//     'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
//   }
>>>>>>> f42811ac8626f3168fb920735661ab2422d11655
// };

// export const getTrails = async (zipcode) => {
//     trailResults = {}
//     try {
//         trailResults = await axios.request(createOptions(zipcode));
//     } catch (error) {
//         console.error(error);
//     }
//     return trailResults;
// };

// // }
// //   method: 'GET',
// //   url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
// //   params: {
// //     lat: '<REQUIRED>',
// //     lon: '<REQUIRED>'
// //   },
// //   headers: {
// //     'X-RapidAPI-Key': '6aacd49bc6mshd729a53f4cd2021p1896ddjsn624706bd7e13',
// //     'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
// //   }
// // };



// // try {
// //     const response = await axios.request(options);
// //     console.log(response.data);
// // } catch (error) {
// //     console.error(error);
// // }

// // export async function findTrails(zipcode){
//     // let apiLin = `${}asdf`
//     // let matchIDsLink = `${riotBaseMatchHistory}/tft/match/v1/matches/by-puuid/${userIDS.puuid}/ids?api_key=${riotKey}`
//     // let response = await fetch(matchIDsLink);
//     // response = await response.json()
//     // for(let i = 0; i < response.length; i++){
//     //     MatchHistoryIDS[i] = response[i]
//     // }

//     // for(let i = 0; i < MatchHistoryIDS.length; i++){
//     //     let matchLink = `${riotBaseMatchHistory}/tft/match/v1/matches/${MatchHistoryIDS[i]}?api_key=${riotKey}`
        
//     //     response = await fetch(matchLink);
//     //     response = await response.json()
//     //     if(response.info.tft_set_core_name === "TFTSet7_2")
//     //         Matches[`Match${(Object.keys(Matches).length) + 1}`] = response
//     // }
    
//     // for(let i = 0; i < Object.keys(Matches).length; i++){
//     //     let playerNames = []

//     //     let currentMatch = Matches[`Match${i + 1}`]   
//     //     console.log(currentMatch) 
        
//     //     for(let j = 0; j < 8; j++){
//     //         let playerNameLink = (`${riotBase}/lol/summoner/v4/summoners/by-puuid/${currentMatch.metadata.participants[j]}?api_key=${riotKey}`)    
//     //         response = await fetch(playerNameLink);
//     //         response = await response.json()
//     //         playerNames.push(response.name)
//     //     }

//     //     console.log(playerNames)  
//     // }
// // }