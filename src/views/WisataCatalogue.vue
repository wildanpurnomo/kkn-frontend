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
          <v-flex md4 xs4 style="text-align: end">
            <v-btn text :to="{ name: 'EditWisata', params: {wisataId: data._id}}">
              <v-icon>mdi-pencil</v-icon>&nbsp;
              <span>Edit</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "WisataCatalogue",
  data() {
    return {
      locationCollection: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/api/venue")
      .then(response => {
        this.locationCollection = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
</style>
