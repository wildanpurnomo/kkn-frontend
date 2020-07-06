<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col md="6" pa-5>
            <div class="text-h4 text-md-h4 font-weight-light black--text">Kunjungi Peta Digital Kami</div>
            <br />
            <div
              class="text-body1 text-md-body1 font-weight-light black--text text-justify"
            >Kunjungi peta digital kami untuk melihat secara visual lokasi-lokasi wisata Desa Sendang. Informasi lebih lengkap mengenai tiap lokasi juga tertera.</div>
            <br />
            <router-link :to="{name: 'Map'}" style="text-decoration: none">
              <v-btn class="primary">Kunjungi Laman</v-btn>
            </router-link>
          </v-col>
          <v-col md="6" pa-5 class="hidden-sm-and-down">
            <v-img :src="require('@/assets/landing/map.png')"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DigitalMapTeaser",
};
</script>

<style scoped>
</style>
