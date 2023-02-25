<template>
    <td class="full-width">
        <v-text-field v-model="item.name" color="primary" variant="underlined"></v-text-field>
    </td>
    <td >
        <v-btn icon="mdi-delete-outline" variant="text" @click="deleteTask"></v-btn>
    </td>
    <td >
        <v-checkbox hide-details v-model="item.done"></v-checkbox>
    </td>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { Task, useTaskStore } from '../store/useTaskStore';

const taskStore = useTaskStore();

const props = defineProps({
  item: { type: Object as PropType<Task>, required: true },
})

const deleteTask = () => {
    taskStore.removeTask(props.item);
}

</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>