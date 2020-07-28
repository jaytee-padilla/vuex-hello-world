<template>
  <div>
    <h3>Todo List</h3>
    <div class="todo" v-for="todo in allTodos" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  computed: mapGetters(["allTodos"]),
};
</script>

<style></style>
