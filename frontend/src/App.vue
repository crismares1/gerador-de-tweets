<template>
  <div id="app">
    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap');

  body {
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }
</style>

