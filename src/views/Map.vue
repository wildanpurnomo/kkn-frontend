<template >
  <div>
    <Sidebar :locationData="data" :indexChosen="indexChosen"/>
    <MapView :locationData="data" :indexChosen="indexChosen" @indexChosenChanged="updateIndexChosen($event)"/>
  </div>
</template>

<script>
import Sidebar from '@/components/map/user/Sidebar.vue';
import MapView from '@/components/map/user/Map.vue';

export default {
  name: "Map",
  components: {
    Sidebar,
    MapView,
  },
  mounted() {},
  data() {
    return {
      indexChosen: 0,
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
          imageUrl: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
          location: {
            coordinates: [-7.9, 110.8801834]
          }
        },
        {
          name: "Waduk Gajah Mungkur",
          description:
            "Waduk Gajah Mungkur merupakan wisata yang luar biasa indah megah asri luar biasa indah megah asri yang terletak di Desa Sendang, Kecamatan Wonogiri.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
          location: {
            coordinates: [-7.9, 110.895]
          }
        }
      ]
    };
  },
  methods: {
    updateIndexChosen: function(newIndex) {
      this.indexChosen = newIndex;
    }
  }
};
</script>

<style scoped>
</style>
