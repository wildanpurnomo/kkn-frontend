<template>
  <v-container>
    <div class="text-h5">Edit Wisata</div>
    <Form :isEdit="true" :editedData="editedData" />
  </v-container>
</template>

<script>
import Form from "@/components/map/adminDashboard/WisataForm.vue";

export default {
  name: "EditWisata",
  components: {
    Form
  },
  data() {
    return {
      editedData: {}
    };
  },
  created() {
    this.$http.get(
      `http://localhost:3000/api/venue/${this.$route.params.wisataId}`
    ).then(res => {
      this.editedData = res.data;
    }).catch(err => {
      console.log(err.response);
    });
  },
};
</script>
<style scoped>
</style>
