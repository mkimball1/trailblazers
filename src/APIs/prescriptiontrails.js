import axios from 'axios';
export const convertZipToLatLong = async (zipcode) => {
    const api_key = '0818bd911078f8059a7e1f4387dbf3d8';
    const api_address = `https://thezipcodes.com/api/v1/search?zipCode=${zipcode}&apiKey=${api_key}`;
    
    let response = await fetch(api_address);
    response = await response.json()

    return {latitude: response.location[3].latitude, longitude: response.location[3].longitude}
};

// f255df9efb841bfe43ab2d741c695756ac4a6cf5

export const createOptions = (zipcode) => {
    let latitude = "";
    let longitude = "";
    let data = convertZipToLatLong(zipcode).then(my_data => {
        console.log(my_data);
        latitude = my_data.latitude
        longitude = my_data.longitude;
    })

    return {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
        params: {
            lat: latitude,
            lon: longitude
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
        return response
    } catch (error) {
        console.error(error);
    }
};