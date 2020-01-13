import Vue from "vue";
import Vuex from "vuex";
import contact from "./contact";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contact
  },
  strict: process.env.DEV
});
