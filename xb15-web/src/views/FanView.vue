<template>
  <div>
    <h1 class="white--text mx-4 mt-4">FanSpeed</h1>
    <v-container>
      <v-row>
        <v-col align="center">
          <v-icon
            dark
            size="200"
            :class="{
              rotate_25: fanSpeed.val === 0,
              rotate_50: fanSpeed.val === 1,
              rotate_75: fanSpeed.val === 2,
              rotate_100: fanSpeed.val === 3,
            }"
          >
            mdi-fan
          </v-icon>
        </v-col>
      </v-row>
      <v-row class="pt-8">
        <v-col>
          <v-slider
            dark
            :max="3"
            step="1"
            ticks="hover"
            tick-size="4"
            v-model="fanSpeed.val"
            :color="fanSpeed.color"
            :label="fanSpeed.label"
            :tick-labels="speedSettings"
          >
          </v-slider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fanSpeed: { label: "speed", val: 0, color: "#bc59f6" },
      speedSettings: ["25", "50", "75", "100"],
    };
  },
};
</script>

<style>
.rotate_25 {
  animation: loading 4s linear infinite;
}

.rotate_50 {
  animation: loading 2s linear infinite;
}

.rotate_75 {
  animation: loading 1s linear infinite;
}

.rotate_100 {
  animation: loading 0.5s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
