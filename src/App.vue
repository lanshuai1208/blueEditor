<template>
  <div id="app">
    <button @click="triggerShowHello">trigger demo</button>
    <HelloWorld
      v-if="showHello"
      msg="Welcome to Your Vue.js + TypeScript App"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  showHello = true;

  triggerShowHello() {
    this.showHello = !this.showHello;
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
  margin-top: 60px;
}
</style>
