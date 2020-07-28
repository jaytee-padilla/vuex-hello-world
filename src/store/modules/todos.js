// This module is where I'll place state, modules, actions, etc.
import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "Task One"
    },
    {
      id: 2,
      title: "Task Two"
    },
    {
      id: 3,
      title: "Task Three"
    },
  ]
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
}
