<template>
    <v-table v-if="taskStore.tasks.length > 0">
      <thead>
        <tr>
          <th class="text-left">
            Task
          </th>
          <th class="text-right">
            Delete
          </th>
          <th class="text-right">
            Check
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in taskStore.tasks">
          <task-row :item="item"></task-row>
        </tr>
      </tbody>
    </v-table>
    <v-layout full-height class="flex-column justify-center align-center pa-3" v-else>
      <div>
        <v-btn prepend-icon="mdi-plus" variant="flat" @click="taskStore.addEmptyTask">Add a new task.</v-btn>
      </div>
    </v-layout>
    
  </template>
<script setup lang="ts">
import { useTaskStore } from '../store/useTaskStore';
import TaskRow from './TaskRow.vue';

const taskStore = useTaskStore();

</script>

<style scoped>
.v-input__control {
    justify-content: flex-end;
}
</style>