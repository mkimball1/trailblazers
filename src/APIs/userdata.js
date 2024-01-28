import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState("");
  const [currUser, setCurrUser] = useState();
  const [currSession, setCurrSession] = useState();
  const [listUsers, setlistUsers] = useState([])
}



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

//   const addSessionToUser = (newSessionList) => {
//     const updatedUser = new User(currUser.username);
//     updatedUser.sessions = [...currUser.sessions, newSessionList];

//     console.log("updatedUser:", updatedUser)
//     axios.put("https://us-east-1.aws.data.mongodb-api.com/app/serveandpass-wkoqd/endpoint/editUser?username="+updatedUser.username, updatedUser)
//         .then(response => {
//           console.log('Response:', response.data);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     setCurrUser(updatedUser);
//   };

//   useEffect(() => {
//     console.log("Update ListUsers")
//     axios.get('https://us-east-1.aws.data.mongodb-api.com/app/serveandpass-wkoqd/endpoint/getUsers')
//         .then((response) => {
//             setlistUsers(response.data)
//             console.log('Data retrieved:', response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//   }, [currUser, ])


  
//   function updateInputUsername(event) {
//     setUsername(event.target.value);
//   }

//   const incrementPass = (passKey) => {
//     const updatedSession = { ...currSession };
//     updatedSession.passes = {
//         ...currSession.passes,
//         [passKey]: currSession.passes[passKey] + 1,
//     };
//     updatedSession.total += passKey;
//     updatedSession.count += 1;
//     updatedSession.average = (updatedSession.total / updatedSession.count);
//     setCurrSession(updatedSession)
//   }

//   function initAll(event) {
//     event.preventDefault();
//     setCurrUser(null);
//     const foundUser = listUsers.find(user => user['username'] === username);
//     if (foundUser) {
//       toast("Loading User: " + username, {
//         position: toast.POSITION.BOTTOM_CENTER
//       })
//       setCurrUser(foundUser);
//     } else {
//       toast("Creating New User: " + username, {
//         position: toast.POSITION.BOTTOM_CENTER
//       })
//       setCurrUser(new User(username));
//       createUser()
//     }
//     setCurrSession(new Session(new Date().toLocaleDateString()));
//   }
// }

// export default App;
