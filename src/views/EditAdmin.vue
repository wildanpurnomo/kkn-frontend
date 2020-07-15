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
    <div class="text-h5">Edit Admin</div>
    <Form @updateAccount="updateAccount"/>
  </v-container>
</template>

<script>
import Form from "@/components/map/adminDashboard/EditAdminForm.vue";

export default {
  name: "EditAdmin",
  components: {
    Form
  },
  data() {
    return {
      adminData: {},
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
          text: "Edit",
          disabled: false,
          href: `/map/dashboard/access/admin/edit/${this.$route.params.adminId}`
        }
      ]
    };
  },
  methods: {
      updateAccount(data) {
          this.$emit('updateAccount', data);
      }
  }
};
</script>
<style scoped>
</style>
