<template>
  <v-container>
    <div class="text-h5">Katalog Wisata</div>
    <v-container>
      <v-card flat>
        <v-layout row wrap pa-3 class="blue darken-1">
          <v-flex md10 xs10>
            <div class="white--text text-h5">Daftar Wisata Ditambahkan</div>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn
              text
              class="blue darken-1"
              dark
              dense
              style="text-transform: capitalize"
              :to="{name: 'AddWisata'}"
            >
              <v-icon>mdi-plus-thick</v-icon>
              <span class="white--text text-h6">Tambah</span>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap pa-3 v-for="(data, index) in locationCollection" :key="index">
          <v-flex md8 xs8>
            <span class="text-h6">{{data.name}}</span>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text :to="{ name: 'EditWisata', params: {wisataId: data._id}}">
              <v-icon>mdi-pencil</v-icon>&nbsp;
              <span>Edit</span>
            </v-btn>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text @click="showDeleteDialogConfirmation(data.name, data._id)">
              <v-icon>mdi-delete</v-icon>&nbsp;
              <span>Hapus</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-dialog v-model="deleteConfirmation" max-width="500" persistent>
      <v-card>
        <v-card-title class="headline">Konfirmasi penghapusan</v-card-title>
        <v-card-text>{{`Anda akan menghapus ${wisataToBeDeleted}`}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteConfirmation = !deleteConfirmation">Batal</v-btn>
          <v-btn color="blue darken-1" text @click="onDeleteVenue()">Ya</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "WisataCatalogue",
  data() {
    return {
      locationCollection: [],
      deleteConfirmation: false,
      idToBeDeleted: "",
      wisataToBeDeleted: "",
      breadcrumbsItems: [
        {
          text: "Dasbor",
          disabled: false,
          link: true,
          to: { name: "SiteAdministration" }
        }
      ]
    };
  },
  created() {
    this.getVenues();
  },
  methods: {
    getVenues: function() {
      this.$http
        .get("http://localhost:3000/api/venue")
        .then(response => {
          this.locationCollection = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showDeleteDialogConfirmation: function(name, venueId) {
      this.deleteConfirmation = true;
      this.wisataToBeDeleted = name;
      this.idToBeDeleted = venueId;
    },
    onDeleteVenue: async function() {
      try {
        let response = await this.$http.delete(
          `http://localhost:3000/api/venue/${this.idToBeDeleted}`
        );
        if (response.status === 200) {
          this.getVenues();
        }
      } catch (err) {
        console.log(err.response);
      }
      this.deleteConfirmation = false;
    }
  }
};
</script>
<style scoped>
</style>
