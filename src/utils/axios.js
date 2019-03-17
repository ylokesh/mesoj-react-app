// client.js

const axios = require('axios');

const client = axios.create({
	baseURL: 'https://mesoj-services.azurewebsites.net'
});

module.exports = client;
