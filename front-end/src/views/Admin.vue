<template>
<div class="admin">
    <h1>Gyms Page</h1>
    <div class="heading">
      <h2>Here is where you can add or delete a gym</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="location" placeholder="Location">
        <p></p>
        <input v-model="trainers" placeholder="Trainers">
        <p></p>
        <input v-model="amenities" placeholder="Amenities">
        <p></p>
        <button @click="upload">Add Gym</button>
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete a Gym</h2>
    </div>
    <div class="edit">
      <div class="actions" v-for="gym in gyms" :key="gym.id">
        <h2>{{gym.location}}</h2>
        <input v-model="location" placeholder="New Location">
        <button @click="editLocation(gym)">Edit Location</button>
        <br>
        <h5>{{gym.trainers}}</h5>
        <input v-model="trainers" placeholder="New Trainers">
        <button @click="editTrainers(gym)">Edit Trainers</button>
        <br>
        <h5>{{gym.amenities}}</h5>
        <input v-model="amenities" placeholder="New Amenities">
        <button @click="editAmenities(gym)">Edit Amenities</button>
        <br>
        <button @click="deleteGym(gym)">Delete Gym</button>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data(){
    return{
      gyms: [],
      location: "",
      amenities: "",
      trainers: "",
      addGym: null,
    }
  },
  computed: {
  },
  created() {
    this.getGyms();
  },
  methods:{
    async upload() {
      try {
        let response = await axios.post('/api/gyms', {
          location: this.location,
          trainers: this.trainers,
          amenities: this.amenities,
        });
        this.addGym = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getGyms() {
      try {
        let response = await axios.get("/api/gyms");
        this.gyms = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteGym(gym) {
      try {
        await axios.delete("/api/gyms/" + gym._id);
        this.getGyms();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editLocation(gym) {
      try {
        await axios.put("/api/gyms/" + gym._id, {
          location: this.gym.location,
        });
        this.getGyms();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editTrainers(gym) {
      try {
        await axios.put("/api/gyms/" + gym._id, {
          trainers: this.gym.trainers,
        });
        this.getGyms();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editAmenities(gym) {
      try {
        await axios.put("/api/gyms/" + gym._id, {
          amenities: this.gym.amenities,
        });
        this.getGyms();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

.heading {
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  text-align: center;
  font-size: 50px;
}

.add form {
  display: inline-block;
  align-content: center;
}

input {
  font-family: 'Montserrat', sans-serif;
  font-size: 3em;
  align-content: center;
}

.upload h2 {
  margin: 0px;
}

h5, h2{
  display: inline-block;
  margin: 5px;
}

.actions input {
  display: inline-block;
  margin: 5px;
  font-size: 1em;
}

</style>
