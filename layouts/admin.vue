<template>
  <div class="admin">
    <div class="row">
      <div class="col-lg-2 col-md-4">
          <nav :key="current_page">
            <nuxt-link tag="img" src="/images/logo.png" class="brand" to="/"></nuxt-link>
            <ul>
               <li>
                 <span class="mrl-half"><i class="bi bi-house"></i></span>
                 <nuxt-link to="/dashboard">{{ words.home }}</nuxt-link>
               </li>
               <li>
                <span class="mrl-half"><i class="bi bi-person-fill-gear"></i></span>
                <nuxt-link to="/dashboard/employees">{{ words.admins }}</nuxt-link>
               </li>
               <li>
                  <span class="mrl-half"><i class="bi bi-people"></i></span>
                  <nuxt-link to="/dashboard/users">{{ words.employees }}</nuxt-link>
               </li>
               <li>
                 <span class="mrl-half"><i class="bi bi-buildings"></i></span>
                 <nuxt-link to="/dashboard/companies">{{ words.companies }}</nuxt-link>
               </li>
               <li>
                <span class="mrl-half"><i class="bi bi-briefcase"></i></span>
                <nuxt-link to="/dashboard/jobs">{{ words.jobs }}</nuxt-link>
               </li>
               <li>
                <span class="mrl-half"><i class="bi bi-globe-americas"></i></span>
                <nuxt-link to="/dashboard/countries">{{ words.countries }}</nuxt-link>
               </li>
               <li>
                <span class="mrl-half"><i class="bi bi-pin-map"></i></span>
                <nuxt-link to="/dashboard/cities">{{ words.cities }}</nuxt-link>
               </li>
               <li>
                <span class="mrl-half"><i class="bi bi-file-earmark-text"></i></span>
                <nuxt-link to="/dashboard/reports">{{ words.reports }}</nuxt-link>
               </li>
               <li>
                <span class="mrl-half"><i class="bi bi-bell"></i></span>
                <nuxt-link to="/dashboard/notifications">{{ words.notifications }}</nuxt-link>
               </li>
               <li>
                <span class="mrl-half"><i class="bi bi-gear"></i></span>
                <nuxt-link to="/dashboard/settings">{{ words.settings }}</nuxt-link>
               </li>

             </ul>
          </nav>
      </div>
      <div class="col-lg-10 col-md-8">
        <nuxt />
        <loader v-if="loader_status" :color="'#0a58ca'" size="60px"></loader>
      </div>
    </div>


  </div>
</template>

<script>

import WordsLang from "../mixins/WordsLang";
import {mapGetters} from "vuex";
export default {
  name: "admin",
  data(){
     return {
       file_name:'admin_layout',
       current_page:'',
     }
  },
  mixins:[WordsLang],
  computed:{
    ...mapGetters({
      'loader_status':'loader/getLoaderGetter',
    })
  },
  mounted() {
    console.log('abc admin');
    this.current_page = this.$route.path.split('/')[this.$route.path.split('/').length - 1];
    for(let li of document.querySelectorAll('ul li')){
       if(li.children[1].href.indexOf(this.current_page) >= 0){
           li.className = 'active';
           break;
       }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
.admin {
  overflow: hidden;
  nav {
    background-color: $main_color_more_white_bk;
    padding-top: 30px;
    height: 100%;
    img.brand{
      height: 75px;
      display: block;
      margin:auto;
      margin-bottom: 30px;
      max-width: 100%;
    }
    ul{
      li{
        padding: 10px;
        border-bottom: 1px solid #dddddd;
        transition: 0.5s all;
        span,a{
          font-size: $normal !important;
        }
        span{
          color:$main_color;
        }
        a{
          display: inline-block;
          width: calc(100% - 30px);
          color:$black;
        }
        &.active{
          background-color: $main_color_white_bk;
          padding-right: 30px;
          padding-left: 30px;
        }
        &:hover{
          @extend .active
        }
      }
    }
  }
}
</style>

