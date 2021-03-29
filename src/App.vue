<template>
  <div id="app">
    <h1>App boladão</h1>

    <div>Menu boladão do app boladão</div>

    <pre>
      <code>
        isAudioAndVideoAllowed: {{ isAudioAndVideoAllowed }}
        isAudioAllowed: {{ isAudioAllowed }}
        isVideoAllowed: {{ isVideoAllowed }}
      </code>
    </pre>

    <Call v-if="isAudioAndVideoAllowed"/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Call from "@/Call";

export default {
  name: 'App',
  components: {
    Call,
  },
  computed: {
    ...mapGetters([
        'isAudioAndVideoAllowed',
        'isAudioAllowed',
        'isVideoAllowed',
    ])
  },
  mounted() {
    console.log('mounting app');
    this.$store.dispatch('getUserMediaPermissions');
  }
}
</script>

