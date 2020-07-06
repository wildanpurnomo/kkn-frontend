<template>
  <v-container fluid fill-height class="landingHero" style="max-height: 100vh">
    <v-layout justify-center align-center column>
      <v-overlay :absolute="true" style="max-height: 100vh">
        <div class="animate__animated animate__backInUp">
          <div
            class="font-weight-black white--text text-h3 text-md-h1 text-center"
            v-show="show"
          >SELAMAT DATANG</div>
          <div
            class="font-weight-black white--text text-h3 text-md-h1 text-center"
          >DI WISATA SENDANG</div>
          <div
            class="display-1 font-weight-bold white--text text-center"
          >Wisata Asik, Nyaman dan Aman</div>
        </div>
      </v-overlay>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LandingHero",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.landingHero {
  background: url("../../assets/landing/sky2.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
