import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    audioMediaStreamId: null,
    videoMediaStreamId: null,
  },
  getters: {
    isAudioAndVideoAllowed: state => !! state.audioMediaStreamId && !! state.videoMediaStreamId,
    isAudioAllowed: state => !!state.audioMediaStreamId,
    isVideoAllowed: state => !!state.videoMediaStreamId,
    audioAndVideoStreamId: state => ({
      audioId: state.audioMediaStreamId,
      videoId: state.videoMediaStreamId,
    })
  },
  mutations: {
    setAudioStreamId(state, id) {
      state.audioMediaStreamId = id;
    },
    setVideoStreamId(state, id) {
      state.videoMediaStreamId = id;
    },
  },
  actions: {
    async getAudioPermission(context) {
      const audioMedia = await navigator.mediaDevices.getUserMedia({ audio: true });
      context.commit('setAudioStreamId', audioMedia.id);
    },

    async getVideoPermission(context) {
      const videoMedia = await navigator.mediaDevices.getUserMedia({ video: true });
      context.commit('setVideoStreamId', videoMedia.id);
    },
    async getUserMediaPermissions(context) {
      await context.dispatch('getAudioPermission')
      await context.dispatch('getVideoPermission')
    },
    async connect(context) {
      alert(`connecting with audio ${context.state.audioMediaStreamId} and video ${context.state.videoMediaStreamId}`);
    }
  }
})

new Vue({
  render: h => h(App),
  store: Store,
}).$mount('#app')
