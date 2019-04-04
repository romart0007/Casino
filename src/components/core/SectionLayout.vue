<template>
  <div class="section">
    <b-container fluid>
      <b-row no-gutters>
        <slot name="centre"></slot>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SectionLayout"
};
</script>