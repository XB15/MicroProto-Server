<template>
  <div>
    <v-row>
      <v-col>
        <h3 class="white--text">System settings</h3>
      </v-col>
    </v-row>
    <v-card dark>
      <v-row align="center">
        <v-col cols="auto">
          <h4 class="px-3">Pi Version</h4>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="6" md="4">
          <v-select
            :items="piVersion"
            dark
            label="Pi Version"
            standard
            item-color="gray"
            class="pr-3"
          ></v-select>
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
      piVersion: ["Raspberry Pi 4", "Raspberry Pi 3", "Pi Zero 2 W"],
    };
  },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>
