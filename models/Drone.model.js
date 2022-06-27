// Iteration #1

const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  name: {
    type: String
  },
  propellers:{
type:Number

  },
  maxSpeed: {
    type: Number
  }
});

const Drone = mongoose.model("Drones", droneSchema);
//Pokemon -> pokemons
module.exports = Drone;
