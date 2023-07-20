<template>
  <div class="best_companies current_page">
     <div class="container mt-4 mb-4">
       <h1 class="fw-bold mb-4">{{ words.top_companies }}</h1>
       <div class="outer">
         <div class="company" v-for="i in 15">
           <div class="row align-items-center">
             <div class="col-lg-2 col-md-4">
               <div class="image">
                 <nuxt-link tag="img" to="#" class="cursor-pointer"
                            :src="'/images/companies/'+(Math.floor(Math.random()*4)+1)+'.png'"></nuxt-link>
               </div>
             </div>
             <div class="col-lg-10 col-md-8">
               <div class="info">
                 <h2 class="h2 mb-0">
                   <nuxt-link class="fw-bold normal" to="#">Algorithma company</nuxt-link>
                 </h2>
                 <p class="gray mb-0 small">specialized in programming apps specialized in programming apps specialized in programming specialized in programming apps specialized in programming apps specialized in programming specialized in programming apps specialized in programming apps specialized in programming specialized in programming apps specialized in programming apps specialized in programming.</p>
                 <span>50 {{ words.search }}</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
export default {
  name: 'best_companies',
  mixins:[WordsLang],
  data(){
    return {
      data: [],
      skills:['php','mysql','laravel'],
    }
  },
}
</script>

<style lang="scss">
@import "~style/variables";
.best_companies{
  .outer{
    border: 1px solid #dddddd;
    border-radius: 8px;
    padding: 10px;
  }
  .company {
    border-bottom: 1px solid #dddddd;
    padding: 10px;
    .image {
      img {
        object-fit: contain;
        height: 100px;
        display: block;
        margin: auto;
      }
    }
    span{
      background-color: $main_color_white_bk;
      color:$main_color;
      padding: 7px 15px;
      border-radius: 32px;
      display: inline-block;
      margin-top: 5px;
    }
  }
}
</style>
