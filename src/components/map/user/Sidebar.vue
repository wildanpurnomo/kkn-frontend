<template >
  <nav>
    <v-navigation-drawer app class="white" width="450">
      <v-list style="padding: 0">
        <v-list-item class="red darken-1" style="height: 75px">
          <div class="text-h5 white--text">Peta Digital Desa Sendang</div>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <div class="text-caption">Klik pada penanda untuk melihat informasi lokasi.</div>
            <router-link :to="{name: 'Landing'}">
              <div class="text-caption">Kembali ke halaman Landing.</div>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <div class="text-h5 font-weight-light">{{locationData[indexChosen].name}}</div>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <article
            class="text-justify text-body-1 font-weight-regular"
            style="white-space: pre-wrap"
          >{{locationData[indexChosen].description}}</article>
        </v-list-item>

        <br />

        <v-list-item style="margin-bottom: 16px;">
          <v-img :src="`http://localhost:3000/api/venue/img/${locationData[indexChosen].imageURL}`"></v-img>
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
      required: true,
    },
    indexChosen: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
