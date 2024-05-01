const fetch = require('node-fetch');

function fetchUserData(username) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

fetchUserData('manuellaiv')
    .then(userData => {
        console.log(userData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
