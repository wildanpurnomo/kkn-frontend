<template>
  <v-container>
    <v-row>
      <v-layout row wrap justify-center align-center>
        <v-flex md6 pa-5 class="hidden-sm-and-down">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </v-flex>
        <v-flex md6 pa-5 class="hidden-sm-and-down">
          <div class="text-h3 text-md-h3 font-weight-light black--text">Gantolle</div>
          <br />
          <div
            class="text-h5 text-md-h5 font-weight-light black--text text-justify"
          >Ini pokoknya perlu saran deskripsi singkat menarik tentang Gantolle desa sendang. Sama gambar wisata paralayang yang kalo bisa terbaru. Sebenere minta pak agung bisa bisa aja.</div>
        </v-flex>
        <v-flex sm12 xs12 hidden-md-and-up>
          <v-parallax height="500" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <div class="text-h3 text-md-h3 font-weight-light black--text">Gantolle</div>
                <br />
                <div
                  class="text-h5 text-md-h5 font-weight-light black--text"
                >Ini pokoknya perlu saran deskripsi singkat menarik tentang Gantolle desa sendang. Sama gambar wisata paralayang yang kalo bisa terbaru. Sebenere minta pak agung bisa bisa aja.</div>
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
  name: "Gantolle"
};
</script>

<style scoped>
</style>
