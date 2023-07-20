<template>
  <div class="job_info current_page">
    <div class="header_shape pt-4 pb-4 position-relative">
      <div class="header_shape_2"></div>
      <div class="container">
        <h2 class="text-center fw-bold mb-4">
          Front end Developer
        </h2>
        <p class="text-center gray">
          Direct and coordinate operational, administrative, management, and supportive services of a U.S. Post Office; or coordinate activities of workers engaged in postal and related work in assigned Post Office.
        </p>
      </div>
    </div>
    <div class="info mt-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-6 col-12 mb-2 mt-2">
               <div class="d-flex align-items-center justify-content-between">
                  <p class="mb-0">{{ words.details_position }}</p>
                  <div class="buttons">
                    <button class="btn-bk-primary d-inline-flex align-items-center mrl-reverse-15"
                      v-for="(btn,index) in words.buttons" :key="index"
                    >
                      <span class="p-relative mrl-1 ">{{ btn['name'] }}</span>
                      <span><i :class="'position-relative top-1'+btn.icon"></i></span>
                    </button>
                  </div>
               </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-2">
               <div class="side-bar">
                  <ul>
                    <li v-for="(i,index) in words.task_bar"  :class="'mb-3 '+(index == 0 ? 'active':'')" :key="index">
                      <nuxt-link :to="i['link']">{{ i['name'] }}</nuxt-link>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
export default {
  name: '_id',
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

.info{
  .side-bar{
    background-color: $gray_white;
    padding: 15px;
    border-radius: 6px;
    li{
      a{
        color:$gray;
        width: 100%;
        display: block;
      }
      &.active{
        background-color: white;
        border-bottom: 2px solid $main_color;
        padding: 5px;
        border-radius: 4px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        a{
          color:$black;
        }
      }
    }
  }
}

.buttons{
  button{
    &:hover{
      span{
        color:white;
      }
    }
  }
}
</style>
