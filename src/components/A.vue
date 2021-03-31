<template>
  <div id="A">
    <h2>Component A</h2>

    <p>O componente A é o que vai conectar na sala mesmo</p>

    <p>Is connected? {{ connected }}</p>
  </div>
</template>

<script>


import {mapActions, mapState} from "vuex";

export default {
  name: 'A',
  computed: {
    ...mapState('call', ['connected']),
  },
  methods: {
    ...mapActions('call', ['connect']),
  },
  async mounted() {
    console.log('mounting a')
    await this.connect();
    console.log('connected')
  }
}
</script>

