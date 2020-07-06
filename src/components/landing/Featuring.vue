<template>
  <v-container fluid style="background-color:#e6e6e6">
    <v-container>
      <v-layout
        row
        wrap
        style="height: 100%"
        v-observe-visibility="{ callback: (isVisible, entry) => isViewableNow(isVisible), once: true}"
        :class="{ 'visible animate__animated animate__backInUp': showAnim, 'invisible': !showAnim }"
      >
        <v-flex md4 xs6 v-for="(venue, index) in venues" :key="index">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-container>
                <v-card>
                  <v-img :src="venue.imageUrl" aspect-ratio="1"></v-img>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute>
                      <div class="text-md-h5 text-center">{{venue.name}}</div>
                      <div class="text-center">
                        <v-btn text @click="showOverlay(index)">
                          <v-icon class="d-none d-sm-flex">mdi-magnify</v-icon>
                        </v-btn>
                      </div>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </v-container>
            </template>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <v-overlay :value="overlayScreen">
      <v-img
        :src="venues[shownImageIndex].imageUrl"
        v-click-outside="offOverlay"
        aspect-ratio="1"
        height="650"
        width="650"
      ></v-img>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      shownImageIndex: 0,
      showAnim: false,
      overlayScreen: false,
      venues: [
        {
          name: "Watu Cenik",
          imageUrl: require(`@/assets/landing/watucenik1.jpeg`)
        },
        {
          name: "Puncak Joglo",
          imageUrl: require(`@/assets/landing/sky3.jpeg`)
        },
        {
          name: "Menara Pandang Sokogunung",
          imageUrl: require(`@/assets/landing/menara.jpeg`)
        },
        {
          name: "Wisata Paralayang",
          imageUrl: require(`@/assets/landing/paralayang.jpg`)
        },
        {
          name: "Downhill",
          imageUrl: require(`@/assets/landing/bike2.jpeg`)
        },
        {
          name: "Wisata Balon Udara",
          imageUrl: require(`@/assets/landing/balon.jpg`)
        }
      ]
    };
  },
  methods: {
    showOverlay(index) {
      this.shownImageIndex = index;
      this.overlayScreen = true;
    },
    offOverlay() {
      this.overlayScreen = false;
    },
    isViewableNow(isVisible) {
      this.showAnim = isVisible;
    }
  }
};
</script>
<style>
</style>
