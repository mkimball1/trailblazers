export var trailResults = { }

export async function findTrails(zipcode){
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
}