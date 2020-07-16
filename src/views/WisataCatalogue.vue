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
            <div class="white--text text-h5">Daftar Wisata Ditambahkan</div>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn
              text
              dark
              dense
              style="text-transform: capitalize"
              :to="{name: 'AddWisata'}"
            >
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
        <v-layout row wrap pa-3 v-for="(data, index) in filteredLocations" :key="index">
          <v-flex md8 xs8>
            <span class="text-h6">{{data.name}}</span>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text :to="{ name: 'EditWisata', params: {wisataId: data._id}}">
              <v-icon>mdi-pencil</v-icon>&nbsp;
              <span class="hidden-sm-and-down">Edit</span>
            </v-btn>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text @click="showDeleteDialogConfirmation(data.name, data._id)">
              <v-icon>mdi-delete</v-icon>&nbsp;
              <span class="hidden-sm-and-down">Hapus</span>
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
      searchQuery: "",
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
        }
      ]
    };
  },
  created() {
    this.getVenues();
  },
  computed: {
    filteredLocations() {
      return this.locationCollection.filter(item => {
        return item.name.toLowerCase().match(this.searchQuery);
      })
    }
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
