import { defineStore } from "pinia";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { toRefs } from "vue";

export type Task = {
  name: string;
  done: boolean;
};
export const useTaskStore = defineStore("tasks", () => {
  const tasks = useStorage<Task[]>("tasks", []);

  const addTask = (t: Task) => {
    tasks.value.push(t);
  };

  const addEmptyTask = () => {
    tasks.value.push({ name: "", done: false });
  };

  const removeTask = (t: Task) => {
    tasks.value = tasks.value.filter((e: Task) => e != t);
  };

  const removeDone = () => {
    tasks.value = tasks.value.filter((e: Task) => !e.done);
  };

  return { tasks, addTask, addEmptyTask, removeTask, removeDone };
});
