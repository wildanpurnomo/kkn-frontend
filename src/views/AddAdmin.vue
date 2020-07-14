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
    <div class="text-h5">Tambah Admin</div>
    <Form />
  </v-container>
</template>

<script>
import Form from "@/components/map/adminDashboard/AddAdminForm.vue";

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
          text: "Akses",
          disabled: false,
          href: "/map/dashboard"
        },
        {
          text: "Admin",
          disabled: false,
          href: "/map/dashboard/access/admin"
        },
        {
          text: "Tambah",
          disabled: false,
          href:  "/map/dashboard/access/admin/add"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
