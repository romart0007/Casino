<template>
  <b-form>
    <h2 class="text-left font-weight-light text-warning">Sign Up</h2>
    <b-form-text
      class="mb-4 text-left"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus ut tortor eget elementum.</b-form-text>
    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-envelope"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="email" required placeholder="Email"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-user-alt"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input id="input-2" type="text" required placeholder="User name"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-lock"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input id="input-3" type="password" required placeholder="Password"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-lock"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input id="input-4" type="password" required placeholder="Confirm Password"></b-form-input>
    </b-input-group>

    <b-input-group class="mt-3">
      <b-button @click.prevent="goToStep" variant="success" class="w-100">
        Submit
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
    }
  },
  methods: {
    goToStep(event) {
      this.step++;
      this.$emit("goToStep", this.step);
    }
  }
};
</script>
