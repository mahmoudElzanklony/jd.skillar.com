<template>
  <section class="current_page profile profile-feedbacks mt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mb-2">
          <div class="inner_profile pb-3">
            <profile-personal-info-component :edit_info="words.edit_info"></profile-personal-info-component>

            <div class="variety_data">
              <div class="one_variety" :name="words.friend_feedbacks">
                <div class="heading d-flex align-items-center justify-content-between">
                  <span class="normal fw-bold">{{ words.friend_feedbacks }}</span>
                  <p class="mb-0">
                    <span class="blue mrl-half" >15</span>
                    <span><i class="bi bi-caret-up-fill"></i></span>
                  </p>
                </div>
                <div class="data">
                  <div class="value" v-for="i in 5" :key="i">
                    <div class="d-flex align-items-center">
                      <img src="/images/users/1.webp" class="mrl-half">
                      <div>
                        <div class="mb-0 fw-bold d-flex align-items-center justify-content-between">
                          <span>hager ali</span>
                          <ul class="dots-action cursor-pointer d-inline-block">
                            <li class="dots">
                              <i class="bi bi-three-dots-vertical gray"></i>
                              <ul>
                                <li v-tooltip="words.accept_apperance_feedback">
                                  <span class="gray"><i class="bi bi-check-lg"></i></span>
                                  <span>{{ words.accept }}</span>
                                </li>
                                <li>
                                  <span class="red"><i class="bi bi-trash"></i></span>
                                  <span>{{ words.delete }}</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <p class="mb-0 line-height-22">Sara is a good enginner i work with here before at algorithma company she can
                          work under stress she do it best , test test test test test test test test test test</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-lg-3 mb-2">
          <div class="nearest_jobs">
            <h2 class="fw-bold mb-3">{{ words.popular_jobs }}</h2>
            <job-component v-for="i in 6" class="mb-3"
                           title="Full stack"
                           company_name="Algorithma"
                           time="30M ago"
                           id="1"
                           :skills="skills"
                           :show_details="words.open"
                           img="/images/companies/1.png"
            ></job-component>
          </div>
        </div>
      </div>
    </div>

    <!-----------modals--------- -->
    <update_personal_data></update_personal_data>



  </section>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import JobComponent from "../../../components/JobComponent";
import Update_personal_data from "../../../components/Modals/candidate/update_personal_data";
import ProfilePersonalInfoComponent from "../../../components/ProfilePersonalInfoComponent";
export default {
  name: "feedbacks",
  components: {
    ProfilePersonalInfoComponent,
    Update_personal_data,
    JobComponent},
  data(){
    return{
      skills:['php','laravel','oop','design pattern','mysql']
    }
  },
  mixins:[WordsLang],
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.profile.profile-feedbacks{
  .variety_data{
    .one_variety{
      .data{
        display: block;
      }
    }
    .value{
      img{
        max-height: 70px;
        border: 1px solid #dddddd;
        border-radius: 8px;
      }
    }
  }
}
</style>
