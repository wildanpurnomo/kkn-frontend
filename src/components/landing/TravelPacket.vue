<template>
  <v-container fluid style="background-color:#e6e6e6">
    <v-row>
      <v-col cols="12">
        <div class="text-h4 font-weight-light text-center">Paket Wisata</div>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col md="4" sm="6" v-for="(packet, index) in packets" :key="index">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="packet.imageSrc" height="200px"></v-img>

            <v-card-title v-html="packet.packetTitle"></v-card-title>

            <v-card-subtitle>{{ packet.packetSubtitle }}</v-card-subtitle>

            <v-card-actions>
              <v-btn v-show="packet.isWisata" color="primary">Wisata</v-btn>
              <v-btn v-show="packet.isEdukasi" color="warning">Edukasi</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="packet.showInfo = !packet.showInfo">
                <v-icon>{{ packet.showInfo ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="packet.showInfo">
                <v-divider></v-divider>
                <v-card-text class="text-justify" v-html="packet.description"></v-card-text>
                <v-card-text>Fasilitas</v-card-text>
                <v-card-text>
                  <ul>
                    <li v-for="(item, facIndex) in packet.facilities" :key="facIndex">{{ item }}</li>
                  </ul>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      packets: [
        {
          imageSrc: require(`@/assets/landing/menara_pandang.png`),
          packetTitle: "Paket Wisata 1",
          packetSubtitle: "Rp 10.000,00",
          description:
            "Hanya dengan Rp 10.000,00, nikmati kesejukan dan keindahan alam dari <b>Puncak Joglo</b>, <b>Watu Cenik</b> dan <b>Menara Pandang</b>. Be on top!",
          facilities: ["Tiket Masuk", "Parkir"],
          showInfo: false,
          isWisata: true,
          isEdukasi: false,
        },
        {
          imageSrc: require(`@/assets/landing/gunung_bale.png`),
          packetTitle: "Paket Wisata 2",
          packetSubtitle: "Rp 15.000,00",
          description:
            "Mulai dari Rp 15.000,00, anda dapat menikmati indahnya Wonogiri dari ketinggian di <b>Puncak Joglo</b>, <b>Watu Cenik</b> dan <b>Menara Pandang</b>. Dilanjutkan dengan merasakan eksotisnya <b>Goa Watu Lumbung</b> dan <b>Goa Gunung Bale</b>.",
          facilities: ["Tiket Masuk", "Parkir"],
          showInfo: false,
          isWisata: true,
          isEdukasi: false,
        },
        {
          imageSrc: require(`@/assets/landing/rumah_piring.jpg`),
          packetTitle: "Paket Wisata 3",
          packetSubtitle: "Rp 20.000,00",
          description:
            "Mulai dari Rp 20.000,00, anda dapat menikmati indahnya Wonogiri dari ketinggian di <b>Puncak Joglo</b>, <b>Watu Cenik</b> dan <b>Menara Pandang</b>. Dilanjutkan dengan merasakan eksotisnya <b>Goa Watu Lumbung</b>, <b>Goa Gunung Bale</b> dan <b>Song</b>. Lalu, tutup perjalanan anda dengan mengunjungi <b>Rumah Piring</b> agar liburan lebih berkesan!",
          facilities: ["Tiket Masuk", "Parkir"],
          showInfo: false,
          isWisata: true,
          isEdukasi: false,
        },
        {
          imageSrc: require(`@/assets/landing/watu_lumbung.png`),
          packetTitle: "Paket Wisata 4",
          packetSubtitle: "Rp 50.000,00",
          description: "Wisata sambil belajar? Bisa banget! Dengan Rp 50.000,00 , nikmati wisata <b>Puncak Joglo</b>, <b>Watu Cenik</b>, <b>Menara Pandang</b>, <b>Goa Watu Lumbung</b>, dan <b>Goa Gunung Bale</b>. Tutup perjalanan Anda dengan belajar <b>melukis</b> atau <b>membuat sepatu</b>. Hari akan panjang! Anda akan disediakan makanan dan pemandu wisata. Let's gooo!",
          facilities: ["Tiket Masuk", "Parkir", "Makan", "Pemandu", "Praktek melukis / membuat sepatu"],
          showInfo: false,
          isWisata: true,
          isEdukasi: true,
        },
        {
          imageSrc: require(`@/assets/landing/song.png`),
          packetTitle: "Paket Wisata 5",
          packetSubtitle: "Rp 55.000,00",
          description: "Wisata sambil belajar? Bisa banget! Dengan Rp 50.000,00 , nikmati wisata <b>Puncak Joglo</b>, <b>Watu Cenik</b>, <b>Menara Pandang</b>, <b>Goa Watu Lumbung</b>, <b>Goa Gunung Bale</b>, <b>Song</b> dan <b>Rumah Piring</b>. Tutup perjalanan Anda dengan belajar <b>melukis</b> atau <b>membuat sepatu</b>. Hari akan panjang! Anda akan disediakan makanan dan pemandu wisata. Let's gooo!",
          facilities: ["Tiket Masuk", "Parkir", "Makan", "Pemandu", "Praktek melukis / membuat sepatu"],
          showInfo: false,
          isWisata: true,
          isEdukasi: true,
        },
        {
          imageSrc: require(`@/assets/landing/heropng.png`),
          packetTitle: "Paket Wisata 6",
          packetSubtitle: "Rp 650.000,00",
          description:
            "Pernah bermimpi untuk terbang? Wujudkan di Desa Sendang sekarang! Nikmati wisata <b>Puncak Joglo</b>, <b>Watu Cenik</b>, <b>Menara Pandang</b> dan <b>Waduk Gajah Mungkur</b>. Satu lagi yang spesial, <b>terbang dengan paralayang</b>. Dengan paket ini, Anda akan ditemani pemandu, mendapatkan makanan serta hotel menginap. Let's fly!",
          facilities: ["Tiket Masuk", "Parkir", "Makan", "Pemandu", "Hotel"],
          showInfo: false,
          isWisata: true,
          isEdukasi: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}

ul li:before {
  content: "\2713\0020";
}

ul li {
  margin-bottom: 16px;
}
</style>