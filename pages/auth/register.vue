<template>
  <section class="auth current_page">
    <div class="auth-content">
      <div class="container-fluid">
        <div class="row h-100">

          <div class="col-md-5 mb-2">
            <div class="form-data mt-3">
              <form class="p-3"
                    method="post"
                    @submit.prevent="register">
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
                <div class="form-group mb-2 input-icon flex-wrap">
                  <label>{{ words.username }}</label>
                  <input class="form-control" name="username" >
                  <span><i class="bi bi-person"></i></span>
                </div>
                <div class="form-group mb-2 input-icon flex-wrap">
                  <label>{{ words.email }}</label>
                  <input class="form-control" name="email" >
                  <span><i class="bi bi-envelope"></i></span>
                </div>
                <div class="form-group mb-3 input-icon flex-wrap">
                  <label>{{ words.password }}</label>
                  <input class="form-control" name="password" type="password" >
                  <span><i class="bi bi-key"></i></span>
                </div>
                <div class="form-group mb-3 input-icon flex-wrap">
                  <label>{{ words.password_confirmation }}</label>
                  <input class="form-control" name="password_confirmation" type="password" >
                  <span><i class="bi bi-key"></i></span>
                </div>
                <div class="form-group mb-3 input-icon flex-wrap">
                  <label>{{ words.phone }}</label>
                  <input class="form-control" name="phone" type="number" >
                  <span><i class="bi bi-phone"></i></span>
                </div>
                <div class="form-group mb-3 input-icon flex-wrap">
                  <label>{{ words.country }}</label>
                  <select class="form-control" name="country_id"
                          required>
                    <option value="">{{ words.select_best_choice }}</option>
                    <option  v-for="(i,index) in getCountriesGetter" :key="index" :value="i['id']">{{ i['name'] }}</option>
                  </select>
                  <span><i class="bi bi-arrow-down-short"></i></span>
                </div>
                <div class="form-group mb-3 input-icon flex-wrap">
                  <label>{{ words.user_type }}</label>
                  <select class="form-control" name="type" required>
                    <option value="">{{ words.select_best_choice }}</option>
                    <option value="client">{{ words.client }}</option>
                    <option value="company">{{ words.company }}</option>
                  </select>
                  <span><i class="bi bi-arrow-down-short"></i></span>
                </div>
                <div class="form-group mb-3 input-icon flex-wrap">
                  <input class="mrl-half" type="checkbox">
                  <p class="mb-0">
                    <span>{{ words.agree_conditions }}</span>
                    <nuxt-link to="#">{{ words.privacy_policy }}</nuxt-link>
                    <span>&</span>
                    <nuxt-link to="#">{{ words.terms_of_conditions }}</nuxt-link>
                  </p>
                </div>
                <div class="g-recaptcha mb-2"
                        data-sitekey="6Ld2TEclAAAAANpPyGp_2WsRbnOosh29smJPP9uB"
                        data-callback="verify_recaptha"
                        ></div>
                <div class="form-group mb-4">
                  <input class="form-control btn btn-primary"
                         disabled
                         type="submit"
                         :value="words.register">
                </div>
                <p v-if="message">{{ message }}</p>

                <p class="mb-2">
                  <span>{{ words.you_have_already_account }}</span>
                  <a href="/auth/login">{{ words.login }}</a>
                </p>
              </form>
            </div>
          </div>
          <div class="col-md-7 mb-2 mobile-hide auth-bk">
            <div class="info text-center-mobile flex align-items-center justify-content-between">
              <img src="/images/auth/bk.png">
              <div class="text-center">
                <p class="mb-2 mt-3 white">{{ words.welcome_friend }}</p>
                <p class="mb-0 white">{{ words.couple_clicks }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<script>
import WordsLang from "../../mixins/WordsLang";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: "register",
  mixins:[WordsLang],
  async fetch({ store }) {
    await store.dispatch('places/countries/getCountriesAction');
  },
  data(){
    return {
      message:null,
    }
  },
  computed:{
    ...mapGetters({
      'getCountriesGetter':'places/countries/getCountriesGetter',
      'getCitiesGetter':'places/cities/getCitiesGetter',
    })
  },
  methods:{
    verify_recaptha() {
      console.log('yes');
      console.log(grecaptcha);
      document.querySelector('input[type="submit"]').removeAttribute('disabled');
      grecaptcha.ready(function() {
        grecaptcha.execute('6Ld2TEclAAAAANpPyGp_2WsRbnOosh29smJPP9uB', {action: 'submit'}).then(function(token) {
          // Add your logic to submit to your backend server here.
          console.log(token)
        });
      });
    },
    ...mapActions({
      'getCountriesAction':'places/countries/getCountriesAction',
      'register':'auth/register/registerAction',
    }),
  },
  components:{
  },
  mounted() {
    var com = this;
    window.verify_recaptha = function (){
      com.verify_recaptha();
    }
  },
  created() {
    console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.auth{
  height: 900px;
  input[type="checkbox"]{
    width: 18px;
    height: 18px;
  }
  input[type="submit"]{

  }
}
.grecaptcha-badge {
  visibility: hidden;
}
</style>
