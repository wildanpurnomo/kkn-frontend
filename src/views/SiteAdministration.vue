<template>
  <v-container>
    <div class="text-h5">Administrasi Laman</div>
    <v-container>
      <v-card flat v-for="(collection,index) in database" :key="index">
        <v-layout row wrap>
          <v-flex md12 xs12 class="blue darken-1" pa-3>
            <div class="white--text text-h5">{{collection.collectionName}}</div>
          </v-flex>
        </v-layout>
        <v-layout row wrap pa-3 v-for="(data, index) in collection.collectionList" :key="index">
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
        </v-layout>
        <br />
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "SiteAdministration",
  data() {
    return {
      adminList: [],
      database: [
        {
          collectionName: "Akses",
          collectionList: [
            {
              name: "Admin",
              toList: "/access/admin",
              toAdd: "/access/admin/add",
              toEdit: "/access/admin/edit"
            }
          ]
        },
        {
          collectionName: "Katalog",
          collectionList: [
            {
              name: "Lokasi Wisata",
              toList: { name: "WisataCatalogue" },
              toAdd: { name: "AddWisata" },
              toEdit: "/catalog/wisata/edit"
            },
            {
              name: "Lokasi Kuliner",
              toList: "/catalog/culinary",
              toAdd: "/catalog/culinary/add",
              toEdit: "/catalog/culinary/edit"
            }
          ]
        }
      ]
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/api/admin")
      .then(response => {
        this.adminList = response.data;
      })
      .catch(err => {
        console.log(err.response);
      });
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
