import { UserService } from "@/api/UserService";

const userServiceInstance = new UserService();

const initialState = () => ({
  user: { id: null, name: null, audioId: null, videoId: null },
  fetchingUser: false
});

const getters = {};

const actions = {
  async fetchUserFromDeviceId(context) {
    console.log("fetching user faction");

    if (context.state.user.id) {
      console.log("user already loaded. exiting...");
      return;
    }

    if (context.state.fetchingUser) {
      console.log("already fetching user. exiting...");
      return;
    }

    await context.commit("setFetchingUser", true);
    await context.dispatch("call/getUserMediaPermissions", null, {
      root: true
    });
    const { audioId, videoId } = context.rootGetters[
      "call/audioAndVideoStreamId"
    ];

    const user = await userServiceInstance.fetchByAudioAndVideoStreamId(
      audioId,
      videoId
    );

    await context.commit("setFetchingUser", false);
    await context.commit("setUser", user);
  }
};

const mutations = {
  setUser(state, user) {
    state.user = { ...user };
  },

  setFetchingUser(state, fetchingUser) {
    state.fetchingUser = fetchingUser;
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
