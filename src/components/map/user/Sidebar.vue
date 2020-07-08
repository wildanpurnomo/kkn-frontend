<template >
  <nav>
    <v-navigation-drawer app class="white" width="450">
      <v-list style="padding: 0">
        <v-list-item class="blue darken-1" style="height: 75px">
          <div class="text-h5 white--text">Peta Digital Desa Sendang</div>
        </v-list-item>

        <v-list-item>
          <div class="text-caption">Klik pada penanda untuk melihat informasi lokasi.</div>
        </v-list-item>

        <v-list-item>
          <div class="text-h5 font-weight-black">{{locationData[indexChosen].name}}</div>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <article
            class="text-justify text-h6 font-weight-regular"
          >{{locationData[indexChosen].description}}</article>
        </v-list-item>

        <br />

        <v-list-item>
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "MapSidebar",
  props: {
    locationData: {
      type: Array,
      required: true
    },
    indexChosen: {
      type: Number,
      required: true
    }
  },
};
</script>

<style scoped>
</style>
