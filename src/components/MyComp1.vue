<template>
  <h1>My Comp 1</h1>
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
  <MyFirebaseFood />
</template>
<script setup>
import { ref } from "vue";
const isLoading = ref(false);
</script>
