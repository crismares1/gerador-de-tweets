<template>
  <div id="app">
    <Header />
    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style lang="scss">
body {
  line-height: 1.5;
  font-weight: 400;
  min-height: 100vh !important;
  margin: auto !important;
  overflow-x: hidden;
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}
</style>

