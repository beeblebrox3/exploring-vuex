const initialState = () => ({
  audioMediaStreamId: null,
  videoMediaStreamId: null,
  fetchinUserPermission: true,
  connected: false
});

const getters = {
  isAudioAndVideoAllowed: state =>
    !!state.audioMediaStreamId && !!state.videoMediaStreamId,
  isAudioAllowed: state => !!state.audioMediaStreamId,
  isVideoAllowed: state => !!state.videoMediaStreamId,
  audioAndVideoStreamId: state => ({
    audioId: state.audioMediaStreamId,
    videoId: state.videoMediaStreamId
  })
};

const actions = {
  async getUserMediaPermissions(context) {
    console.log("getting permissions");

    if (context.state.fetchinUserPermission) {
      console.log("already fetching permissions. exiting...");
    }

    await context.commit("setFetchingUserPermission", true);
    const [audioStream, videoStream] = await Promise.all([
      navigator.mediaDevices.getUserMedia({ audio: true }),
      navigator.mediaDevices.getUserMedia({ video: true })
    ]);
    await context.commit("setAudioStreamId", audioStream.id);
    await context.commit("setVideoStreamId", videoStream.id);
    await context.commit("setFetchingUserPermission", false);
  },
  async connect(context) {
    console.log("connect");
    await context.dispatch("getUserMediaPermissions");
    console.log(
      `connecting with audio ${context.state.audioMediaStreamId} and video ${context.state.videoMediaStreamId}`
    );
    await context.commit("setConnected", true);
  }
};

const mutations = {
  setAudioStreamId(state, id) {
    state.audioMediaStreamId = id;
  },
  setVideoStreamId(state, id) {
    state.videoMediaStreamId = id;
  },
  setConnected(state, connected) {
    state.connected = connected;
  },
  setFetchingUserPermission(state, value) {
    state.fetchinUserPermission = value;
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
