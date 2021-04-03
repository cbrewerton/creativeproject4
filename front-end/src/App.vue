
<template>
<div id="app">
  <div class="header">
    <router-link to="/">Home</router-link> | 
    <router-link to="/admin"> Admin</router-link>
    <h1>Gym Membership</h1>
  </div>
  <div class="content">
    <router-view />
    <section class="gym-gallery">
    <div class="image" v-for="gym in gyms" :key="gym.id">
      <h2>{{gym.name}}</h2>
    </div>
    </section>
  </div>
  <div class="footer">
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}
.gym-gallery {
  column-gap: 1.5em;
}
.header {
  background-color: #5bffbb;
  color: #000000;
  padding: 7px;
}
.header h1{
  font-size: 60px;
  text-align: center;
}
.content {
  padding: 20px 100px;
  min-height: 500px;
}
.content p {
  text-align: center;
}
/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #807b7b;
  font-size: 12px;
}
.footer a {
  color: #000;
}
</style>
