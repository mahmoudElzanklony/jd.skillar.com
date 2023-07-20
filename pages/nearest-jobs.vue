<template>
  <div class="nearest_jobs current_page mt-4 mb-4">
    <div class="container">
      <h1 class="text-center">{{ words.nearest_jobs }}</h1>
      <p class="text-center normal gray">{{ words.we_will_calculate_distance }}</p>
      <img class="outer_profile_img" src="/images/users/1.webp">
      <div class="distances mt-5 mb-5">
         <div class="long_three d-flex align-items-center justify-content-center m-auto">
           <nuxt-link tag="img" to="/jobs/1" class="company horizental cursor-pointer"
                      src="/images/companies/1.png"
                      data-html="true"
                      v-tooltip="'<strong>name</strong> : shutterland company specified at web applications.... <br> <strong>location</strong> : cairo'">

           </nuxt-link>

           <nuxt-link tag="img" to="/jobs/1" class="company horizental cursor-pointer"
                      src="/images/companies/2.png"
                      data-html="true"
                      v-tooltip="'<strong>name</strong> : shutterland company specified at web applications.... <br> <strong>location</strong> : cairo'">

           </nuxt-link>
            <div class="long_two d-flex align-items-center justify-content-center">
              <nuxt-link tag="img" to="/jobs/1" class="company cursor-pointer"
                         src="/images/companies/2.png"
                         data-html="true"
                         v-tooltip="'<strong>name</strong> : shutterland company specified at web applications.... <br> <strong>location</strong> : cairo'">

              </nuxt-link>
              <nuxt-link tag="img" to="/jobs/1" class="company cursor-pointer"
                         src="/images/companies/2.png"
                         data-html="true"
                         v-tooltip="'<strong>name</strong> : shutterland company specified at web applications.... <br> <strong>location</strong> : cairo'">

              </nuxt-link>
              <div class="long_one d-flex align-items-center justify-content-center">
                <nuxt-link tag="img" to="/jobs/1" class="company horizental cursor-pointer"
                           src="/images/companies/1.png"
                           data-html="true"
                           v-tooltip="'<strong>name</strong> : shutterland company specified at web applications.... <br> <strong>location</strong> : cairo'">

                </nuxt-link>

                <nuxt-link tag="img" to="/jobs/1" class="company horizental cursor-pointer"
                           src="/images/companies/2.png"
                           data-html="true"
                           v-tooltip="'<strong>name</strong> : shutterland company specified at web applications.... <br> <strong>location</strong> : cairo'">

                </nuxt-link>
                <img v-if="false" class="profile" src="/images/users/1.webp">
              </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
import JobComponent from "../components/JobComponent";
import HeaderComponent from "../components/HeaderComponent";
import DotsScrollComponent from "../components/DotsScrollComponent";
import $ from 'jquery';
export default {
  name: 'nearest_jobs',
  mixins:[WordsLang],
  data(){
    return {
      data: [],
      skills:['php','mysql','laravel'],
      dots:['header','number_of_users','explore_categories','expand_connections','lastest_jobs','get_last_information'],
    }
  },
  mounted() {
    setTimeout(async ()=>{
       $('.distances div').css('animation','none');
    },5000);
    $(".company").each(function(index) {
      $(this).delay(1000*index).fadeIn(1000);
    });
  },
  components:{HeaderComponent,DotsScrollComponent, JobComponent},
}
</script>

<style lang="scss">
@import "~style/variables";
.outer_profile_img{
  width: 75px;
  height: 75px;
  margin: auto;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 200px;
}
.distances{

  div{
    border: 2px dashed #dddddd;
    border-radius: 50%;
    position: relative;
    animation-name: rotate;
    animation-timing-function: linear;
    animation-duration: 5s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    .company{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid #dddddd;
      position: absolute;
      display: none;
    }
    &::before,&::after{
      content:'';
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: $main_color;
      border-radius: 50%;
    }
  }
  .long_three{
    width: 400px;
    height: 400px;
    &::before{
      right: -8px;
    }
    &::after{
      left: -8px;
    }
    .company.horizental{
        right: 0px;
        left: 0px;
        text-align: center;
        margin: auto;
        &:first-of-type{
          top:-35px;
        }
        &:nth-of-type(2){
          bottom: -35px;
        }

    }
    .long_two{
      width: 300px;
      height: 300px;
      >.company{
        &:first-of-type{
          right:-30px;
        }
        &:last-of-type{
          left: -30px;
        }

      }
      &::before,&::after{
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      }
      &::before{
        top:-8px;
      }
      &::after{
        bottom: -8px;
      }
      .long_one{
        width: 200px;
        height: 200px;
        &::before{
          right: -8px;
        }
        &::after{
          left: -8px;
        }
        .profile{
          width: 75px;
          height: 75px;
          border: 1px solid #dddddd;
          border-radius: 50%;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .distances{
    overflow: auto;
  }
}
@keyframes rotate {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}

</style>
