import { SigninDto } from "@/api/ApiTypes";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      accessToken: "",
      expirationDate: "",
      userName: "",
    },
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo: SigninDto) {
      state.userInfo = userInfo as any;
    },
  },
  actions: {
    setUserInfo: ({ commit }, userInfo: SigninDto) => {
      commit("setUserInfo", userInfo);
    },
  },
  modules: {},
});
