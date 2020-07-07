<template >
  <div fill-height style="max-height: 100vh">
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
            <div class="text-h6 font-weight-regular">Watu Cenik</div>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <article
              class="text-justify text-h6 font-weight-regular"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, accusamus. Modi autem perspiciatis obcaecati eligendi dolore culpa ea unde veniam animi sequi eum magni, qui natus labore incidunt a ratione!</article>
          </v-list-item>

          <br />

          <v-list-item>
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <v-container fluid pa-0>
      <gmap-map :center="center" :zoom="12" style="width: 100%; height: 800px">
        <gmap-marker
        :key="index"
        v-for="(loc, index) in data"
        :position="getLocationCoordinates(loc.location.coordinates)">
        </gmap-marker>
      </gmap-map>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      center: {
        lat: -7.7999592,
        lng: 110.8801834
      },
      data: [
        {
          name: "Watu Cenik",
          description:
            "Watu cenik merupakan wisata yang luar biasa indah megah asri luar biasa indah megah asri yang terletak di Desa Sendang, Kecamatan Wonogiri.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          location: {
            coordinates: [-7.7999592, 110.8801834]
          }
        },
        {
          name: "Puncak Joglo",
          description:
            "Puncak Joglo merupakan wisata yang luar biasa indah megah asri luar biasa indah megah asri yang terletak di Desa Sendang, Kecamatan Wonogiri.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          location: {
            coordinates: [-7.900000, 110.8801834]
          }
        },
        {
          name: "Waduk Gajah Mungkur",
          description:
            "Waduk Gajah Mungkur merupakan wisata yang luar biasa indah megah asri luar biasa indah megah asri yang terletak di Desa Sendang, Kecamatan Wonogiri.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          location: {
            coordinates: [-7.900000, 110.8950000]
          }
        },
      ]
    };
  },
  methods: {
    getLocationCoordinates (coords) {
      return {
        lat: coords[0],
        lng: coords[1],
      }
    }
  }
};
</script>
