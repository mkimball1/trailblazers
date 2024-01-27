import axios from 'axios';
export const convertZipToLatLong = async (zipcode) => {
    const api_key = '0818bd911078f8059a7e1f4387dbf3d8';
    const api_address = `https://thezipcodes.com/api/v1/search?zipCode=${zipcode}&apiKey=${api_key}`;
    
    let response = await fetch(api_address);
    response = await response.json()

    let latitude = response.location.find(obj => obj['country'] === 'US').latitude;
    let longitude = response.location.find(obj => obj['country'] === 'US').longitude;
    return {latitude: latitude, longitude: longitude} 
    
};

// f255df9efb841bfe43ab2d741c695756ac4a6cf5

export const createOptions = (data) => {
    console.log("Data: ", data)
    return {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
        params: {
            lat: data.latitude,
            lon: data.longitude
        },
        headers: {
            'X-RapidAPI-Key': '6aacd49bc6mshd729a53f4cd2021p1896ddjsn624706bd7e13',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    }
};

export const getResponse = async (data) => {
    try {
        let response = await axios.request(createOptions({
            "latitude": data.latitude, 
            "longitude": data.longitude
        }));
        response = response.data.data
        return response
    } catch (error) {
        console.error(error);
    }
};

const updateLatLong = async (zipcode) => {
    let lat = "33.684566";
    let long = "-117.826508";

    const my_data = await convertZipToLatLong(zipcode);
    lat = my_data.latitude;
    long = my_data.longitude;

    // Now lat and long are updated
    console.log("hurray: ", lat, long);
    return { lat, long };
};