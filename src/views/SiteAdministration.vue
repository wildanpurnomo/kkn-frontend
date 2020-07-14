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
    <v-layout row wrap pa-3>
      <v-flex md8 xs8>
        <div class="text-h5">Administrasi Laman</div>
      </v-flex>
      <v-flex md4 xs4 style="text-align: end">
        <router-link :to="{name: 'Map'}">
          <v-btn>Kembali ke halaman peta.</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
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
          <v-flex md4 xs4 style="text-align: end">
            <v-btn text :to="data.toAdd">
              <v-icon>mdi-plus</v-icon>&nbsp;
              <span>Tambah</span>
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
              toAdd: "/access/admin/add"
            }
          ]
        },
        {
          collectionName: "Katalog",
          collectionList: [
            {
              name: "Lokasi Wisata",
              toList: { name: "WisataCatalogue" },
              toAdd: { name: "AddWisata" }
            }
          ]
        }
      ],
      breadcrumbsItems: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/map/dashboard"
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
