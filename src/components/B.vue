<template>
  <div id="B">
    <h2>Component B</h2>

    <p>O componente B vai buscar informações do usuário</p>

    <p v-if="fetchingUser">Carregando usuário...</p>
    <p v-else>Usuário {{ user.name }} | audioId {{ user.audioId }}</p>
  </div>
</template>

<script>


import {mapActions, mapState} from "vuex";

export default {
  name: 'A',
  computed: {
    ...mapState('user', ['user', 'fetchingUser']),
  },
  methods: {
    ...mapActions('user', ['fetchUserFromDeviceId']),
  },
  async mounted() {
    console.log('mounting b')
    await this.fetchUserFromDeviceId();
  }
}
</script>

