<script setup lang="ts">
import AppBar from "./components/AppBar.vue";
import Task from "./components/Tasks.vue";

</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <Task />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
