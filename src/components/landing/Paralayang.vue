<template>
  <v-container fluid style="background-color: #e6e6e6;">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-carousel hide-delimiters show-arrows-on-hover>
            <v-carousel-item
              v-for="(item, index) in carouselImages"
              :key="index"
              :src="item.src"
              transition="fade-transition"
              reverse-transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <div
            class="text-h4 black--text font-weight-light text-center"
          >Wisata Unggulan: Paralayang</div>
        </v-col>
        <v-col cols="12">
          <div
            class="text-body-1 text-md-justify text-sm-center font-weight-light black--text text-center text-xs-left pl-5 pr-5"
          >BUMDes Sendang Pinilih memperkenalkan olahraga dirgantara yang cukup unik dan menantang yaitu Terbang Tandem Paralayang. Take off olahraga tersebut berada di Puncak Joglo, menyuguhkan pemandangan alam yang indah, perpaduan gunung dan waduk gajah mungkur yang menawan dilihat dari udara</div>
        </v-col>
        <v-col cols="12">
          <div
            class="text-body-1 text-md-justify text-sm-center font-weight-light black--text text-center text-xs-left pl-5 pr-5"
          >Terbang tandem merupakan salah satu olahraga paralayang dengan dua orang penerbang, satu orang menjadi pilot dan satu orang lainnya menjadi penumpang. Terbang tandem lepas landas dari landasan Puncak Joglo dengan memanfaatkan tenaga angin untuk dapat terbang sangat tinggi dan mencapai jarak yang jauh.</div>
        </v-col>
        <v-col cols="12">
          <div
            class="text-body-1 text-md-justify text-sm-center font-weight-light black--text text-center text-xs-left pl-5 pr-5"
          >Yang menarik adalah semua yang dilakukan itu tanpa menggunakan mesin, semata-mata memanfaatkan angin. Peralatan terbang tandem sangat ringan, berat seluruh perlengkapan (parasut, harness, parasut cadangan, helmet) sekitar 10 – 15 kg. Peralatan tersebut sangat praktis karena dimasukkan ke dalam ransel yang digendong di punggung. Tarif yang dikenakan untuk terbang tandem adalah Rp.400.000,- sampai Rp.500.000,- dengan pengalaman terbang melihat panorama kota wonogiri dan keindahan waduk gajah mungkur.</div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Paralayang",
  data() {
    return {
      carouselImages: [
        {
          src: require("@/assets/landing/paralayang.jpg")
        },
        {
          src: require("@/assets/landing/paralayang2.jpg")
        },
        {
          src: require("@/assets/landing/heropng.png")
        }
      ]
    };
  },
};
</script>

<style scoped>
.paralayang {
  background: url("../../assets/landing/paralayang.jpg");
  background-size: auto 1010px;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
