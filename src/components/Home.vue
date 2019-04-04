<template>
  <b-container fluid class="bg-holder pb-5 pr-0 pl-0">
    <b-container class="hero h-100 pb-2">
      <b-row class="h-100 mb-3">
        <b-col class="text-white pt-5" cols="12" sm="6">
          <div class="promo-container">
            <p class="bg-info">Exclusive offers from / logo</p>
            <h4>Get Your</h4>
            <h1>100% up to &#163; 400</h1>
            <h2>+200 Free Spins</h2>
          </div>
        </b-col>
        <b-col class="text-white pt-5" cols="12" sm="6">
          <div class="form-container mx-auto">
            <FormStepOne v-on:goToStep="goToStepMain" v-if="currentStep == 1"/>
            <FormStepTwo v-on:goToStep="goToStepMain" v-if="currentStep == 2"/>
            <FormStepThree v-on:goToStep="goToStepMain" v-if="currentStep == 3"/>
            <FormStepFour v-on:goToStep="goToStepMain" v-if="currentStep == 4"/>
          </div>
        </b-col>
      </b-row>
      <b-row class="legal-text">
        <b-col>
          <p>&#43; Terms and conditions apply</p>
        </b-col>
        <b-col>
          <p>This website is licensed to offer online casino.</p>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
import FormStepOne from "./forms/FormStepOne";
import FormStepTwo from "./forms/FormStepTwo";
import FormStepThree from "./forms/FormStepThree";
import FormStepFour from "./forms/FormStepFour";
export default {
  data() {
    return {
      currentStep: 1
    };
  },
  methods: {
    goToStepMain(value) {
      console.log(value);
      this.currentStep = value;
    }
  },
  components: { FormStepOne, FormStepTwo, FormStepThree, FormStepFour }
};
</script>

<style lang="scss">
.bg-holder {
  background-image: url("/src/assets/casino-hero.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding-top: 6em;
}

.bg-info:not(.navbar) {
  background-color: rgba(23, 162, 184, 0.2) !important;
  padding: 10px;
}

.form-container {
  box-shadow: 0 0 20px #000;
  background: #fff;
  padding: 5%;
  border-radius: 5px;
}

.input-group {
  margin-bottom: 10px;
}

// .input-group-text {
//   background-color: #fff;
// }

.form-control {
  &:focus,
  &:active,
  &:hover {
    box-shadow: none;
  }
}

.legal-text p {
  color: rgba(255, 255, 255, 0.7);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

@media only screen and (min-width: 1200px) {
  .promo-container {
    max-width: 80%;
  }
  .form-container {
    max-width: 450px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    max-width: 100%;
  }
}

@media screen and (max-width: 675px) {
  .bg-holder {
    height: 100%;
    padding-top: 4em;

    .container {
      max-width: 80%;
    }

    .col-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }

    .legal-text {
      display: none;
    }
  }
}

@media screen and (max-width: 576px) {
  .bg-holder {
    background: transparent;
    .container {
      max-width: 95%;
    }
  }
}

@media only screen and (min-width: 675px) and (max-width: 991px) {
  .promo-container p {
    display: none;
  }
}
</style>