<template>
  <div class="colleagues current_page mt-4 mb-4">
    <div class="container">
      <h1 class="mb-4">{{ words.colleagues_at_skillar }}</h1>
      <form class="mb-3">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group input-icon flex-wrap">
              <label>{{ words.username }}</label>
              <span><i class="bi bi-person"></i></span>
              <input class="form-control" name="username" required>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group input-icon flex-wrap">
              <label>{{ words.field }}</label>
              <span><i class="bi bi-arrow-down-short"></i></span>
              <select class="form-control" name="country_id">
                <option>{{ words.select_best_choice }}</option>
                <option value="1" v-for="i in 10">Programming</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group input-icon flex-wrap">
              <label>{{ words.country }}</label>
              <span><i class="bi bi-arrow-down-short"></i></span>
              <select class="form-control" name="country_id">
                <option>{{ words.select_best_choice }}</option>
                <option value="1" v-for="i in 10">egypt</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div class="row">
         <div class="col-md-4" v-for="i in 9" :key="i">
           <div class="user-card mb-3 position-relative">
             <div class="user-header">
               <a target="_blank" class="cursor-pointer" href="/profile/ahmed">
                 <img src="/images/users/1.webp">
               </a>
             </div>
             <div class="user-body p-2">
               <p class="fw-bold text-center mb-0">Ahmed ali</p>
               <p class="text-center mb-2">Full stack engineer have experience more than 6 years in we development</p>
               <ul class="d-flex justify-content-center align-items-center flex-wrap mb-2" v-if="words.profile">
                 <li class="mrl-2 mb-2 d-flex align-items-center" v-for="(i,index) in Object.keys(words.profile)" :key="index">
                   <span class="position-relative top-3 gray mrl-half"><i class="bi bi-tag"></i></span>
                   <p class="mb-0">
                     <span class="blue">4</span>
                     <span class="blue">{{ words.profile[i] }}</span>
                   </p>
                 </li>
               </ul>
               <a href="/profile/ahmed"
                  target="_blank" class="btn btn-outline-primary fit-content d-block m-auto">{{ words.see_profile }}</a>
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
import HeaderComponent from "../components/HeaderComponent";
export default {
  name: 'nearest_jobs',
  mixins:[WordsLang],
  mounted() {

  },
  components:{HeaderComponent},
}
</script>

<style lang="scss">
@import "~style/variables";

</style>
