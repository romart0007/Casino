<template>
  <b-container fluid>
    <div class="container gallery-container pt-4 pb-4">
      <div class="grid">
        <div class="gallery transition-effect" v-for="(img, index) in imgArr" :key="index">
          <img :src="img.src" fluid class="box-shadow">
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
        },
        {
          src: require("../assets/catwoman.png")
        },
        {
          src: require("../assets/batgirl.png")
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
  cursor: pointer;
  display: flex;
  flex-direction: column;

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
    justify-content: center;
  }
  .gallery {
    width: calc(50% - 2rem);
    &:nth-child(5),
    &:nth-child(6) {
      display: none;
    }
  }
}

@media screen and (min-width: 767px) {
  .gallery {
    width: calc(24% - 2rem);
  }
}

@media screen and (min-width: 991px) {
  .gallery {
    display: inline-block;
    width: calc(15% - 2rem);
    &:nth-child(5),
    &:nth-child(6) {
      display: flex;
    }
  }
}
</style>
