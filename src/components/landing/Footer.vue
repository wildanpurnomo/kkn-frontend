<template>
  <v-footer padless>
    <v-card flat tile class="flex">
      <v-card-text tile class="grey text-center">
        <v-btn v-for="social in socials" :key="social.icon" class="mx-4 black--text" icon :href="social.url">
          <v-icon size="24px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pa-2 black--text text-center grey">
        {{ new Date().getFullYear() }} -
        <strong>Desa Sendang, Kecamatan Wonogiri</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    socials: [
      { icon: "mdi-facebook", url: "https://www.facebook.com/pg/sendang0001/"},
      { icon: "mdi-twitter", url: "https://twitter.com/SendangDesa"},
      { icon: "mdi-instagram", url: "https://twitter.com/SendangDesa"},
      { icon: "mdi-youtube", url: "https://www.youtube.com/watch?v=iWIEFXStYH4"},
    ],
  })
};
</script>
