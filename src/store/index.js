import Vue from "vue";
import Vuex from "vuex";
import CallModule from "./modules/call";
import UserModule from "./modules/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    call: CallModule,
    user: UserModule
  }
});
