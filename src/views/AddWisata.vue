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
    <div class="text-h5">Tambah Lokasi Wisata</div>
    <Form />
  </v-container>
</template>

<script>
import Form from "@/components/map/adminDashboard/WisataForm.vue";

export default {
  name: "AddWisata",
  components: {
    Form
  },
  data() {
    return {
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
          text: "Tambah",
          disabled: false,
          href:  "/map/dashboard/catalogue/wisata/add"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
