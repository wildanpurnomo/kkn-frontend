<template>
  <v-container fluid style="background-color: #0b1424;">
    <v-container>
      <v-row
        v-observe-visibility="{ callback: (isVisible, entry) => isViewableNow(isVisible), once: true}"
        class="white--text"
        :class="{ 'visible animate__animated animate__backInUp': showAnim, 'invisible': !showAnim }"
      >
        <v-col cols="12">
          <div class="text-h3 font-weight-black text-center" style="color: #f8e69e">Fasilitas</div>
        </v-col>
        <v-col cols="12">
          <div class="text-h4 font-weight-light text-start" style="color: #f8e69e">Jalan</div>
          <br />
          <p
            class="text-body-1 font-weight-light white--text"
          >Fasilitas Jalan pendukung wisata yang tersedia di Desa Sendang saat ini adalah jalan provinsi yang menghubungkan Solo, Wonogiri dengan Yogyakarta sehingga cukup luas dan banyak dilalui oleh transportasi umum. Sepanjang ruas jalan, banyak fasilitas pendukung wisata berupa SPBU mini.</p>
        </v-col>
        <v-col cols="12">
          <div class="text-h4 font-weight-light text-end" style="color: #f8e69e">Kuliner</div>
          <br />
          <p
            class="text-body-1 font-weight-light white--text text-end"
          >Desa Sendang terkenal sebagai penghasil ikan segar karena terdapat karamba atau tempat budidaya ikan di waduk Gajah Mungkur. Ada lebih dari 1000 petak karamba di waduk tersebut. Ikan yang dibudidayakan jenis ikan nila dan patin. Selain warung yang menjual ikan segar, terdapat puluhan rumah makan yang menjual olahan ikan khas desa Sendang seperti : Nila bakar, ikan goreng, sup ikan, botok ikan, nugget ikan, dll. Selain dapat dinikmati langsung di tempat, olahan ikan tersebut menjadi oleh-oleh bagi wisatawan.</p>
        </v-col>
        <v-col cols="12">
          <div
            class="text-h4 font-weight-light text-start"
            style="color: #f8e69e"
          >Hotel, Penginapan dan Tempat Ibadah</div>
          <br />
          <p
            class="text-body-1 font-weight-light white--text text-start"
          >Ada 11 hotel atau tempat penginapan yang dapat digunakan wisatawan untuk bermalam. Terdapat juga tempat peribadatan yang tersebar di beberapa lokasi sehingga wisatawan dapat dengan mudah melakukan ibadah.</p>
        </v-col>
        <v-col cols="12">
          <div class="text-h4 font-weight-light text-end" style="color: #f8e69e">Akses</div>
          <br />
          <p
            class="text-body-1 font-weight-light white--text text-end"
          >Jarak Desa Sendang dengan pusat kota Wonogiri tidak jauh, hanya sekitar 7 Km atau sekitar 7 menit. Akses dari dan menuju Desa Sendang sangat baik dan juga tersedia transportasi umum seperti bus maupun angkot. Terdapat beberapa halte bagi wisatawan untuk menunggu transportasi umum. Akses menuju destinasi wisata di Desa Sendang cukup baik karena terdapat jalan dengan ruas yang cukup lebar (dapat dilalui mobil) dan permukaan jalan juga cukup halus. Pada ruas jalan cukup banyak rambu-rambu peringatan untuk keselamatan wisatawan.</p>
        </v-col>
        <v-col cols="12">
          <div
            class="text-h4 font-weight-light text-start"
            style="color: #f8e69e"
          >Kesiapan Era Normal Baru</div>
          <br />
          <p
            class="text-body-1 font-weight-light white--text text-start"
          >Desa Sendang telah mempersiapkan berbagai upaya dalam menyambut kehidupan normal baru di masa pandemi. Desa Sendang telah memastikan agar pengunjung tetap aman dalam menikmati wisata Sendang. Beberapa upaya yang telah dikerahkan antara lain pelatihan PHBS bagi instruktur dan pemandu wisata, pengadaan tempat cuci tangan lengkap dengan sabun dan persediaan masker beserta faceshield bagi pengunjung.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Facility",
  data() {
    return {
      showAnim: false
    };
  },
  methods: {
    isViewableNow(isVisible) {
      this.showAnim = isVisible;
    }
  }
};
</script>

<style scoped>
</style>
