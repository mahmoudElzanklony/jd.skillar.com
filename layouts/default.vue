<template>
  <div>
      <navbar-component></navbar-component>
      <nuxt />
      <footer-component></footer-component>


  </div>
</template>

<script>

import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
export default {
  name: "default",
  components: {NavbarComponent,FooterComponent}
}
</script>

