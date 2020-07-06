<template>
  <v-container>
    <v-form ref="editAdminForm" v-model="valid" :lazy-validation="true">
      <v-text-field
        v-model="username"
        label="Ganti Username (kosongkan jika tidak mengubah username)"
        :rules="getUsernameRules"
      ></v-text-field>
      <br />
      <v-text-field
        v-model="oldPassword"
        type="password"
        label="Password Lama (kosongkan jika tidak mengubah password)"
      ></v-text-field>
      <br />
      <v-text-field
        v-model="newPassword"
        type="password"
        label="Password Baru (kosongkan jika tidak mengubah password)"
        :rules="getPasswordRules"
      ></v-text-field>
      <br />
      <v-text-field
        v-model="passwordConfirmation"
        label="Konfirmasi Password Baru"
        type="password"
        :rules="getPasswordConfirmationRules"
      ></v-text-field>
      <br />
      <v-btn
        :disabled="loading || (username.length === 0 && oldPassword.length === 0)"
        :loading="loading"
        type="submit"
        @click="submit"
      >Submit</v-btn>
    </v-form>
    <br />
    <div class="h6 red--text" :hidden="error.length === 0">{{error}}</div>

    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="headline">Berhasil Mengubah Data Admin!</v-card-title>
        <v-card-text>Anda dapat kembali ke dashboard.</v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="onLeaveAfterSubmit">Kembali ke dashboard</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "EditAdminForm",
  data() {
    return {
      valid: false,
      dialog: false,
      loading: false,
      username: "",
      oldPassword: "",
      newPassword: "",
      passwordConfirmation: "",
      error: ""
    };
  },
  computed: {
    getUsernameRules() {
      if (this.username.length > 0)
        return [v => (v || "").length >= 10 || "Minimal 10 karakter"];
      else return [];
    },
    getPasswordRules() {
      if (this.newPassword.length > 0)
        return [
          v => (v || "").length >= 10 || "Minimal 10 karakter",
          v => /(?=.*[0-9])/.test(v) || "Harus terdapat minimal satu angka",
          v =>
            /(?=.*[a-z])/.test(v) || "Harus terdapat minimal satu huruf kecil",
          v =>
            /(?=.*[A-Z])/.test(v) || "Harus terdapat minimal satu huruf besar"
        ];
      else return [];
    },
    getPasswordConfirmationRules() {
      if (this.newPassword.length > 0)
        return [
          v => (!!v && v) === this.newPassword || "Masukkan password yang sama."
        ];
      else return [];
    }
  },
  methods: {
    submit: async function(e) {
      try {
        e.preventDefault();
        this.loading = true;

        if (this.$refs.editAdminForm.validate()) {
          let response = await this.$http.put(
            `${this.$API_BASE_URL.API_BASE_URL}admin/${this.$route.params.adminId}`,
            {
              username: this.username,
              oldPassword: this.oldPassword,
              newPassword: this.newPassword
            }
          );
          if (response.status === 200) {
            this.dialog = true;
            this.$emit("updateAccount", response.data);
          }
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
      this.loading = false;
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
