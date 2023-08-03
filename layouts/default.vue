<template>
  <div>
      <navbar-component></navbar-component>
      <nuxt />
      <span class="up"><i class="bi bi-arrow-up"></i></span>
      <loader v-if="loader_status" :color="'#0a58ca'" size="60px"></loader>
      <footer-component></footer-component>


  </div>
</template>

<script>

import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import {mapGetters} from 'vuex';
export default {
  name: "default",
  computed:{
    ...mapGetters({
      'loader_status':'loader/getLoaderGetter',
    })
  },
  components: {NavbarComponent,FooterComponent}
}
</script>

