<template>
  <div id="app" class="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
    <h1 class="text-2xl font-bold mb-4">To-do App</h1>

    <div class="mb-4 flex">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        class="flex-grow p-2 border rounded-l"
        placeholder="Enter a new todo"
      />
      <button @click="addTodo" class="bg-blue-500 text-white p-2 rounded-r">
        Add Todo
      </button>
    </div>

    <div v-if="incompleteTodos.length" class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Incomplete Todos</h2>
      <ul>
        <li
          v-for="todo in incompleteTodos"
          :key="todo.id"
          class="flex items-center justify-between p-2 bg-white mb-2 rounded"
        >
          <span
            @click="toggleTodo(todo.id)"
            :class="{ 'line-through': todo.completed }"
            class="cursor-pointer flex-grow"
          >
            {{ todo.text }}
          </span>
          <button
            @click="removeTodo(todo.id)"
            class="bg-red-500 text-white p-1 rounded ml-2"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>

    <div v-if="completedTodos.length" class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Completed Todos</h2>
      <ul>
        <li
          v-for="todo in completedTodos"
          :key="todo.id"
          class="flex items-center justify-between p-2 bg-white mb-2 rounded"
        >
          <span
            @click="toggleTodo(todo.id)"
            :class="{ 'line-through': todo.completed }"
            class="cursor-pointer flex-grow text-gray-500"
          >
            {{ todo.text }}
          </span>
          <button
            @click="removeTodo(todo.id)"
            class="bg-red-500 text-white p-1 rounded ml-2"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    ...mapGetters(["incompleteTodos", "completedTodos"]),
  },
  methods: {
    ...mapActions(["addTodo", "toggleTodo", "removeTodo"]),
    addTodo() {
      if (this.newTodo.trim()) {
        this.$store.dispatch("addTodo", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>

<style scoped></style>
