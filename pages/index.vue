<template>
  <div class="welcome_home current_page">
    <header-component></header-component>

    <section id="number_of_users" class="number_of_users mt-2">
        <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6">
                  <div class="users mb-3">
                    <img  src="/images/users/1.webp">
                    <img  src="/images/users/2.webp">
                    <img  src="/images/users/3.webp">
                    <img  src="/images/users/1.webp">
                    <img  src="/images/users/2.webp">
                  </div>
                  <p>
                    <span>{{ words.over }}</span>
                    <span class="blue fw-bold">200,000+</span>
                    <span>{{ words.users_believe_that_skillar }}</span><br>
                    <span>{{ words.greatest_place }}</span>
                  </p>
              </div>
              <div class="col-md-6">
                  <h2 class="gray fw-bold mb-3">{{ words.trusted_by }}</h2>
                  <div class="d-flex align-items-center justify-content-between">
                      <span class="gray fw-bold">Google</span>
                      <span class="gray fw-bold">FaceBook</span>
                      <span class="gray fw-bold">Twitter</span>
                      <span class="gray fw-bold">DropBox</span>
                      <span class="gray fw-bold">First Meeting</span>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <section id="explore_categories" class="explore_categories">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2 class="fw-bold mb-3 text-center-mobile">{{ words.explore_by_category }}</h2>
              <p class="gray text-center-mobile">{{ words.we_provide_many_categories }}</p>
              <div class="row">
                  <div class="col-lg-6 mb-3">
                      <nuxt-link to="#">
                        <div class="category d-flex align-items-center justify-content-between bk-white p-3 rounded">
                          <img src="/images/icons/Wallet.png" class="mrl-1">
                          <p>Financial Accounting</p>
                        </div>
                      </nuxt-link>
                  </div>
                <div class="col-lg-6 mb-3">
                    <nuxt-link to="#">
                      <div class="category d-flex align-items-center justify-content-between bk-white p-3 rounded">
                        <img src="/images/icons/Profile.png" class="mrl-1">
                        <p>Human Resource</p>
                      </div>
                    </nuxt-link>
                  </div>
                <div class="col-lg-6 mb-3">
                    <nuxt-link to="#">
                      <div class="category d-flex align-items-center justify-content-between bk-white p-3 rounded">
                        <img src="/images/icons/Gallery.png" class="mrl-1">
                        <p>Art , Media or communication</p>
                      </div>
                    </nuxt-link>
                  </div>
                <div class="col-lg-6 mb-3">
                    <nuxt-link to="#">
                      <div class="category d-flex align-items-center justify-content-between bk-white p-3 rounded">
                        <img src="/images/icons/Tick.png" class="mrl-1">
                        <p>Business Development</p>
                      </div>
                    </nuxt-link>
                  </div>
              </div>
            </div>
            <div class="col-md-6">
                <div class="p-md-4 popular_cats">
                    <div class="popular-cats p-3 rounded bk-white">
                      <h3 class="fw-bold mb-3">{{ words.popular_categories }}</h3>
                      <ul>
                        <li  v-for="i in 4" :key="i">
                          <nuxt-link class="d-flex justify-content-between p-2 w-100" to="#">
                            <span class="fw-bold">Front end</span>
                            <span>{{ 6 * i }}</span>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                    <div class="rounded bk-white all_cats mt-3 p-3">
                        <nuxt-link to="#" class="d-flex align-items-center justify-content-between">
                            <div>
                              <img src="/images/icons/Paper_Plus.png" class="mrl-1">
                              <span>{{ words.see_all_categories }}</span>
                            </div>
                            <span class="gray" v-if="current_lang == 'en'"><i class="bi bi-arrow-right position-relative top-1"></i></span>
                            <span class="gray" v-else><i class="bi bi-arrow-left position-relative top-1"></i></span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expand_connections" class="expand_connections pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mb-2">
              <div class="bk">
                 <div class="row align-items-center">
                   <div class="col-lg-6">
                     <img src="~/assets/images/22.png">
                   </div>
                   <div class="col-lg-6">
                     <div class="box_card">
                       <div class="box-header d-flex align-items-center justify-content-between">
                         <p class="fw-bold">Sara Ali</p>
                         <span class="btn btn-primary">{{ words.open_to_work }}</span>
                       </div>
                       <div class="box-body d-flex align-items-center justify-content-between">
                         <div class="info">
                           <p><strong class="mrl-half">10</strong><span>{{ words.project }}</span></p>
                           <div class="line"></div>
                         </div>
                         <div class="info">
                           <p><strong class="mrl-half">10</strong><span>{{ words.year }}</span></p>
                           <div class="line"></div>
                         </div>
                       </div>
                       <div class="box-footer d-flex align-items-center justify-content-between">
                         <nuxt-link to="#">{{ words.open_profile }}</nuxt-link>
                         <div class="line"></div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
            <div class="col-md-6 mb-2">
                <div class="info_about_expand text-center-mobile">
                  <h1 class="mb-3 fw-bold">{{ words.expand_your_connections }}</h1>
                  <p class="gray mb-3">{{words.connection_note}}</p>
                  <nuxt-link to="#" class="btn btn-primary d-inline-flex align-items-center">
                    <span class="p-relative white mrl-1">{{ words.increase_my_connections }}</span>
                    <span class="white" v-if="current_lang == null || current_lang == 'ar'"><i class="bi bi-arrow-left position-relative top-1"></i></span>
                    <span class="white" v-else><i class="bi bi-arrow-right position-relative top-1"></i></span>
                  </nuxt-link>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lastest_jobs" class="lastest_jobs mt-3 pt-3 pb-3">
        <div class="container">
            <h2 class="fw-bold black text-center">{{ words.newest_jobs_for_you }}</h2>
            <p class="gray text-center">{{ words.get_the_fastest_jobs }}</p>
            <ul class="d-flex align-items-center justify-content-center mb-3 flex-wrap">
              <li class="text-center mx-3" v-for="i in 5" :key="i">
                <nuxt-link to="#" class="gray line-hover position-relative">Front end</nuxt-link>
              </li>
            </ul>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-2" v-for="i in 10" :key="i">
                    <job-component
                      id="1"
                      img="/images/companies/1.png"
                      title="Back end"
                      :skills=skills
                      company_name="ShutterStock"
                      time="30M ago"
                      :show_details="words.open"
                    ></job-component>
                </div>
            </div>
            <nuxt-link to="/jobs" class="d-block m-auto btn-bk-primary fit-content">{{ words.all_jobs }}</nuxt-link>
        </div>
      </section>

      <section id="get_last_information" class="get_last_information mt-5">
        <div class="container">
            <div class="box">
                <div class="row align-items-center">
                  <div class="col-lg-6 mb-3">
                      <div class="info text-center-mobile">
                        <h2 class="fw-bold">{{ words.get_last_information }}</h2>
                        <p class="gray">{{ words.join_our_daily }}</p>
                      </div>
                      <form class="position-relative form-has-submit-absolute">
                        <input class="form-control" :placeholder="words.your_email">
                        <input type="submit" class="btn btn-primary absolute-submit" :value="words.subscribe">
                      </form>
                  </div>
                  <div class="col-lg-6 mb-3">
                     <img src="/images/alerts.png" class="w-100">
                  </div>
                </div>
            </div>
        </div>
      </section>

      <dots-scroll-component :dots="dots"></dots-scroll-component>

  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
