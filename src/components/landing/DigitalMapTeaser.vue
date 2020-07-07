<template>
  <v-container >
    <v-row>
      <v-layout row wrap justify-center align-center>
        <v-flex md6 pa-5>
          <div class="text-h3 text-md-h3 font-weight-light black--text">Kunjungi Peta Digital Kami</div>
          <br />
          <div
            class="text-h5 text-md-h5 font-weight-light black--text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore deleniti soluta perferendis expedita blanditiis et commodi porro nobis, odio doloribus! Velit veritatis eaque quo! Porro vero at neque eaque.</div>
          <br>
          <v-btn class="primary">Kunjungi Laman</v-btn>
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
