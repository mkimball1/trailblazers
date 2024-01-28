import axios from 'axios';

export function createUser(data){
    console.log(data)
    axios.post('https://us-central1.gcp.data.mongodb-api.com/app/trailblazer-dufbj/endpoint/createUser', data)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export function getUsers(){
    return axios.get('https://us-central1.gcp.data.mongodb-api.com/app/trailblazer-dufbj/endpoint/getUsers')
    .then((response) => {
        console.log('Data retrieved:', response.data);
        return response.data; // This will return the data as a resolved value of the promise
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for the caller to handle
    });
}

export function updateUser(username, data){
    console.log(username, data)
    axios.put("https://us-central1.gcp.data.mongodb-api.com/app/trailblazer-dufbj/endpoint/editUser?username="+username, data)
        .then(response => {
          console.log('Response:', response.data);
        //   setUsername(updatedUser);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    
}
