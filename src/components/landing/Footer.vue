<template>
  <v-footer padless>
    <v-card flat tile class="flex">
      <v-card-text tile class="grey text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>


      <v-card-text class="pa-2 black--text text-center grey">
        {{ new Date().getFullYear() }} -
        <strong>Desa Sendang, Wonogiri</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
