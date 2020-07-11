<template >
  <div>
    <Toolbar :userData="userData"/>
    <router-view ></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from "@/components/map/adminDashboard/Toolbar.vue";

export default {
  name: "MapDashboard",
  components: {
    Toolbar,
  },
  data() {
    return {
      userData: {}
    };
  },
  created() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  },
};
</script>
