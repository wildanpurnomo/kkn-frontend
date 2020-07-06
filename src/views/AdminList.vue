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
    <v-container>
      <v-card flat>
        <v-layout row wrap pa-3 class="red darken-1">
          <v-flex md10 xs10>
            <div class="white--text text-h5">Daftar Akun Admin</div>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text dark dense style="text-transform: capitalize" :to="{name: 'AddAdmin'}">
              <v-icon>mdi-plus-thick</v-icon>
              <span class="white--text text-h6 hidden-sm-and-down">Tambah</span>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap mt-5>
          <v-flex>
            <v-text-field v-model="searchQuery" outlined label="Cari..."></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap pa-3 v-for="(data, index) in filteredAdmin" :key="index">
          <v-flex md8 xs8>
            <span class="text-h6">{{data.username}}</span>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text :to="{ name: 'EditAdmin', params: {adminId: data._id}}">
              <v-icon>mdi-pencil</v-icon>&nbsp;
              <span class="hidden-sm-and-down">Edit</span>
            </v-btn>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end" v-if="!isCurrentUser(data._id)">
            <v-btn text @click="showDeleteConfirmationDialog(data)">
              <v-icon>mdi-delete</v-icon>&nbsp;
              <span class="hidden-sm-and-down">Hapus</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-dialog v-model="deleteDialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="headline">Konfirmasi penghapusan</v-card-title>
        <v-card-text>Anda akan menghapus salah satu akun admin. Mohon tuliskan ulang username untuk konfirmasi.</v-card-text>
        <v-card-text class="text-center text-h5 font-weight-bold">{{usernameToBeDeleted}}</v-card-text>
        <v-card-text>
          <v-form ref="deleteConfirmationForm" v-model="deleteDialogValid">
            <v-text-field label="Masukkan username" :rules="deleteDialogTextFieldRules" required></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">Batal</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="proceedDeleteAdmin"
            :disabled="!deleteDialogValid"
          >Ya</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "AdminList",
  data() {
    return {
      deleteDialogValid: false,
      deleteDialog: false,
      idToBeDeleted: "",
      usernameToBeDeleted: "",
      searchQuery: "",
      adminCollection: [],
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
        }
      ],
      deleteDialogTextFieldRules: [
        v =>
          (!!v && v) === this.usernameToBeDeleted ||
          "Masukkan password yang sama."
      ]
    };
  },
  computed: {
    filteredAdmin() {
      return this.adminCollection.filter(item => {
        return item.username.toLowerCase().match(this.searchQuery);
      });
    }
  },
  created() {
    this.$http
      .get(`${this.$API_BASE_URL.API_BASE_URL}admin`)
      .then(res => {
        this.adminCollection = res.data;
      })
      .catch(err => {
        console.log(err.response);
      });
  },
  methods: {
    isCurrentUser(dataId) {
      return dataId === JSON.parse(localStorage.userData).userId;
    },
    showDeleteConfirmationDialog(adminData) {
      this.idToBeDeleted = adminData._id;
      this.usernameToBeDeleted = adminData.username;
      this.deleteDialog = true;
    },
    async proceedDeleteAdmin() {
      try {
        let response = await this.$http.delete(
          `${this.$API_BASE_URL.API_BASE_URL}admin/delete/${this.idToBeDeleted}`
        );
        if (response) {
          this.$http
            .get(`${this.$API_BASE_URL.API_BASE_URL}admin`)
            .then(res => {
              this.adminCollection = res.data;
            })
            .catch(err => {
              console.log(err.response);
            });
          this.deleteDialog = false;
        }
      } catch (error) {
        console.log(error.response);
        this.deleteDialog = false;
      }
    }
  }
};
</script>
<style scoped>
</style>
