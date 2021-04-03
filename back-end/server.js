const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/gyms', {
  useNewUrlParser: true
});


app.get('/api/gyms', async (req, res) => {
  try {
    let gyms = await Gym.find();
    res.send(gyms);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/gyms', async (req, res) => {
  const gym = new Gym({
    location: req.body.location,
    trainers: req.body.trainers,
    amenities: req.body.amenities,
    path: req.body.path,
  });
  try {
    await gym.save();
    res.send(gym);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/gyms/:id', async (req, res) => {
  try{
    await Gym.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/gyms/:id', async (req, res) => {
  try{
    let gym = await Gym.findOne({
      _id: req.params.id
    });
    gym.location = req.body.location
    gym.trainers = req.body.trainers
    gym.amenities = req.body.amenities
    gym.save();
    res.sendStatus(200);
  } catch (error){
    res.sendStatus(500);
  }
});

// Create a scheme for gyms, trainers, and amenities
const gymSchema = new mongoose.Schema({
  location: String,
  trainers: String,
  amenities: String,
  path: String,
});

// Create a model for items in the museum.
const Gym = mongoose.model('Gym', gymSchema);


app.listen(3000, () => console.log('Server listening on port 3000!'));