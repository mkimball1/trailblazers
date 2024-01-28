export const convertZipToLatLong = async (zipcode) => {
    const api_key = '0818bd911078f8059a7e1f4387dbf3d8';
    const api_address = `https://thezipcodes.com/api/v1/search?zipCode=${zipcode}&apiKey=${api_key}`;
    
    let response = await fetch(api_address);
    response = await response.json()

    try{
        let latitude = response.location.find(obj => obj['country'] === 'US').latitude;
        let longitude = response.location.find(obj => obj['country'] === 'US').longitude;
        return {latitude: latitude, longitude: longitude} 
    }
    catch{
        return
    }
};