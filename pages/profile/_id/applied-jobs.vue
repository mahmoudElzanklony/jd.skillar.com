<template>
  <section class="current_page profile profile-jobs mt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mb-2">
          <div class="inner_profile pb-3">
            <profile-personal-info-component :edit_info="words.edit_info"></profile-personal-info-component>
            <div class="info">
              <div class="inner_jobs">

                <div class="variety_data">
                  <div class="one_variety" :name="words.applied_jobs">
                    <div class="heading d-flex align-items-center justify-content-between">
                      <span class="normal fw-bold">{{ words.applied_jobs }}</span>
                      <p class="mb-0">
                        <span class="blue mrl-half" >15</span>
                        <span><i class="bi bi-caret-up-fill"></i></span>
                      </p>
                    </div>
                    <div class="data">

                        <div class="dynamic_tabs">
                            <ul class="row w-100 m-0" :key="$route.fullPath">
                               <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center justify-content-between" name="all_requests">
                                  <span class="mrl-half mrl-reverse-15"><i class="bi bi-card-list"></i></span>
                                  <div>
                                    <p class="fw-bold mb-0">50</p>
                                    <p class="mb-0">{{ words.all_requests }}</p>
                                  </div>
                               </li>
                              <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center justify-content-between"
                                  name="in_consideration_requests">
                                <span class="mrl-half"><i class="bi bi-arrow-up"></i></span>
                                <div>
                                  <p class="fw-bold mb-0">50</p>
                                  <p class="mb-0">{{ words.in_consideration_requests }}</p>
                                </div>
                               </li>
                              <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center justify-content-between"
                                  name="accepted_requests">
                                <span class="mrl-half"><i class="bi bi-check-lg"></i></span>
                                <div>
                                  <p class="fw-bold mb-0">50</p>
                                  <p class="mb-0">{{ words.accepted_requests }}</p>
                                </div>
                               </li>
                              <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center justify-content-between"
                                  name="rejected_requests">
                                <span class="mrl-half"><i class="bi bi-x-square"></i></span>
                                <div>
                                  <p class="fw-bold mb-0">50</p>
                                  <p class="mb-0">{{ words.rejected_requests }}</p>
                                </div>
                               </li>
                            </ul>
                            <div class="content">
                               <div class="job_info d-flex align-items-center">
                                 <div class="data d-block w-100">
                                   <div class="value end-border-bottom p-2"  v-for="i in 6" :key="i">
                                     <div class="d-flex align-items-center">
                                       <img src="/images/companies/1.png" class="mrl-1">
                                       <div>
                                         <p class="fw-bold w-100 mb-1 d-flex align-items-center justify-content-between">
                                           <span>Team leader / full stack php</span>
                                           <span class="red" v-tooltip="words.delete"><i class="bi bi-trash"></i></span>
                                         </p>
                                         <p class="mb-1">
                                           <span>Shutterland</span>
                                           <span class="gray">naser city - 5 street</span>
                                         </p>
                                         <span class="btn btn-primary mb-1">{{ words.in_consideration }}</span>
                                         <p>
                                           <span class="gray">{{ words.applied_at_date }}</span>
                                           <span class="gray">12/20/2023</span>
                                         </p>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                            </div>
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
import $ from "jquery";
import ProfilePersonalInfoComponent from "../../../components/ProfilePersonalInfoComponent";
export default {
  name: "jobs",
  components: {
    ProfilePersonalInfoComponent,
    Update_personal_data,
    JobComponent
  },
  mounted() {

  },
  methods:{
     add_active(){
       $(event.target).addClass('active').siblings().removeClass('active')
     }
  },
  data(){
    return{
      skills:['php','laravel','oop','design pattern','mysql'],
    }
  },
  mixins:[WordsLang],
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.profile.profile-jobs{
  .variety_data{
    .one_variety{
      .data{
        display: block;
      }
    }
  }
}
</style>
