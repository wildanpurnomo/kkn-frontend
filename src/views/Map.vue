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
  created() {
    this.$http.get('http://localhost:3000/api/venue')
      .then(res => {
        this.data = res.data;
      })
      .catch(err => {
        console.log(err.response);
      })
  },
  data() {
    return {
      indexChosen: 0,
      data: []
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
