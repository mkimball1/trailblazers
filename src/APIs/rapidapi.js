import axios from 'axios';

export const createOptions = (data) => {
    console.log(data.latitude, data.longitude)
    return {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
        params: {
            lat: data.latitude,
            lon: data.longitude,
            radius: data.radius
        },
        headers: {
            'X-RapidAPI-Key': '6aacd49bc6mshd729a53f4cd2021p1896ddjsn624706bd7e13',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    }
};

export const getTrails = async (data) => {
    console.log("MY DATA" ,data)
    try {
        let response = await axios.request(createOptions({
            "latitude": data.latitude, 
            "longitude": data.longitude,
            "radius": data.radius
        }));
        response = response.data.data

        const trueKeys = Object.entries(data.difficulty)
            .filter(([key, value]) => value === true)
            .map(([key, value]) => key);
        trueKeys.push("")
        const filteredResponse = response.filter(obj => trueKeys.includes(obj.difficulty));

        return filteredResponse
    } catch (error) {
        console.error(error);
    }
};