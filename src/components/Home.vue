<template>
  <b-container fluid class="hero p-0">
    <b-container class="h-100 pt-5">
      <b-row class="h-100">
        <b-col class="text-white" cols="12" sm="6">
          <div class="promo-container">
            <p class="bg-info">Exclusive offers from / logo</p>
            <h4>Get Your</h4>
            <h1>100% up to &#163; 400</h1>
            <h2>+200 Free Spins</h2>
          </div>
        </b-col>
        <b-col class="text-white" cols="12" sm="6">
          <div class="form-container mx-auto">
            <p class="text-muted">{{ currentStep }}</p>
            <FormStepOne v-on:goToStep="goToStepMain" v-if="currentStep == 1"/>
            <FormStepTwo v-on:goToStep="goToStepMain" v-if="currentStep == 2"/>
            <FormStepThree v-on:goToStep="goToStepMain" v-if="currentStep == 3"/>
            <FormStepFour v-on:goToStep="goToStepMain" v-if="currentStep == 4"/>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
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


<style <style lang="scss">
.hero {
  background-image: url("/src/assets/casino-hero.jpg");
  height: 100vh;
}

.bg-info {
  background-color: rgba(23, 162, 184, 0.2) !important;
  padding: 10px;
}

.form-container {
  background: #fff;
  padding: 5%;
  border-radius: 5px;
}

.input-group {
  margin-bottom: 10px;
}

.input-group-text {
  background-color: #fff;
}
.form-control {
  border-left: 0 none;

  &:focus,
  &:active,
  &:hover {
    box-shadow: none;
  }
}

@media only screen and (min-width: 1200px) {
  .promo-container {
    max-width: 80%;
  }
  .form-container {
    max-width: 450px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .container {
    max-width: 700px;
  }
}
</style>