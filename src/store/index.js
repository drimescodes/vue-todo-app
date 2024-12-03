import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push({
        id: Date.now(),
        text: todo,
        completed: false,
      });
    },
    TOGGLE_TODO(state, todoId) {
      const todo = state.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
  actions: {
    addTodo({ commit }, todoText) {
      if (todoText.trim()) {
        commit("ADD_TODO", todoText);
      }
    },
    toggleTodo({ commit }, todoId) {
      commit("TOGGLE_TODO", todoId);
    },
    removeTodo({ commit }, todoId) {
      commit("REMOVE_TODO", todoId);
    },
  },
  getters: {
    incompleteTodos: (state) => {
      return state.todos.filter((todo) => !todo.completed);
    },
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
  },
});
