<template >
  <div>
    <v-container fluid pa-0 style="height: 100vh">
      <v-layout style="height: 100%">
        <gmap-map
          :center="center"
          :zoom="15"
          :options="{mapTypeControl: false}"
          style="width: 100%; height: 100%"
        >
          <gmap-marker
            :key="index"
            v-for="(loc, index) in getLocationData"
            :position="getLocationCoordinates(loc.location.coordinates)"
            :icon="index === indexChosen ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'"
            @click="changeIndexChosen(index)"
          ></gmap-marker>
        </gmap-map>
      </v-layout>
    </v-container>

    <v-dialog v-model="dialog" width="500" scrollable>
      <v-card>
        <v-img
          :src="`${$API_BASE_URL.API_BASE_URL}venue/img/${getLocationData[indexChosen].imageURL}`"
          class="align-end"
        >
          <v-card-title class="white--text font-weight-light">{{getLocationData[indexChosen].name}}</v-card-title>
        </v-img>

        <v-card-text class="text-justify black--text" style="padding: 10px; height: 250px">
          <div style="white-space: pre-wrap">{{getLocationData[indexChosen].description}}</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isFirstTimeInPage" max-width="500" persistent>
      <v-card>
        <v-card-title class="headline">Selamat datang</v-card-title>

        <v-card-text>Klik pada penanda biru untuk melihat informasi lokasi.</v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="changeIsFirstTimeInPage">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MapMap",
  props: {
    locationData: {
      type: Array,
      required: true,
    },
    indexChosen: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      center: {
        lat: -7.8500143,
        lng: 110.9019283
      },
      dialog: false,
      initDialog: true,
      isFirstTimeInPage: true,
    };
  },
  mounted() {
    if (localStorage.isFirstTimeInPage !== null) {
      this.isFirstTimeInPage = !localStorage.isFirstTimeInPage;
    }
  },
  computed: {
    getLocationData() {
      return this.locationData;
    }
  },
  methods: {
    getLocationCoordinates(coords) {
      return {
        lat: coords[1],
        lng: coords[0]
      };
    },
    changeIndexChosen(index) {
      this.$emit("indexChosenChanged", index);

      if (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm"
      ) {
        this.dialog = true;
      }
    },
    changeIsFirstTimeInPage() {
      this.isFirstTimeInPage = false;
      localStorage.isFirstTimeInPage = false;
    }
  }
};
</script>

<style scoped>
</style>
