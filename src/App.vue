<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Graph from './components/Graph.vue';
</script>

<template>
  <div class="container">
    <Graph msg="Vite + Vue" />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(167, 167, 167);
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  height: 100vh;
  border: 1px solid #ccc;
}
</style>
