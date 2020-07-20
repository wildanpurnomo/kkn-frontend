<template>
  <v-container>
    <v-form ref="addAdminForm" v-model="valid">
      <v-text-field v-model="username" label="Username" required :rules="usernameRules"></v-text-field>
      <br />
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        required
        :rules="passwordRules"
      ></v-text-field>
      <br />
      <v-text-field
        v-model="passwordConfirmation"
        label="Konfirmasi Password"
        type="password"
        required
        :rules="passwordConfirmationRules"
      ></v-text-field>
      <br />
      <v-btn :disabled="!valid || loading" :loading="loading" type="submit" @click="submit">Submit</v-btn>
    </v-form>

    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="headline">Berhasil Menambahkan Admin!</v-card-title>
        <v-card-text>Anda dapat tetap berada di halaman ini atau kembali ke dashboard.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onLeaveAfterSubmit">Kembali ke dashboard</v-btn>
          <v-btn color="blue darken-1" text @click="onStayAfterSubmit">Tetap di halaman</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "AddAdminForm",
  data() {
    return {
      dialog: false,
      loading: false,
      valid: false,
      username: "",
      password: "",
      passwordConfirmation: "",
      usernameRules: [
        v => !!v || "Mohon isikan username.",
        v => (v || "").length >= 10 || "Minimal 10 karakter"
      ],
      passwordRules: [
        v => !!v || "Mohon isikan password.",
        v => (v || "").length >= 10 || "Minimal 10 karakter",
        v => /(?=.*[0-9])/.test(v) || "Harus terdapat minimal satu angka",
        v => /(?=.*[a-z])/.test(v) || "Harus terdapat minimal satu huruf kecil",
        v => /(?=.*[A-Z])/.test(v) || "Harus terdapat minimal satu huruf besar"
      ],
      passwordConfirmationRules: [
        v => (!!v && v) === this.password || "Masukkan passoword yang sama."
      ]
    };
  },
  methods: {
    submit: async function(e) {
      try {
        e.preventDefault();
        this.loading = true;

        let response = await this.$http.post(`${process.env.API_BASE_URL}admin`, {
          username: this.username,
          password: this.password
        });
        if (response.status === 200) {
          this.dialog = true;
        }
      } catch (error) {
        console.log(error.response);
      }
      this.loading = false;
    },
    onStayAfterSubmit: function() {
      this.$refs.addAdminForm.reset();
      this.dialog = false;
    },
    onLeaveAfterSubmit: function() {
      this.dialog = false;
      this.$router.push({ name: "AdminList" });
    }
  }
};
</script>
<style scoped>
</style>
