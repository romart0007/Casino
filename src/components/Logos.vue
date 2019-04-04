<template>
  <b-container fluid class="logo-container pt-2">
    <div class="container pt-4 d-flex justify-content-center flex-wrap">
      <div class="logos mb-2 transition-effect" v-for="(img, i) in imgArr" :key="i">
        <img :src="img.src" height="30" fluid>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        {
          src: require("../assets/gambleaware.png")
        },
        {
          src: require("../assets/thawte.png")
        },
        {
          src: require("../assets/gt.jpg")
        },
        {
          src: require("../assets/gbga.jpg")
        },
        {
          src: require("../assets/ibas.png")
        },
        {
          src: require("../assets/gamblingcommission.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.logo-container {
  background: rgba(0, 0, 0, 0.075);

  .logos {
    margin: 0 10px;
  }
}

@media screen and (max-width: 576px) {
  .logo-container {
    background: rgba(173, 181, 189, 0.85);
  }
}
</style>
