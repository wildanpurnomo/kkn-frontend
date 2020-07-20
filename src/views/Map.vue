<template >
  <div>
    <Sidebar :locationData="data" :indexChosen="indexChosen" />
    <MapView
      :locationData="data"
      :indexChosen="indexChosen"
      @indexChosenChanged="updateIndexChosen($event)"
    />
  </div>
</template>

<script>
import Sidebar from "@/components/map/user/Sidebar.vue";
import MapView from "@/components/map/user/Map.vue";

export default {
  name: "Map",
  components: {
    Sidebar,
    MapView
  },
  created() {
    this.$http
      .get(`${process.env.API_BASE_URL}venue`)
      .then(res => {
        if (res.data.length > 0) {
          this.data = res.data;
        }
      })
      .catch(err => {
        console.log(err.response);
      });
  },
  data() {
    return {
      indexChosen: 0,
      data: [
        {
          name: "",
          description: "",
          imageURL: "",
          location: {
            coordinates: []
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
