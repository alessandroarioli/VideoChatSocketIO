<template>
  <div id="app">
    <StreamingVideo/>
  </div>
</template>

<script>
import StreamingVideo from './components/StreamingVideo'

export default {
  name: 'App',
  components: {
    StreamingVideo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

html {
  background-image: url('./assets/wood-background.jpg');
  background-size: cover;
}
</style>
