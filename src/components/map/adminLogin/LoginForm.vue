<template>
  <v-container fill-height style="height: 100vh; width: 100%">
    <v-layout justify-center align-center>
      <v-card style="padding: 50px" width="500">
        <h1>Login Admin</h1>
        <v-form v-model="valid">
          <v-text-field v-model="username" label="Username" required :rules="usernameRules"></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            :rules="passwordRules"
          ></v-text-field>
          <v-btn :disabled="!valid || loading" :loading="loading" @click="submit">Login</v-btn>
        </v-form>
        <br />
        <div class="h6 red--text" :hidden="error.length === 0">{{error}}</div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
const axios = require("axios");

export default {
  name: "AdminLoginForm",
  data() {
    return {
      valid: false,
      loading: false,
      error: "",
      username: "",
      password: "",
      usernameRules: [v => !!v || "Mohon masukkan username"],
      passwordRules: [v => !!v || "Mohon masukkan password"]
    };
  },
  methods: {
    submit: async function() {
      try {
        this.loading = true;
        let response = await axios.post(
          "http://localhost:3000/api/admin/login",
          {
            username: this.username,
            password: this.password
          }
        );

        if (response.status === 200) {
          if (response.data.token != null) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userData", JSON.stringify(response.data));

            this.$router.push({ name: "MapDashboard" });
            this.error = "";
          } else {
            console.log("No token returned");
          }
        }
      } catch (error) {
        console.log(error.response);
        this.error = error.response.data.error;
      }
      this.loading = false;
    }
  }
};
</script>
<style scoped></style>;
