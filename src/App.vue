<template>
  <div id="app">
    <h1>App boladão</h1>

    <div>Esta página apenas está aqui para incluir outros componentes, então ignore-a :D</div>

    <A/>
    <B/>
  </div>
</template>

<script>


import A from "@/components/A";
import B from '@/components/B'

export default {
  name: 'App',
  components: {
    A,
    B
  },

  mounted() {
    console.log('mounting app')
  }
}
</script>

