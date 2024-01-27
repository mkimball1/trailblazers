import 'axios';
const axios = require('axios');
export var trailResults = { }

const convertZipToLatLong = (zipcode) => {
    
}

export const createOptions = (zipcode) => {
    latitude, longitude = convertZipToLatLong(zipcode);
    return {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
        params: {
            lat: '<REQUIRED>',
            lon: '<REQUIRED>'
        },
        headers: {
            'X-RapidAPI-Key': '6aacd49bc6mshd729a53f4cd2021p1896ddjsn624706bd7e13',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
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
// };



// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

// export async function findTrails(zipcode){
    // let apiLin = `${}asdf`
    // let matchIDsLink = `${riotBaseMatchHistory}/tft/match/v1/matches/by-puuid/${userIDS.puuid}/ids?api_key=${riotKey}`
    // let response = await fetch(matchIDsLink);
    // response = await response.json()
    // for(let i = 0; i < response.length; i++){
    //     MatchHistoryIDS[i] = response[i]
    // }

    // for(let i = 0; i < MatchHistoryIDS.length; i++){
    //     let matchLink = `${riotBaseMatchHistory}/tft/match/v1/matches/${MatchHistoryIDS[i]}?api_key=${riotKey}`
        
    //     response = await fetch(matchLink);
    //     response = await response.json()
    //     if(response.info.tft_set_core_name === "TFTSet7_2")
    //         Matches[`Match${(Object.keys(Matches).length) + 1}`] = response
    // }
    
    // for(let i = 0; i < Object.keys(Matches).length; i++){
    //     let playerNames = []

    //     let currentMatch = Matches[`Match${i + 1}`]   
    //     console.log(currentMatch) 
        
    //     for(let j = 0; j < 8; j++){
    //         let playerNameLink = (`${riotBase}/lol/summoner/v4/summoners/by-puuid/${currentMatch.metadata.participants[j]}?api_key=${riotKey}`)    
    //         response = await fetch(playerNameLink);
    //         response = await response.json()
    //         playerNames.push(response.name)
    //     }

    //     console.log(playerNames)  
    // }
// }