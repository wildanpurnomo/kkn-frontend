<template>
  <v-container>
    <v-form ref="addWisataForm" v-model="valid">
      <v-text-field
        v-model="locationData.name"
        label="Nama Lokasi Wisata"
        required
        :rules="textFieldRules"
      ></v-text-field>
      <br />
      <v-textarea
        rows="1"
        auto-grow
        v-model="locationData.description"
        label="Deksripsi Lokasi Wisata"
        required
        :rules="textFieldRules"
      ></v-textarea>
      <br />
      <div class="text-subtitle">Pilih Titik Lokasi</div>
      <br />

      <gmap-map
        :center="center"
        :zoom="12"
        :options="{mapTypeControl: false}"
        @rightclick="onMapRightClick"
        style="width: 100%; height: 500px; margin-bottom: 16px"
      >
        <div slot="visible">
          <div style="top: 0; right: 0; width: 100%; position: absolute; z-index: 100">
            <gmap-autocomplete
              ref="autocomplete"
              @place_changed="onPlaceChanged"
              style="padding: 10px; width: 50%; margin-top: 10px; margin-left: 10px; background-color: #F6F6F6; "
              placeholder="Cari Lokasi"
            >
              <template v-slot:input="slotProps">
                <v-text-field
                  outlined
                  ref="input"
                  @listeners="slotProps.listeners"
                  @attrs="slotProps.attrs"
                ></v-text-field>
              </template>
            </gmap-autocomplete>
          </div>
        </div>
        <gmap-marker :position="markerInitPosition" :draggable="true" @dragend="onMarkerDragEnd"></gmap-marker>
      </gmap-map>
      <br />
      <v-img ref="img" :src="imagePreviewURL" style="max-width: 500px; max-height: 500px"></v-img>
      <v-file-input
        label="Gambar lokasi"
        prepend-icon="mdi-camera"
        show-size
        counter
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pilih gambar"
        v-if="!isEdit"
        :rules="fileUploadRules"
        @change="getFile"
      ></v-file-input>
      <v-file-input
        label="Gambar lokasi"
        prepend-icon="mdi-camera"
        show-size
        counter
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pilih gambar"
        v-if="isEdit"
        @change="getFile"
      ></v-file-input>
      <v-btn :disabled="!valid || loading" :loading="loading" type="submit" @click="submit">Submit</v-btn>
    </v-form>

    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="headline">{{getDialogHeadline}}</v-card-title>
        <v-card-text>Anda dapat tetap berada di halaman ini atau kembali ke dashboard.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onLeaveAfterSubmit">Kembali ke dashboard</v-btn>
          <v-btn color="blue darken-1" text @click="onStayAfterSubmit">Tetap di halaman</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "WisataForm",
  created() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  },
  watch: {
    editedData: function(updated) {
      this.locationData.name = updated.name;
      this.locationData.description = updated.description;
      this.locationData.location = updated.location;

      let latLng = {
        lat: updated.location.coordinates[1],
        lng: updated.location.coordinates[0]
      };

      this.markerInitPosition = latLng;
      this.center = latLng;
      this.imagePreviewURL = `http://localhost:3000/api/venue/img/${updated.imageURL}`;
    }
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    editedData: {
      type: Object,
      default: function() {
        return {
          name: "",
          description: "",
          location: {
            type: "Point",
            coordinates: [110.8801834, -7.7999592]
          },
          img: {}
        };
      }
    }
  },
  data() {
    return {
      userData: {},
      dialog: false,
      loading: false,
      valid: false,
      locationData: {
        name: "",
        description: "",
        location: {
          type: "Point",
          coordinates: [110.8801834, -7.7999592]
        },
        img: {}
      },
      imagePreviewURL: "",
      textFieldRules: [v => !!v || "Mohon isikan nama lokasi."],
      fileUploadRules: [v => !!v || "Mohon pilih gambar lokasi."],
      center: {
        lat: -7.7999592,
        lng: 110.8801834
      },
      markerInitPosition: {
        lat: -7.7999592,
        lng: 110.8801834
      },
 
    };
  },
  methods: {
    submit: async function(e) {
      try {
        e.preventDefault();
        this.loading = true;

        let formData = new FormData();
        formData.set("name", this.locationData.name.trim());
        formData.set("description", this.locationData.description.trim());
        formData.set("adminId", this.userData.userId);
        formData.set("location", JSON.stringify(this.locationData.location));

        let response;
        if (!this.isEdit) {
          formData.set("img", this.locationData.img);
          response = await this.$http.post(
            "http://localhost:3000/api/venue",
            formData,
            {
              headers: {
                "Content-Type": `multipart/form-data;`
              }
            }
          );
        } else {
          if (this.locationData.img) {
            formData.set("img", this.locationData.img);
          }
          response = await this.$http.put(
            `http://localhost:3000/api/venue/${this.$route.params.wisataId}`,
            formData,
            {
              headers: {
                "Content-Type": `multipart/form-data;`
              }
            }
          );
        }
        if (response.status === 200) {
          this.dialog = true;
        }
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    onMarkerDragEnd: function(e) {
      this.locationData.location.coordinates = [e.latLng.lng(), e.latLng.lat()];
    },
    getFile: function(e) {
      let fReader = new FileReader();
      fReader.onload = () => {
        this.imagePreviewURL = fReader.result;
      };

      if (e) {
        fReader.readAsDataURL(e);
      } else {
        this.imagePreviewURL = "";
      }

      this.locationData.img = e;
    },
    onPlaceChanged: function(e) {
      this.center = {
        lat: e.geometry.location.lat(),
        lng: e.geometry.location.lng()
      };
      this.markerPosition = {
        lat: e.geometry.location.lat(),
        lng: e.geometry.location.lng()
      };
      this.locationData.location.coordinates = [
        e.geometry.location.lng(),
        e.geometry.location.lat()
      ];
    },
    onMapRightClick: function(e) {
      this.markerPosition = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this.locationData.location.coordinates = [e.latLng.lng(), e.latLng.lat()];
    },
    onStayAfterSubmit: function() {
      if (!this.isEdit) {
        this.$refs.addWisataForm.reset();
      }
      this.dialog = false;
    },
    onLeaveAfterSubmit: function() {
      this.dialog = false;
      this.$router.push({ name: "WisataCatalogue" });
    }
  },
  computed: {
    getDialogHeadline: function() {
      if (this.isEdit) {
        return "Berhasil menyunting data lokasi!";
      } else {
        return "Berhasil menambahkan data lokasi!";
      }
    }
  }
};
</script>
<style scoped>
</style>
