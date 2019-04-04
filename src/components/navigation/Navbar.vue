<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="p-0" fixed="top">
    <b-navbar-brand href="#">
      <img src="/src/assets/casino-com-logo.png" height="30">
    </b-navbar-brand>

    <!-- <b-collapse id="nav-collapse" is-nav> // removed collapse-->
    <!-- Right aligned nav items -->
    <b-navbar-nav>
      <b-nav-item href="#" class="text-uppercase text-sm">
        <img src="/src/assets/uk-flag.png" height="30" class="d-inline">
        <span class="d-inline-block text-left ml-2">
          Gambling
          <br>commision
        </span>
      </b-nav-item>
      <b-nav-item href="#" class="text-sm">
        <i class="fas fa-lock fa-lg"></i>
        <span class="d-inline-block text-left ml-2">
          Secure
          <br>payments
        </span>
      </b-nav-item>
      <b-nav-item href="#" class="text-sm">
        <i class="fas fa-shield-alt fa-lg"></i>
        <span class="d-inline-block text-left ml-2">
          Data
          <br>protected
        </span>
      </b-nav-item>
      <b-nav-item href="#" class="text-sm bg-warning ml-2">
        <b-button size="sm" variant="warning" class="my-2 my-sm-0 rounded-0" type="submit">
          <i class="fas fa-sign-in-alt fa-lg text-white"></i>
          <span class="hidden-sm">Login</span>
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
    <!-- </b-collapse> -->
  </b-navbar>
</template>

<script>
export default {
  name: "navbar"
};
</script>
<style lang="scss">
.navbar-dark {
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;

  .navbar-nav {
    .nav-item {
      margin: 0 10px;
      padding: 5px 0;

      &:last-child {
        margin-right: 0;
      }
    }

    .nav-link {
      font: 400 12px Montserrat-Regular, sans-serif;
      -ms-flex-align: center !important;
      align-items: center !important;
      -ms-flex-pack: justify !important;
      justify-content: start !important;
      display: -ms-flexbox !important;
      display: flex !important;
    }
  }
}

@media only screen and (max-width: 991px) {
  /* start of large tablet styles */
  .navbar-nav {
    flex-direction: initial;
    align-items: center;
  }
}

/* start of medium tablet styles */
@media screen and (max-width: 767px) {
  .navbar-dark .navbar-nav {
    .nav-item {
      padding: 0;

      &:last-child {
        padding: 0 5px;
      }
    }
    .nav-link {
      font-size: 11px;
    }

    span {
      display: none;
    }
  }
}

@media screen and (max-width: 575px) {
  /* start of phone styles */
  .navbar-brand {
    flex: 1;
  }

  .navbar-dark .navbar-nav .nav-item:not(:last-child) {
    display: none;
  }
  .navbar-dark .navbar-nav .nav-item:last-child {
    padding: 0 10px;
  }
}
</style>
