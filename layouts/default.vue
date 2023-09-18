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
import text_editor from "../mixins/text_editor";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: "default",
  mixins:[text_editor],
  computed:{
    ...mapGetters({
      'loader_status':'loader/getLoaderGetter',
      'auth_check_getter':'auth/login/get_auth_user_validation'
    })
  },
  methods:{
    ...mapActions({
      'validate_user':'auth/login/validateAuthAction',
    })
  },
  mounted() {
    /*if(this.auth_check_getter == null){
       this.validate_user();
    }*/

  },
  components: {NavbarComponent,FooterComponent}
}
</script>

