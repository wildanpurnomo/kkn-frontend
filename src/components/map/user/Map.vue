<template >
  <div>
    <v-container fluid pa-0 style="height: 100vh">
      <v-layout style="height: 100%">
        <gmap-map
          :center="center"
          :zoom="12"
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
          :src="`http://localhost:3000/api/venue/img/${getLocationData[indexChosen].imageURL}`"
          class="align-end"
        >
          <v-card-title class="white--text font-weight-light">{{getLocationData[indexChosen].name}}</v-card-title>
        </v-img>

        <v-card-text class="text-justify black--text" style="padding: 10px; height: 250px">
          <div style="white-space: pre-wrap">{{getLocationData[indexChosen].description}}</div>
        </v-card-text>
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
      required: true
    },
    indexChosen: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      center: {
        lat: -7.7999592,
        lng: 110.8801834
      },
      dialog: false
    };
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
    }
  }
};
</script>

<style scoped>
</style>
