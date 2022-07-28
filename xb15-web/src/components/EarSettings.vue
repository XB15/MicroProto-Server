<template>
  <div>
    <v-row>
      <v-col>
        <h3 class="white--text">Ear settings</h3>
      </v-col>
    </v-row>
    <v-card dark>
      <v-row align="center">
        <v-col cols="auto">
          <h4 class="px-3">Primary Ear</h4>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <h4 class="pr-2">left</h4>
        </v-col>
        <v-col cols="2" md="1">
          <v-switch v-model="earSide" inset color="#bc59f6"></v-switch>
        </v-col>
        <v-col cols="auto">
          <h4 class="pr-3">right</h4>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center">
        <v-col cols="auto">
          <h4 class="px-3">LEDs Per Ear</h4>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-text-field class="centered-input" maxlength="2" v-model="ledCount">
          </v-text-field>
        </v-col>
        <v-col cols="auto">
          <h4 class="pr-3">LEDs</h4>
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
      earSide: false,
      ledCount: "24",
    };
  },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>
