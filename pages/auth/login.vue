<template>
  <section class="auth current_page">
     <video src="/videos/bg.mp4" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"></video>
     <div class="auth-content">
       <div class="shape width-100-mobile"></div>
       <div class="container">
         <div class="row align-items-center">
           <div class="col-md-5 mb-2">
              <div class="form-data">
                <div class="social_media_apps_auth">
                  <p class="text-center mb-2 mt-3">{{ words.register_with }}</p>
                  <div class="text-center mb-2">
                    <a href="#" class="facebook mrl-1">
                      <span><i class="bi bi-facebook"></i></span>
                    </a>
                    <a href="#" class="google">
                      <span><i class="bi bi-google"></i></span>
                    </a>
                  </div>
                  <p>
                    <span></span>
                    <span>{{ words.or }}</span>
                    <span></span>
                  </p>
                </div>
                <form class="p-3">
                  <div class="form-group mb-2 input-icon flex-wrap">
                    <label>{{ words.email }}</label>
                    <input class="form-control" name="email" required>
                    <span><i class="bi bi-envelope"></i></span>
                  </div>
                  <div class="form-group mb-3 input-icon flex-wrap">
                    <label class="d-flex justify-content-between w-100">
                      <span>{{ words.password }}</span>
                      <nuxt-link to="/auth/reset">{{ words.forget_password }}</nuxt-link>
                    </label>
                    <input class="form-control" name="password" type="password" required>
                    <span><i class="bi bi-key"></i></span>
                  </div>
                  <div class="form-group mb-4">
                    <input class="form-control btn btn-primary" type="submit" :value="words.login">
                  </div>
                  <p class="mb-2">
                    <span>{{ words.you_have_not_already_account }}</span>
                    <nuxt-link to="/auth/register">{{ words.register }}</nuxt-link>
                  </p>
                </form>
              </div>
           </div>
           <div class="col-md-7 mb-2 mobile-hide">
             <div class="info text-center-mobile">
               <h2 class="mb-0 white big">Skillar</h2>
               <h2 class="white big">{{ words.for_every_one }}</h2>
               <p class="white">{{ words.be_member_of_our_community }}</p>
             </div>
           </div>
         </div>
       </div>
     </div>
  </section>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
export default {
  name: "login",
  mixins:[WordsLang],
  methods:{

  },
  created() {
    console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

</style>
