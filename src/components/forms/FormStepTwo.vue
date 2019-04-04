<template>
  <b-form>
    <h2 class="text-left font-weight-light text-warning">You’re ready to play!</h2>
    <b-form-text class="mb-4 mt-4 text-left">
      In order to play with real money, you will need to provide more information. You can do so
      now, if you wish, or skip and do it at a later time.
    </b-form-text>
    <b-input-group class="mt-3 d-flex justify-content-around">
      <b-button type="submit" variant="info" class="mb-3">Skip</b-button>
      <b-button type="submit" @click.prevent="goToStep" variant="success" class="mb-3">
        Continue Registration
        <i class="fas fa-arrow-circle-right"></i>
      </b-button>
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    };
  },
  methods: {
    goToStep(event) {
      this.step++;
      this.$emit("goToStep", this.step);
    }
  }
};
</script>
