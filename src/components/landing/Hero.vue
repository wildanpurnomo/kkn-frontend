<template>
  <v-container fluid fill-height class="landingHero" style="max-height: 100vh">
    <v-layout justify-center align-center column>
      <div class="font-weight-black white--text text-h3 text-md-h1 text-center">SELAMAT DATANG</div>
      <div class="font-weight-black white--text text-h3 text-md-h1 text-center">DI WISATA SENDANG</div>
      <div
        class="display-1 font-weight-bold white--text text-center"
      >Wisata Asik, Nyaman dan Aman</div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LandingHero"
};
</script>

<style scoped>
.landingHero {
  /* background: url('../../assets/landing/heropng.png'); */
  background: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
