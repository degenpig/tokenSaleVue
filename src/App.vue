<template>
  <div id="app">
    <SocialButtons />
    <Tokensale />
  </div>
</template>

<script>
import Tokensale from './components/Tokensale'
import SocialButtons from "./components/SocialButtons"
export default {
  name: 'App',
  components: {
    Tokensale,
    SocialButtons
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
