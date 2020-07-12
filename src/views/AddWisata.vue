<template>
  <v-container>
    <div class="text-h5">Tambah Lokasi Wisata</div>
    <Form />
  </v-container>
</template>

<script>
import Form from '@/components/map/adminDashboard/WisataForm.vue';

export default {
  name: "AddWisata",
  components: {
    Form,
  }
};
</script>
<style scoped>
</style>
