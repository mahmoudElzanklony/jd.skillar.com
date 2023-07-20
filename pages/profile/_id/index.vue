<template>
  <section class="current_page profile mt-4">
      <div class="container">
          <div class="row">
            <div class="col-lg-9 mb-2">
              <div class="inner_profile pb-3">
                <profile-personal-info-component :edit_info="words.edit_info"></profile-personal-info-component>
                <div class="quick_statistics mb-3 p-3">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 mb-2">
                      <nuxt-link to="/profile/ahmed/applied-jobs">
                        <div class="statistics d-flex align-items-center justify-content-between">
                          <div>
                            <p class="fw-bold">{{ words.number_of_applied_jobs }}</p>
                            <p class="fw-bold">20</p>
                          </div>
                          <img src="/images/icons/Document.png">
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                      <nuxt-link to="/nearest-jobs">
                        <div class="statistics d-flex align-items-center justify-content-between">
                          <div>
                            <p class="fw-bold">{{ words.number_of_nearest_jobs }}</p>
                            <p class="fw-bold">20</p>
                          </div>
                          <img src="/images/icons/Location.png">
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                      <nuxt-link to="#">
                        <div class="statistics d-flex align-items-center justify-content-between">
                          <div>
                            <p class="fw-bold">{{ words.number_of_visiting }}</p>
                            <p class="fw-bold">20</p>
                          </div>
                          <img src="/images/icons/Show.png">
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                      <nuxt-link to="/chat">
                        <div class="statistics d-flex align-items-center justify-content-between">
                          <div>
                            <p class="fw-bold">{{ words.number_of_messages_chat }}</p>
                            <p class="fw-bold">20</p>
                          </div>
                          <img src="/images/icons/Chat.png">
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                      <nuxt-link to="/profile/ahmed/feedbacks">
                        <div class="statistics d-flex align-items-center justify-content-between">
                          <div>
                            <p class="fw-bold">{{ words.number_of_friends_feedback }}</p>
                            <p class="fw-bold">20</p>
                          </div>
                          <img src="/images/icons/Profile.png">
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                      <nuxt-link to="/notifications">
                        <div class="statistics d-flex align-items-center justify-content-between">
                          <div>
                            <p class="fw-bold">{{ words.number_of_new_notifications }}</p>
                            <p class="fw-bold">20</p>
                          </div>
                          <img src="/images/icons/Notification.png">
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="video mb-3">
                  <div class="d-flex align-items-center justify-content-center">
                    <ul class="dots-action cursor-pointer d-inline-block">
                      <li class="dots">
                        <i class="bi white bi-three-dots-vertical gray"></i>
                        <ul>
                          <li data-bs-toggle="modal"
                              data-bs-target="#update_personal_video">
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
                    <span data-bs-toggle="modal"
                          data-bs-target="#display_introduction_video"><i class="bi bi-file-earmark-play"></i></span>
                  </div>
                </div>
                <div class="description p-3">
                  <div class="main-heading d-flex align-items-center justify-content-between mb-2">
                    <span class="fw-bold normal">{{ words.quick_description }}</span>
                    <nuxt-link to="#">{{ words.download_my_cv }}</nuxt-link>
                  </div>
                  <p>
                    Test data about me Test data about me Test data about me Test data about me Test data about me Test data about
                    me Test data about me Test data about me Test data about me Test data about me Test data about me Test data
                    About me Test data about me Test data about me Test data about me Test data about me Test data about me
                    Test data about me Test data about me Test data about me Test data about me Test data about me Test data about
                    Test data about me Test data about me Test data about me Test data about me Test data about me Test data
                  </p>
                </div>

                <div class="variety_data">
                  <div class="one_variety" :name="words.languages">
                    <div class="heading d-flex align-items-center justify-content-between">
                      <span class="normal fw-bold">{{ words.languages }}</span>
                      <p class="mb-0">
                        <span class="blue mrl-half" data-bs-toggle="modal"
                              data-bs-target="#update_personal_language"><i class="bi bi-plus"></i></span>
                        <span><i class="bi bi-caret-down-fill"></i></span>
                      </p>
                    </div>
                    <div class="data">
                      <div class="value">
                        <div class="mb-0 d-flex align-items-center justify-content-between">
                          <span>Arabic</span>
                          <ul class="dots-action cursor-pointer d-inline-block">
                            <li class="dots">
                              <i class="bi gray bi-three-dots-vertical gray"></i>
                              <ul>
                                <li data-bs-toggle="modal"
                                    data-bs-target="#update_personal_language">
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
                        </div>
                        <p class="mb-0">Mother language</p>
                      </div>
                      <div class="value">
                        <div class="mb-0 d-flex align-items-center justify-content-between">
                          <span>English</span>
                          <ul class="dots-action cursor-pointer d-inline-block">
                            <li class="dots">
                              <i class="bi gray bi-three-dots-vertical gray"></i>
                              <ul>
                                <li data-bs-toggle="modal"
                                    data-bs-target="#update_personal_language">
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
                        </div>
                        <p class="mb-0">Fluent language</p>
                      </div>
                    </div>
                  </div>

                  <div class="one_variety" :name="words.education">
                    <div class="heading d-flex align-items-center justify-content-between">
                      <span class="normal fw-bold">{{ words.education }}</span>
                      <p class="mb-0">
                        <span class="blue mrl-half" data-bs-toggle="modal"
                              data-bs-target="#update_personal_education"><i class="bi bi-plus"></i></span>
                        <span><i class="bi bi-caret-down-fill"></i></span>
                      </p>
                    </div>
                    <div class="data">
                      <div class="value">
                        <div class="mb-0 ">
                          <div class="d-flex align-items-center">
                            <span class="mrl-1 big"><i class="bi bi-buildings"></i></span>
                            <div class="max-width">
                              <div class="d-flex align-items-center mb-0 max-width">
                                <span class="fw-bold small flex-auto">Elhenawy school</span>
                                <ul class="dots-action cursor-pointer d-inline-block">
                                  <li class="dots">
                                    <i class="bi gray bi-three-dots-vertical gray"></i>
                                    <ul>
                                      <li data-bs-toggle="modal"
                                          data-bs-target="#update_personal_education">
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
                              </div>
                              <p class="mb-0 gray">i learned at elhenawy school at zagazig</p>
                              <p class="mb-0 gray">V.good</p>
                              <p class="mb-0 small gray">22/2/2018 : 06/06/2022</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="one_variety" :name="words.skills">
                    <div class="heading d-flex align-items-center justify-content-between">
                      <span class="normal fw-bold">{{ words.skills }}</span>
                      <p class="mb-0">
                        <span class="blue mrl-half" data-bs-toggle="modal"
                              data-bs-target="#update_personal_skills"><i class="bi bi-plus"></i></span>
                        <span><i class="bi bi-caret-down-fill"></i></span>
                      </p>
                    </div>
                    <div class="data">
                      <div class="value">
                        <p class="mrl-half d-inline-block p-relative item-each-other" v-for="(i,index) in 8" :key="index">
                          <span>programming</span>
                          <span><i class="bi bi-x"></i></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="one_variety" :name="words.projects">
                    <div class="heading d-flex align-items-center justify-content-between">
                      <span class="normal fw-bold">{{ words.projects }}</span>
                      <p class="mb-0">
                        <span class="blue mrl-half" data-bs-toggle="modal"
                              data-bs-target="#update_personal_projects"><i class="bi bi-plus"></i></span>
                        <span><i class="bi bi-caret-down-fill"></i></span>
                      </p>
                    </div>
                    <div class="data">
                      <div class="value">
                        <div class="mb-0 d-flex align-items-center justify-content-between">
                          <span>Hospital project</span>
                          <ul class="dots-action cursor-pointer d-inline-block">
                            <li class="dots">
                              <i class="bi gray bi-three-dots-vertical gray"></i>
                              <ul>
                                <li data-bs-toggle="modal"
                                    data-bs-target="#update_personal_projects">
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
                        </div>
                        <p class="mb-0">some description about this project</p>
                        <a href="#">{{ words.visit }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="one_variety" :name="words.work_experience">
                    <div class="heading d-flex align-items-center justify-content-between">
                      <span class="normal fw-bold">{{ words.work_experience }}</span>
                      <p class="mb-0">
                        <span class="blue mrl-half" data-bs-toggle="modal"
                              data-bs-target="#update_personal_experience"><i class="bi bi-plus"></i></span>
                        <span><i class="bi bi-caret-down-fill"></i></span>
                      </p>
                    </div>
                    <div class="data">
                      <div class="value mb-2" v-for="i in 2">
                        <div class="d-flex align-items-center">
                          <img class="mrl-1" style="max-height: 60px" :src="'/images/companies/'+i+'.png'">
                          <div class="d-flex flex-wrap align-items-center justify-content-between max-width">
                           <span>Full stack</span>
                            <ul class="dots-action cursor-pointer d-inline-block">
                              <li class="dots">
                                <i class="bi gray bi-three-dots-vertical gray"></i>
                                <ul>
                                  <li data-bs-toggle="modal"
                                      data-bs-target="#update_personal_experience">
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
                            <p class="mb-0 w-100">22/2/2018 : 06/06/2022</p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="one_variety" :name="words.certificates">
                    <div class="heading d-flex align-items-center justify-content-between">
                      <span class="normal fw-bold">{{ words.certificates }}</span>
                      <p class="mb-0">
                        <span class="blue mrl-half" data-bs-toggle="modal"
                              data-bs-target="#update_personal_certificate"><i class="bi bi-plus"></i></span>
                        <span><i class="bi bi-caret-down-fill"></i></span>
                      </p>
                    </div>
                    <div class="data">
                      <div class="value">
                        <div class="row">
                          <div class="col-lg-6 col-12" v-for="i in 3">
                            <div class="image position-relative">
                              <img class="mb-2" src="https://filestore.community.support.microsoft.com/api/images/a726a54a-d0f4-4c73-b268-a3759e249fee?upload=true">
                              <ul class="dots-action top-3 position-absolute cursor-pointer d-inline-block">
                                <li class="dots">
                                  <i class="bi white bi-three-dots-vertical gray"></i>
                                  <ul>
                                    <li data-bs-toggle="modal"
                                        data-bs-target="#update_personal_experience">
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

    <update_personal_video></update_personal_video>

    <display_video></display_video>

    <update_personal_education></update_personal_education>

    <update_personal_experience></update_personal_experience>

    <update_personal_projects></update_personal_projects>

    <update_personal_language></update_personal_language>

    <update_personal_certificate></update_personal_certificate>

    <update_personal_skills></update_personal_skills>

  </section>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import JobComponent from "../../../components/JobComponent";
import Update_personal_data from "../../../components/Modals/candidate/update_personal_data";
import Update_personal_video from "../../../components/Modals/candidate/update_personal_video";
import Display_video from "../../../components/Modals/candidate/display_video";
import Update_personal_education from "../../../components/Modals/candidate/update_personal_education";
import Update_personal_experience from "../../../components/Modals/candidate/update_personal_experience";
import Update_personal_projects from "../../../components/Modals/candidate/update_personal_projects";
import Update_personal_language from "../../../components/Modals/candidate/update_personal_language";
import Update_personal_certificate from "../../../components/Modals/candidate/update_personal_certificate";
import Update_personal_skills from "../../../components/Modals/candidate/update_personal_skills";
import ProfilePersonalInfoComponent from "../../../components/ProfilePersonalInfoComponent";

import text_editor from "../../../mixins/text_editor";
export default {
  name: "candidate",
  components: {
    ProfilePersonalInfoComponent,
    Update_personal_skills,
    Update_personal_certificate,
    Update_personal_language,
    Update_personal_projects,
    Update_personal_experience,
    Update_personal_education, Display_video, Update_personal_video, Update_personal_data, JobComponent},
  data(){
    return{
      skills:['php','laravel','oop','design pattern','mysql']
    }
  },
  mixins:[WordsLang,text_editor],
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";


</style>
