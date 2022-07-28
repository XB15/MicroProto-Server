<template>
  <div>
    <v-row>
      <v-col>
        <h3 class="white--text">Screen settings</h3>
      </v-col>
    </v-row>
    <v-card dark>
      <v-row align="center">
        <v-col cols="auto">
          <h4 class="px-3">Display Type</h4>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="6" md="4">
          <v-select
            :items="screenType"
            dark
            label="Lighting mode"
            standard
            item-color="gray"
            class="pr-3"
          ></v-select>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center">
        <v-col cols="auto">
          <h4 class="px-3">Inverted Colors</h4>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-switch v-model="colorInvert" inset color="#bc59f6"></v-switch>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center">
        <v-col cols="auto">
          <h4 class="px-3">Flip Screens</h4>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-switch v-model="screenFlip" inset color="#bc59f6"></v-switch>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      colorInvert: false,
      screenFlip: false,
      screenType: ["RGB", "RBG", "GRB", "GBR", "BGR", "BRG"],
    };
  },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>
