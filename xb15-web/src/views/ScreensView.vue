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
        <v-col cols="3">
          <v-card>
            <v-img src="@/uploads/Logo_color.png"> </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Screens",
};
</script>
