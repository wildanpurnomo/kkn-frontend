<template>
  <v-container>
    <v-row>
      <v-layout row wrap justify-center align-center>
        <v-flex md6 pa-5 class="hidden-sm-and-down">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </v-flex>
        <v-flex md6 sm12 pa-5 class="hidden-sm-and-down">
          <div class="text-h3 text-md-h3 black--text font-weight-light">Wisata Asik, Tetap Aman</div>
          <br />
          <div
            class="text-h5 text-md-h5 black--text font-weight-light black--text"
          >Ini pokoknya aku perlu bahan buat tulisan "kesiapan wisata sendang di era new normal". Gambarnya ya kompilasi gambar relevan kayak wastafel, petugas yang pake face shield, dsb.</div>
        </v-flex>
        <v-flex sm12 xs12 hidden-md-and-up>
          <v-parallax height="500" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <div
                  class="text-h3 text-md-h3 black--text font-weight-light"
                >Wisata Asik, Tetap Aman</div>
                <br />
                <div
                  class="text-h5 text-md-h5 black--text font-weight-light black--text"
                >Ini pokoknya aku perlu bahan buat tulisan "kesiapan wisata sendang di era new normal". Gambarnya ya kompilasi gambar relevan kayak wastafel, petugas yang pake face shield, dsb.</div>
              </v-col>
            </v-row>
          </v-parallax>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NewNormalTeaser"
};
</script>

<style scoped>
</style>
