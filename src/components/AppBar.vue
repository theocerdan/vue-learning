<template>
  <v-app-bar :elevation="0">
  <v-app-bar-title class="font-weight-black">Todolist</v-app-bar-title>
  <template v-slot:append>
    <v-btn icon="mdi-delete-outline" @click="taskStore.removeDone"></v-btn>
    <v-btn icon="mdi-plus" @click="handleAddTask"></v-btn>
  </template>
</v-app-bar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../store/useTaskStore';


const taskStore = useTaskStore();

const handleAddTask = () => {
  taskStore.addTask({ name: "", done: false}); 
}

</script>

<style scoped>
</style>
