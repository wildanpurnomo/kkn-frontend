<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <div
            class="text-md-h3 text-lg-h3 text-xl-h3 text-sm-h5 text-h5 font-weight-light black--text"
          >Halaman Tidak Ditemukan</div>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="6" md="2" class="text-end">
            <router-link class="link" :to="{name: 'Landing'}"><div class="text-h5 font-weight-light">Landing</div></router-link>
          </v-col>
          <v-col cols="6" md="2" class="text-start">
            <router-link class="link" :to="{name: 'Map'}"><div class="text-h5 font-weight-light">Peta</div></router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Error404"
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>