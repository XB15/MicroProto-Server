<template>
  <div>
    <h1 class="white--text mx-4 mt-4">Settings</h1>
    <v-container>
      <v-row>
        <v-col>
          <EarSettings></EarSettings>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ScreenSettings></ScreenSettings>
        </v-col>
      </v-row>
      <v-row class="pb-5">
        <v-col>
          <SystemSettings></SystemSettings>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EarSettings from "@/components/EarSettings.vue";
import ScreenSettings from "../components/ScreenSettings.vue";
import SystemSettings from "@/components/SystemSettings.vue";
export default {
  name: "Settings",
  data() {
    return {
      earSide: false,
      ledCount: "24",
    };
  },
  components: { EarSettings, ScreenSettings, SystemSettings },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>
