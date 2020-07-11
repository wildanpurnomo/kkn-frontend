<template>
  <v-container>
    <div class="text-h5">Katalog Wisata</div>
    <v-container>
      <v-card>
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
        <!-- <v-layout row wrap pa-3 v-for="(data, index) in collection.collectionList" :key="index">
          <v-flex md8 xs8>
            <router-link :to="data.toList">
              <span class="text-h6">{{data.name}}</span>
            </router-link>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text :to="data.toAdd">
              <v-icon>mdi-plus</v-icon>&nbsp;
              <span>Tambah</span>
            </v-btn>
          </v-flex>
          <v-flex md2 xs2 style="text-align: end">
            <v-btn text :to="data.toEdit">
              <v-icon>mdi-pencil</v-icon>&nbsp;
              <span>Edit</span>
            </v-btn>
          </v-flex>
        </v-layout>-->
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "WisataCatalogue",
  created() {
    this.$http
      .get("http://localhost:3000/api/venue")
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
</style>
