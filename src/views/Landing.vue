<template >
  <span>
    <Hero />
    <Featuring />
    <NewNormal />
    <Paralayang />
    <Gantolle />
    <DigitalMap />
    <Footer />
  </span>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/landing/Hero.vue";
import Featuring from "@/components/landing/Featuring.vue";
import NewNormal from "@/components/landing/NewNormalTeaser.vue";
import Paralayang from "@/components/landing/Paralayang.vue";
import Gantolle from "@/components/landing/Gantolle.vue";
import DigitalMap from "@/components/landing/DigitalMapTeaser.vue";
import Footer from "@/components/landing/Footer.vue";

export default {
  name: "Landing",
  components: {
    Hero,
    Featuring,
    NewNormal,
    Paralayang,
    Gantolle,
    DigitalMap,
    Footer,
  }
};
</script>
