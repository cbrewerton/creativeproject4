<template>
<div class="home">
  <div class="home">
  <p>Not sure which gym to join in the Utah area?</p>
  <p>Check a specific gym for some info about certain gyms, its trainers, and amenities in the Utah Valley area!</p>
  <section class="image-gallery">
    <div class="image" v-for="gym in gyms" :key="gym.id">
      <h1>{{ gym.location }}</h1>
      <ul>
        <li>
      <h1>Trainers: {{ gym.trainers }}</h1>
        </li>
        <li>
      <h1>Amenities: {{ gym.amenities }}</h1>
        </li>
      </ul>
    </div>
  </section>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Home",
  data: function () {
    return {
      loading: false,
      gyms: [],
    };
  },
  created: function () {
    this.getGyms();
  },
  methods: {
    async getGyms(){
      try{
        let response = await axios.get("/api/gyms");
        this.gyms = response.data;
        return true;
      } catch (error){
        console.log(error);
      }
    },
  }
};
</script>
