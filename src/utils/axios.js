// client.js

const axios = require('axios');

const client = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? process.env.AXIOS_BASE_URL : 'http://localhost:9000'
});

module.exports = client;
