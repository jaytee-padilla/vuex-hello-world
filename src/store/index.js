// This file acts as an entry point into VueX
// This is where I combine all the different modules
import VueX from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Load VueX
Vue.use(VueX);

// Create store
export default new VueX.Store({
  modules: {
    todos
  }
});