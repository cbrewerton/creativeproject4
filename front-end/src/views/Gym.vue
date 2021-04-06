<template>
<div class="home">
  <section class="image-gallery">
      <h1>{{ gym.location }}</h1>
      <h1>{{ gym.trainers}}</h1>
      <h1>{{ gym.amenities}}</h1>
  </section>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: "GymDetail",
  data: function () {
    return {
      loading: false,
      gyms: [],
      amenities: [],
      trainers: [],
    };
  },
  created: function () {
    this.getGyms();
  },
  methods:{
      async getGyms() {
      try {
        let response = await axios.get("/api/gyms");
        this.gyms = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>