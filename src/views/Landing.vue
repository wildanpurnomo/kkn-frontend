<template >
  <span>
    <Hero />
    <Featuring />
    <v-divider></v-divider>
    <Facility />
    <v-divider></v-divider>
    <Paralayang />
    <v-divider></v-divider>
    <DigitalMap />
    <v-divider></v-divider>
    <Footer />
  </span>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/landing/Hero.vue";
import Featuring from "@/components/landing/Featuring.vue";
import Facility from "@/components/landing/Facility.vue";
import Paralayang from "@/components/landing/Paralayang.vue";
import DigitalMap from "@/components/landing/DigitalMapTeaser.vue";
import Footer from "@/components/landing/Footer.vue";

export default {
  name: "Landing",
  components: {
    Hero,
    Featuring,
    Facility,
    Paralayang,
    DigitalMap,
    Footer
  }
};
</script>
