<template>
  <div id="app">
    <nav-bar></nav-bar>
    <section-layout>
      <template slot="center"></template>
    </section-layout>
    <home></home>
    <gallery></gallery>
    <logos></logos>
    <footer-text></footer-text>
  </div>
</template>

<script>
import Home from "./components/Home";
import NavBar from "./components/navigation/Navbar";
import SectionLayout from "./components/core/SectionLayout";
import Gallery from "./components/Gallery";
import FooterText from "./components/FooterText";
import Logos from "./components/Logos";

export default {
  name: "app",
  components: { Home, SectionLayout, NavBar, Gallery, Logos, FooterText }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .truncate {
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .transition-effect {
    -webkit-transition: width 0.8s;
    transition: width ease-in-out 0.8s;
  }

  .box-shadow {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  .not-allowed {
    cursor: not-allowed;
  }
}

@media screen and (max-width: 576px) {
  #app {
    background-image: url(/src/assets/casino-hero.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
}
</style>
