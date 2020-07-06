<template>
  <v-container fill-height style="max-height: 100vh" >
    <div class="display-3 mb-5 text-center" style="width: 100%">Wisata Desa Sendang</div>
    <v-layout row wrap>
      <v-flex md4 xs6 v-for="venue in venues" :key="venue.name">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-container>
              <v-card>
                <v-img :src="venue.imageUrl"></v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute>
                    <div class="text-md-h5 text-center">{{venue.name}}</div>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </v-container>
          </template>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
      venues: [
        {
          name: "Watu Cenik",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Puncak Joglo",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Waduk Gajah Mungkur",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Gantolle",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Paralayang",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Mboh",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Karepmu",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Yoi",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          name: "Sembarang",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        }
      ]
    };
  }
};
</script>
<style>
</style>
