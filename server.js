const express = require('express');
const axios = require('axios');
const app = express();
const TARGET_API = 'http://newsapi.org';

app.get('*', async (req, res) => {
    try {
        const response = await hitApi(req.originalUrl);
        res.json(response.data);
    } catch(err) {
        res.send(err);
    }
});

function hitApi(url) {
    return axios.get( TARGET_API + url);
}

app.listen(9000);