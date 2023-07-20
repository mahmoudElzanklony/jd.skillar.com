<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3">{{ words.users_statistics }}</h1>
    <div class="container">
      <form class="input-icon">
        <input class="form-control mb-2" :placeholder="words.search_user">
        <span class="top-8"><i class="bi bi-search"></i></span>
      </form>
      <div class="row mb-3">
        <div class="col-lg-4 col-md-6" v-for="i in 20">

          <div class="user-card mb-3 position-relative">
            <ul class="dots-action cursor-pointer d-inline-block">
              <li class="dots">
                <i class="bi white bi-three-dots-vertical gray"></i>
                <ul>
                  <li data-bs-toggle="modal"
                      data-bs-target=".modal">
                    <span class="gray"><i class="bi bi-pencil-square"></i></span>
                    <span class="gray">{{ words.edit }}</span>
                  </li>
                  <li>
                    <span class="red"><i class="bi bi-trash"></i></span>
                    <span class="gray">{{ words.delete }}</span>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="user-header">
               <a target="_blank" class="cursor-pointer" href="/profile/ahmed">
                 <img src="/images/users/1.webp">
               </a>
            </div>
            <div class="user-body p-2">
              <p class="fw-bold text-center mb-0">Ahmed ali</p>
              <p class="text-center mb-2">Full stack engineer have experience more than 6 years in we development</p>
              <ul class="d-flex justify-content-center align-items-center flex-wrap" v-if="words.profile">
                <li class="mrl-2 mb-2" v-for="(i,index) in Object.keys(words.profile)" :key="index">
                  <span class="position-relative top-3 gray"><i class="bi bi-tag"></i></span>
                  <nuxt-link :to="'/dashboard/'+dashboard_name+'/info?type='+i+'&id=4'">
                    <span class="blue">4</span>
                    <span class="blue">{{ words.profile[i] }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <update_personal_data></update_personal_data>

    </div>
  </div>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import update_personal_data from "../../../components/Modals/candidate/update_personal_data";
export default {
  name: "index",
  layout:"admin",
  mixins:[WordsLang],
  components:{
    update_personal_data
  },
  data(){
    return {
      dashboard_name:this.$route.path.split('/')[this.$route.path.split('/').length - 1]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

</style>
