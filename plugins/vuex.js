import { createStore } from "vuex";
import {exchancePageAPI} from '/api/api'

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  actions: {
    async getExchancedCurrency() {
      // await axious
      // commit('addUsrs', users)
      exchancePageAPI.fetchExchancedCurrency()
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});