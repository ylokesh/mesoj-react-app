// client.js

const axios = require('axios');

const client = axios.create({
	baseURL: 'http://localhost:9000'
});

module.exports = client;
