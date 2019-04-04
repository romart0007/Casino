<template>
  <b-form>
    <h2 class="text-left font-weight-light text-warning">Sign Up</h2>
    <b-form-text
      class="mb-2 text-left"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus ut tortor eget elementum.</b-form-text>
    <b-input-group :class="{ 'invalid': $v.address1.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-1"
        type="text"
        required
        placeholder="Address 1"
        v-model="address1"
        @blur="$v.address1.$touch()"
      ></b-form-input>
      <small
        v-if="$v.address1.$dirty && $v.address1.$invalid"
        class="text-warning text-left d-block w-100 pt-1"
      >This field is required.</small>
    </b-input-group>

    <b-input-group :class="{ 'invalid': $v.address2.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-1"
        type="text"
        required
        placeholder="Address 2"
        v-model="address2"
        @blur="$v.address2.$touch()"
      ></b-form-input>
      <small
        v-if="$v.address2.$dirty && $v.address2.$invalid"
        class="text-warning text-left d-block w-100 pt-1"
      >This field is required.</small>
    </b-input-group>

    <b-input-group :class="{ 'invalid': $v.city.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-1"
        type="text"
        required
        placeholder="City"
        v-model="city"
        @blur="$v.city.$touch()"
      ></b-form-input>
      <small
        v-if="$v.city.$dirty && $v.city.$invalid"
        class="text-warning text-left d-block w-100 pt-1"
      >This field is required.</small>
    </b-input-group>

    <b-input-group :class="{ 'invalid': $v.code.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-1"
        type="text"
        required
        placeholder="Postal Code"
        v-model="code"
        @blur="$v.code.$touch()"
      ></b-form-input>
      <small
        v-if="$v.address1.$dirty && $v.address1.$invalid"
        class="text-warning text-left d-block w-100 pt-1"
      >This field is required.</small>
    </b-input-group>

    <b-input-group :class="{ 'invalid': $v.phone.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-1"
        type="tel"
        required
        placeholder="Phone Number"
        v-model="phone"
        @blur="$v.phone.$touch()"
      ></b-form-input>
      <small
        v-if="$v.phone.$dirty && $v.phone.$invalid"
        class="text-warning text-left d-block w-100 pt-1"
      >This field is required.</small>
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
        <span class="input-group-text">
          <i class="fas fa-ticket-alt"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input id="input-1" type="tel" required placeholder="Enter code"></b-form-input>
    </b-input-group>

    <b-input-group class="mt-3">
      <b-button
        type="submit"
        @click.prevent="goToStep"
        variant="success"
        class="w-100"
        :disabled="$v.$invalid"
      >
        Submit
        <i class="fas fa-arrow-circle-right"></i>
      </b-button>
    </b-input-group>
  </b-form>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      status: false,
      step: 3,
      address1: "",
      address2: "",
      city: "",
      code: "",
      phone: ""
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
  },
  validations: {
    address1: {
      required
    },
    address2: {
      required
    },
    city: {
      required
    },
    code: {
      required
    },
    phone: {
      required
    }
  }
};
</script>

<style>
.fa-phone {
  transform: rotate(90deg);
}
</style>
