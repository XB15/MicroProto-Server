<template>
  <div>
    <h1 class="white--text mx-4 mt-4">Ears</h1>
    <v-container>
      <v-row>
        <v-col class="flex-grow-1">
          <v-select
            dark
            :items="items"
            label="Lighting mode"
            solo
            item-color="gray"
            v-model="colorEnable"
          >
          </v-select>
        </v-col>
        <v-col class="pt-4" cols="auto">
          <v-btn
            large
            dark
            @click="earSync = !earSync"
            :disabled="colorEnable === 'rainbow'"
          >
            <v-icon class="mr-2">{{
              !earSync ? "mdi-link" : "mdi-link-lock"
            }}</v-icon>
            <span>Sync</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" v-if="colorEnable !== 'rainbow' && colorEnable !=='fade'">
        <v-col cols="12" md="4" align="center">
          <h2 class="white--text">
            {{ !earSync ? "Left" : "Ears" }}
            <v-spacer></v-spacer>
          </h2>
          <v-color-picker
            dark
            elevation="15"
            hide-mode-switch
            dot-size="35"
            class="grey darken-2"
            v-model="leftPicker"
          >
          </v-color-picker>
        </v-col>

        <v-col cols="12" md="4" align="center" v-if="!earSync">
          <h2 class="white--text">Right</h2>
          <v-color-picker
            dark
            elevation="15"
            hide-mode-switch
            dot-size="35"
            :disabled="earSync === true || colorEnable !== 'static'"
            class="grey darken-2"
            v-model="rightPicker"
          >
          </v-color-picker>
        </v-col>
      </v-row>
      <v-row v-if="colorEnable !== 'static'">
        <v-col
          class="flex-grow-1"
          md="4"
          :class="{ 'pt-8': colorEnable !== 'rainbow' && colorEnable !== 'fade'}"
        >
          <v-slider
            dark
            v-model="speedSlider.val"
            :color="speedSlider.color"
            :label="speedSlider.label"
            thumb-label="hover"
          >
          </v-slider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Ears",
  data() {
    return {
      earSync: true,
      colorEnable: "rainbow",
      items: ["rainbow", "fade", "breathing", "heartbeat", "static"],
      leftPicker: { r: 189, g: 89, b: 246, a: 1 },
      rightPicker: { r: 189, g: 98, b: 246, a: 1 },
      speedSlider: { label: "speed", val: 10, color: "#bc59f6" },
    };
  },
};
</script>
