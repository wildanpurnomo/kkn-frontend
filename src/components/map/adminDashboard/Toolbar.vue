<template >
  <nav>
    <v-app-bar color="red darken-1" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link
        :to="{ name: 'SiteAdministration' }"
        class="white--text hidden-sm-and-down"
        style="text-decoration: none;"
      >
        <v-toolbar-title>Sendang Digital Map Admin</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <span
        class="white--text text-h6 hidden-sm-and-down"
        style="margin-right: 10px"
      >Welcome, {{userData.username}}</span>
      <v-btn @click="logout" text style="padding: 0px">
        <span>Logout</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary color="grey lighten-4">
      <v-list-item class="pa-0">
        <v-container height="500">
          <v-layout justify-center align-center column>
            <v-list-item-avatar style="margin: 0" width="100" height="100">
              <v-img :lazy-src="`https://cdn.vuetifyjs.com/images/parallax/material.jpg`"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-center text-h6">Welcome, {{userData.username}}!</v-list-item-title>
            </v-list-item-content>
          </v-layout>
        </v-container>
      </v-list-item>
      <v-divider></v-divider>
      <v-list v-for="(item, index) in items" :key="index" nav>
        <router-link :to="{name: 'SiteAdministration'}" style="text-decoration: none; color: black">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// @ is an alias to /src
export default {
  name: "MapDashboardToolbar",
  data() {
    return {
      drawer: false,
      items: [{ name: "Dashboard", icon: "mdi-view-dashboard" }]
    };
  },
  props: {
    userData: {
      required: true
    }
  },
  methods: {
    logout: async function() {
      try {
        let response = await this.$http.put(
          `https://sendang-digital-map.et.r.appspot.com/api/admin/logout/${this.userData.userId}`
        );

        if (response.status === 200) {
          localStorage.clear();
          this.$router.push({ name: "AdminLogin" });
        }
      } catch (error) {
        console.log(error.response);
      }
    }
  }
};
</script>
