<template>
  <b-container fluid>
    <div class="container gallery-container pt-4">
      <div class="grid">
        <div class="gallery" v-for="(img, i) in imgArr" :key="i">
          <img :src="img.src" fluid>
        </div>
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
          src: require("../assets/superman.jpg")
        },
        {
          src: require("../assets/prince.jpg")
        },
        {
          src: require("../assets/greenlantern.jpg")
        },
        {
          src: require("../assets/batman.jpg")
        }
      ]
    };
  }
};
</script>


<style lang="scss">
.gallery-container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}

div.gallery {
  margin: 1rem;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  -webkit-transition: width 0.8s;
  transition: width ease-in-out 0.8s;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

div.gallery:hover {
  border: 1px solid #777;
}

@media screen and (min-width: 320px) {
  .grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .gallery {
    width: calc(50% - 2rem);
  }
}

@media screen and (min-width: 767px) {
  .gallery {
    width: calc(33% - 2rem);
  }
}

@media screen and (min-width: 991px) {
  .gallery {
    width: calc(24% - 2rem);
  }
}
</style>
