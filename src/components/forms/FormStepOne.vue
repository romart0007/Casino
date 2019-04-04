<template>
  <b-form>
    <h2 class="text-left font-weight-light text-warning">Sign Up</h2>
    <b-form-text
      class="mb-4 text-left truncate"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus ut tortor eget elementum.</b-form-text>
    <b-input-group :class="{ 'invalid': $v.email.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-envelope"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-1"
        type="email"
        required
        placeholder="Email"
        v-model.lazy="email"
        @blur="$v.email.$touch()"
      ></b-form-input>
      <small
        v-if="!$v.email.email"
        class="text-warning text-left d-block w-100 pt-1"
      >Please provide a valid email</small>
    </b-input-group>
    <b-input-group :class="{ 'invalid': $v.name.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-user-alt"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-2"
        type="text"
        required
        placeholder="User name"
        v-model.lazy="name"
        @blur="$v.name.$touch()"
      ></b-form-input>
      <small
        v-if="(!$v.name.minLength || !$v.name.maxLength)"
        class="text-warning text-left d-block w-100 pt-1"
      >Username should be between 4-12 characters.</small>
    </b-input-group>

    <b-input-group :class="{ 'invalid': $v.password.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-lock"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-3"
        type="password"
        required
        placeholder="Password"
        v-model.lazy="password"
        @blur="$v.password.$touch()"
      ></b-form-input>
      <small
        v-if="$v.password.$dirty && !$v.password.strongPassword"
        class="text-warning text-left d-block w-100 pt-1"
      >
        Strong passwords need to have a letter, a number,
        <br>a special character, and between 6-12 characters long.
      </small>
    </b-input-group>
    <b-input-group :class="{ 'invalid': $v.confirmPassword.$error }">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fas fa-lock"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input
        id="input-4"
        type="password"
        required
        placeholder="Confirm Password"
        v-model.lazy="confirmPassword"
        @blur="$v.confirmPassword.$touch()"
      ></b-form-input>
      <small
        v-if="$v.confirmPassword.$dirty && !$v.confirmPassword.sameAs"
        class="text-warning text-left d-block w-100 pt-1"
      >The passwords do not match</small>
    </b-input-group>

    <b-input-group
      :class="{ 'invalid': $v.term.$dirty && $v.term.$invalid }"
      class="d-flex align-items-center"
    >
      <input type="checkbox" id="term" @change="$v.term.$touch()" v-model="term">
      <label for="term" class="text-muted checkbox-label">Accept Terms of Use</label>
      <small
        v-if="$v.term.$dirty && !$v.term.sameAs"
        class="text-warning text-left d-block w-100 pt-1"
      >Must agree with the terms</small>
    </b-input-group>

    <b-input-group class="mt-1">
      <b-button @click.prevent="goToStep" variant="success" class="w-100" :disabled="$v.$invalid">
        Submit
        <i class="fas fa-arrow-circle-right"></i>
      </b-button>
    </b-input-group>
  </b-form>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      step: 1,
      term: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(12)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(12),
      strongPassword(password) {
        return (
          /[a-zA-Z]/.test(password) && // checks for a-z and a capital letter
          /[0-9]/.test(password) && // checks for 0-9
          /\W|_/.test(password) && // checks for special char
          (password.length >= 6 || password.length <= 12)
        );
      }
    },
    confirmPassword: {
      required,
      sameAs: sameAs("password")
    },
    term: {
      required,
      sameAs: sameAs(() => true)
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


<style lang="scss">
.invalid {
  .input-group-text,
  .form-control {
    border-color: #ff7a7a;
  }

  .checkbox-label {
    color: #ff7a7a !important;
  }
}
.checkbox-label {
  font-size: 13px;
  margin: 4px 0 4px 6px;
}
</style>
