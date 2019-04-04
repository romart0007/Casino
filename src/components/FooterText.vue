<template>
  <b-container fluid class="footer-container pt-4 pb-4">
    <div class="container">
      <p>Casino.com WWW is licensed and regulated to offer online casino gaming services under the jurisdiction of Gibraltar. ©2019 Casino.com is an internationally registered trademark. Casino.com is operated by ONISAC Ltd of Suite 732 Europort, Gibraltar under a license issued by the Gibraltar Licensing Authority, RGL No.053 and regulated by the Gibraltar Gambling Commissioner. For players located in Great Britain only, Casino.com is operated by Mansion Europe Holdings Ltd under a United Kingdom Gambling Commission Remote Operating Licence, Number 000-039448-R-319446. Only players above the age of 18 are permitted to play our games. Underage gambling is an offence.</p>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-container {
  background: rgba(0, 0, 0, 0.075);
  p {
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 576px) {
  .footer-container {
    background: rgba(173, 181, 189, 0.85);
  }
}
</style>