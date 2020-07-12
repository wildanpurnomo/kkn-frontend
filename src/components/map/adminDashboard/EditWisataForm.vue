<template>
  <v-container>
    <div class="text-h5">Edit Lokasi Wisata</div>
    <Form :isEdit="true" :editedData="editedData" />
  </v-container>
</template>

<script>
import Form from "@/components/map/adminDashboard/AddWisataForm.vue";

export default {
  name: "AddWisata",
  components: {
    Form
  },
  data() {
    return {
      editedData: {}
    };
  },
  created() {
      this.$http.get(`http://localhost:3000/api/venue/${this.$route.params.wisataId}`, (res, err) => {
          this.editedData = res.data;
      })
  }
};
</script>
<style scoped>
</style>