import CurrentLang from "../mixins/CurrentLang";
import JobComponent from "../components/JobComponent";
import HeaderComponent from "../components/HeaderComponent";
import DotsScrollComponent from "../components/DotsScrollComponent";
export default {
  name: 'IndexPage',
  mixins:[WordsLang,CurrentLang],
  data(){
    return {
      data: [],
      skills:['php','mysql','laravel'],
      dots:['header','number_of_users','explore_categories','expand_connections','lastest_jobs','get_last_information'],
    }
  },
  components:{HeaderComponent,DotsScrollComponent, JobComponent},
}
</script>

<style lang="scss">
@import "~style/variables";

/*----------------start of users section------------------------*/

.number_of_users{
  .users{
    img{
      position: relative;
      width: 50px;
      height: 50px;
      border: 1px solid #eee;
      border-radius: 50%;
    }
  }
}

@media (max-width: 767px) {
  .number_of_users{
    text-align: center;
  }
}
/*----------------end of users section------------------------*/

/*----------------start of explore_categories section------------------------*/
.explore_categories{
  background-color: $main_color_more_white_bk;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 30px;
  >div.container{
    >div.row{
      .category{
          text-align: left;
          img{
            height: 50px;
            width: 50px;
            object-fit: contain;
          }
          p{
            font-weight: bold;
            margin: 0px;
            width:calc(100% - 65px);
          }
      }
    }
    .popular-cats{
      ul{
        li{
          border-bottom: 1px solid #ddd;
          align-items: center;
          margin-bottom: 10px;
          span:last-of-type{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color:$main_color_white_bk;
            color: $main_color;
            font-size: $small;
            font-weight: bold;

          }
          &:last-of-type{
            border-bottom: none;
            margin-bottom: 0px;
          }
        }
      }
    }
    .all_cats{
      img{
        height: 40px;
      }
    }
  }
  .popular_cats{
    ul{
      li{
        a{
          color:$black;
        }
      }
    }
  }
}
/*----------------end of explore_categories section------------------------*/
/*----------------start of expand_connections------------------------*/
.expand_connections{
  .bk{
    background-image: url("/images/bk-header.webp");
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: auto;
    background-position: bottom;
    position: relative;
    padding-right: 15px;
    .box_card{
      padding: 10px;
      box-shadow: 1px 1px 6px 0px #ddd;
      border-radius: 10px;
      background-color: white;
      .box-header{
        border-bottom: 1px solid #dddddd;
        padding-bottom: 10px;
        margin-bottom: 10px;
      }
      p{
        margin-bottom: 0px;
      }
      .box-body{
        margin-bottom: 10px;
      }
      .box-footer{
        background-color: $main_color_more_white_bk;
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;
      }
    }
  }
  img{
    max-height: 300px;
    object-fit: contain;
    width: fit-content;
    display: block;
    margin: auto;
  }
}
/*----------------end of expand_connections------------------------*/
/*----------------start of lastest_jobs------------------------*/
.lastest_jobs{
  background-color: $main_color_more_white_bk;
}

/*----------------start of lastest_jobs------------------------*/
/*----------------start of get_last_information------------------------*/
.get_last_information{
  .info{
    form{
      input:first-of-type{
        padding: 10px;
      }
    }
  }
}
/*----------------end of get_last_information------------------------*/


</style>
