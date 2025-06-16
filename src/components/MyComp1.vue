<template>
  <h1>My Comp 1</h1>
  <v-btn @click="toggleTheme">toggle theme</v-btn>
  <v-card
    :loading="isLoading"
    title="20250615"
    subtitle="紅鸞星動"
    text="馮○敏"
    variant="outlined"
  >
    <v-card-actions>
      <v-btn @click="isLoading = !isLoading">isLoading</v-btn>
    </v-card-actions>
  </v-card>
  <p>桃園市</p>
  <p>最低溫度:{{ minTemperature }}</p>
  <p>最高溫度:{{ maxTemperature }}</p>
  <p>天氣現象:{{ weather }}</p>
  <MyFirebaseFood />
</template>
<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
import { ref } from "vue";
const isLoading = ref(false);
import axios from "axios";
const minTemperature = ref();
const maxTemperature = ref();
const weather = ref();
axios
  .get(
    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-F6682442-6932-46EE-A788-937F1842D16E&LocationName=%E6%A1%83%E5%9C%92%E5%B8%82"
  )
  .then(function (response) {
    // handle success
    const weatherElement =
      response.data.records.Locations[0].Location[0].WeatherElement;
    console.log(weatherElement);
    minTemperature.value =
      weatherElement[2].Time[0].ElementValue[0].MinTemperature;
    maxTemperature.value =
      weatherElement[1].Time[0].ElementValue[0].MaxTemperature;
    weather.value = weatherElement[12].Time[0].ElementValue[0].Weather;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
</script>
