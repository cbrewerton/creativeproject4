<template>
<div class="home">
  <div class="home">
  <p>Click on a specific gym for some info about certain gyms, its trainers, and amenities in the Utah Valley area!</p>
  <section class="image-gallery">
    <div v-for="gym in gyms" :key="gym.id">
      <router-link :to="`gym/${gym.gymid}`">{{ gym.location }}</router-link>
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
