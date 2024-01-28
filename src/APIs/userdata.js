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
    axios.get('https://us-east-1.aws.data.mongodb-api.com/app/serveandpass-wkoqd/endpoint/getUsers')
    .then((response) => {
        console.log('Data retrieved:', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

export function updateUser(username, data){
    console.log(username, data)
    axios.put("https://us-central1.gcp.data.mongodb-api.com/app/trailblazer-dufbj/endpoint/editUser?username="+username, data)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    // setCurrUser(updatedUser);
}
