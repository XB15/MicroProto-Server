<template>
  <div>
    <h1 class="white--text mx-4 mt-4">Screens</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-file-input label="test" filled prepend-icon="mdi-camera" dark>
          </v-file-input>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <h2 class="white--text">gallery</h2>
      </v-row>
      <v-row class="justify-left pt-8">
        <v-col cols="4" md="3" v-for="item in gallery" :key="item.src">
          <v-card hover>
            <v-img :src="'/img/' + item.src" class="pixelated">
              <v-img
                src="@/assets/overlay_gallery_1.png"
                class="pt-1"
                v-if="item.status === 1"
              ></v-img>
              <v-img
                src="@/assets/overlay_gallery_2.png"
                class="pt-1"
                v-if="item.status === 2"
              ></v-img>
              <v-img
                src="@/assets/overlay_gallery_3.png"
                class="pt-1"
                v-if="item.status === 3"
              ></v-img>
              <v-img
                src="@/assets/overlay_gallery_4.png"
                class="pt-1"
                v-if="item.status === 4"
              ></v-img>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Screens",
  data() {
    return {
      gallery: [
        { src: "Logo_color.184208e9.png", status: 1 },
        { src: "Logo_color.184208e9.png", status: 0 },
        { src: "Logo_color.184208e9.png", status: 3 },
        { src: "Logo_color.184208e9.png", status: 0 },
        { src: "Logo_color.184208e9.png", status: 4 },
        { src: "Logo_color.184208e9.png", status: 0 },
        { src: "Logo_color.184208e9.png", status: 2 },
        { src: "Logo_color.184208e9.png", status: 0 },
        { src: "Logo_color.184208e9.png", status: 0 },
      ],
    };
  },
};
</script>

<style>
.pixelated {
  image-rendering: optimizeSpeed; /* STOP SMOOTHING, GIVE ME SPEED  */
  image-rendering: -moz-crisp-edges; /* Firefox                        */
  image-rendering: -o-crisp-edges; /* Opera                          */
  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
  image-rendering: pixelated; /* Chrome */
  image-rendering: optimize-contrast; /* CSS3 Proposed                  */
  -ms-interpolation-mode: nearest-neighbor; /* IE8+                           */
}
</style>
