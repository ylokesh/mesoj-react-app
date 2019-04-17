// client.js

const axios = require('axios');

const client = axios.create({
	baseURL: 'https://mesojservices.azurewebsites.net'
});

module.exports = client;
