<template>
  <b-form>
    <h2 class="text-left font-weight-light text-warning">Sign Up</h2>
    <b-form-text
      class="mb-2 text-left"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus ut tortor eget elementum.</b-form-text>
    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text"></span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="text" required placeholder="Address 1"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text"></span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="text" required placeholder="Address 2"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text"></span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="text" required placeholder="City"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text"></span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="text" required placeholder="Postal Code"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text"></span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="tel" required placeholder="Phone Number"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-form-checkbox
        class="text-muted"
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="true"
        unchecked-value="false"
      >
        <small>Do you have a bonus code?</small>
      </b-form-checkbox>
    </b-input-group>

    <b-input-group v-if="status == 'true'">
      <b-input-group-prepend>
        <span class="input-group-text"></span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="tel" required placeholder="Enter code"></b-form-input>
    </b-input-group>

    <b-input-group class="mt-3">
      <b-button type="submit" @click.prevent="goToStep" variant="success" class="w-100">
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
      status: false,
      step: 3
    };
  },
  computed: {
    getStatus() {
      return this.status;
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
