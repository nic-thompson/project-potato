const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/events', async (req, res) => {
  const event = req.body;
  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Event Bus is running on 4005');
});
