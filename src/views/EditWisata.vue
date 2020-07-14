<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md12 xs12>
        <v-breadcrumbs :items="breadcrumbsItems">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-flex>
    </v-layout>
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
      editedData: {},
      breadcrumbsItems: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/map/dashboard"
        },
        {
          text: "Katalog",
          disabled: false,
          href: "/map/dashboard"
        },
        {
          text: "Wisata",
          disabled: false,
          href: "/map/dashboard/catalogue/wisata"
        },
        {
          text: "Edit",
          disabled: false,
          href: `/map/dashboard/catalogue/wisata/edit/${this.$route.params.wisataId}`
        }
      ]
    };
  },
  created() {
    this.$http
      .get(`http://localhost:3000/api/venue/${this.$route.params.wisataId}`)
      .then(res => {
        this.editedData = res.data;
      })
      .catch(err => {
        console.log(err.response);
      });
  }
};
</script>
<style scoped>
</style>
