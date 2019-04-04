<template>
  <div id="app">
    <nav-bar></nav-bar>
    <section-layout>
      <template slot="center"></template>
    </section-layout>
    <home></home>
    <gallery></gallery>
  </div>
</template>

<script>
import Home from "./components/Home";
import NavBar from "./components/navigation/Navbar";
import SectionLayout from "./components/core/SectionLayout";
import Gallery from "./components/Gallery";
export default {
  name: "app",
  components: { Home, SectionLayout, NavBar, Gallery }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
