<template>
  <v-container>
    <v-row>
      <v-layout row wrap justify-center align-center>
        <v-flex md6 pa-5>
          <div class="text-h3 text-md-h3 font-weight-light black--text">Kunjungi Peta Digital Kami</div>
          <br />
          <div class="text-h5 text-md-h5 font-weight-light black--text text-justify">
            Kunjungi peta digital kami untuk melihat secara visual lokasi-lokasi wisata Desa Sendang. Informasi lebih lengkap mengenai tiap lokasi juga tertera. Anda juga bisa mengunduh aplikasi mobile di
            <a href>Google Play Store</a> dan <a href>App Store</a>.
          </div>
          <br />
          <v-btn class="primary" href="/map">Kunjungi Laman</v-btn>
        </v-flex>
        <v-flex md6 pa-5 class="hidden-sm-and-down">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DigitalMapTeaser"
};
</script>

<style scoped>
</style>
