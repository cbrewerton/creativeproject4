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
        <button @click="upload">Add Gym</button>
      </div>
      <div class="upload" v-if="addGym">
        <h2>{{addGym.location}}</h2>
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete a Gym</h2>
    </div>
    <div class="edit">
      <div class="upload" v-if="findGym">
        <input v-model="findGym.title">
      </div>
      <div class="actions" v-if="findGym">
        <button @click="deleteItem(findGym)">Delete</button>
        <button @click="editItem(findGym)">Edit</button>
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
      location: "",
      amenities: "",
      trainers: "",
      addGym: null,
      items: [],
      findGym: null,
      findLocation: null
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
          path: response.data.path
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
    selectGym(gym) {
      this.findLocation = "";
      this.findGym = gym;
    },
    async deleteGym(gym) {
      try {
        await axios.delete("/api/gyms/" + gym._id);
        this.findGym = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editGym(gym) {
      try {
        await axios.put("/api/gyms/" + gym._id, {
          location: this.findGym.location,
        });
        this.findGym = null;
        this.getItems();
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

/* Uploaded images */
.upload h2 {
  margin: 0px;
}
</style>
