<template>
  <section class="current_page profile published-jobs mt-4">
    <div class="container">
      <form class="mb-4">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="form-group input-icon flex-wrap">
              <label class="w-100">{{ words.job_time }}</label>
              <span><i class="bi bi-arrow-down-short"></i></span>
              <select class="form-control" name="country_id">
                <option>{{ words.select_best_choice }}</option>
                <option value="1" v-for="i in 5">Programming</option>
                <option value="1" v-for="i in 5">Teaching</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group input-icon flex-wrap">
              <label class="w-100">{{ words.job_type }}</label>
              <span><i class="bi bi-arrow-down-short"></i></span>
              <select class="form-control" name="country_id">
                <option>{{ words.select_best_choice }}</option>
                <option value="1" v-for="i in 5">Programming</option>
                <option value="1" v-for="i in 5">Teaching</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group input-icon flex-wrap">
              <input type="submit" class="btn btn-primary w-100 position-relative top-13" :value="words.filter">
            </div>
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-lg-3 mb-2">
          <job-component v-for="i in 6" class="mb-3"
                         title="Full stack"
                         company_name="Algorithma"
                         time="30M ago"
                         :full_url="'/profile/ahmed/published-jobs?id='+i"
                         :skills="skills"
                         :show_details="words.open"
                         img="/images/companies/1.png"
          ></job-component>
        </div>
        <div class="col-lg-9 mb-2">
          <div class="job_description">
            <div class="heading d-flex align-items-center justify-content-between mb-3">
               <img src="/images/companies/1.png">
               <div class="controls d-flex justify-content-between">
                 <p class="gray mrl-1 position-relative top-3">{{ new Date().toLocaleString() }}</p>
                 <nuxt-link class="mrl-half" to="/jobs/save?id=1">
                   <span><i class="bi bi-pencil-square"></i></span>
                 </nuxt-link>
                 <nuxt-link to="" data-bs-toggle="modal" data-bs-target="#shareModal">
                   <span><i class="bi bi-share"></i></span>
                 </nuxt-link>
               </div>
            </div>
            <div class="content">
              <h2 class="fw-bold">Fullstack engineer</h2>
              <p class="fw-bold gray mb-1">{{ words.job_requirement }}</p>
              <p class="mb-4 gray">Deploy, Configure, Manage and Troubleshoot large scale enterprise Microsoft Windows Environment running in Windows 2008, 2012, 2016, 2019. Install and configure and maintain server operating systems and repair server hardware Install and manage VMWare VSphere 5. x & 6. x Proactively maintain and develop all infrastructure technology to maintain a 24x7x365 uptime service Engineering of systems administration-related solutions for various project and operational needs Maintain best practices on managing systems and services across all environments Provide a point of escalation and support to the Service Desk Team. Participate in weekend maintenance activities, as required. Perform routine system administration duties. Monitor servers and troubleshoot problems.
              </p>

              <div class="dynamic_tabs">
                <div>
                  <ul class="row" :key="$route.fullPath">
                  <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center active" name="not_viewed_requests">
                    <span class="mrl-half mrl-reverse-15"><i class="bi bi-card-list"></i></span>
                    <div>
                      <p class="fw-bold mb-0">50</p>
                      <p class="mb-0">{{ words.not_viewed_requests }}</p>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center" name="top_best_requests">
                    <span class="mrl-half"><i class="bi bi-arrow-up"></i></span>
                    <div>
                      <p class="fw-bold mb-0">50</p>
                      <p class="mb-0">{{ words.top_best_requests }}</p>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center" name="accepted_requests">
                    <span class="mrl-half"><i class="bi bi-check-lg"></i></span>
                    <div>
                      <p class="fw-bold mb-0">50</p>
                      <p class="mb-0">{{ words.accepted_requests }}</p>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-6 p-2 d-flex align-items-center" name="rejected_requests">
                    <span class="mrl-half"><i class="bi bi-x-square"></i></span>
                    <div>
                      <p class="fw-bold mb-0">50</p>
                      <p class="mb-0">{{ words.rejected_requests }}</p>
                    </div>
                  </li>
                </ul>
                </div>
                <div class="content employees_applied">
                  <div class="job_info info d-flex align-items-center">
                    <div class="data d-block w-100">
                      <div class="value end-border-bottom p-2"  v-for="i in 6" :key="i">
                        <div class="d-flex align-items-center">
                          <nuxt-link tag="img" to="/profile/ahmed" class="mrl-1 cursor-pointer" src="/images/users/1.webp"></nuxt-link>
                          <div>
                            <div class="fw-bold mb-1 d-flex align-items-center justify-content-between">
                              <nuxt-link to="/profile/ahmed">
                                <span class="blue normal">Ahmed ali</span>
                              </nuxt-link>
                              <ul class="dots-action cursor-pointer d-inline-block">
                                <li class="dots">
                                  <i class="bi bi-three-dots-vertical gray"></i>
                                  <ul>
                                    <li data-bs-toggle="modal"
                                        data-bs-target="#rate_employee">
                                      <span class="gray"><i class="bi bi-person-vcard"></i></span>
                                      <span>{{ words.rate_employee }}</span>
                                    </li>
                                    <li>
                                      <span class="red"><i class="bi bi-trash"></i></span>
                                      <span>{{ words.delete_request }}</span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <p class="mb-0">
                              <span class="fw-bold">Full stack php developer</span>
                              <span class="gray d-block small">
                                {{ words.applied_at_date }} {{ new Date().toLocaleString() }}
                              </span>
                              <nuxt-link to="#">{{ words.show_resume }}</nuxt-link>
                            </p>
                            <p class="mb-0 gray small">{{ words.profile_match_skills }}</p>
                            <div class="progress">
                              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
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

    <!-----------modals--------- -->
    <share-component></share-component>
    <rate_employee></rate_employee>

  </section>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import JobComponent from "../../../components/JobComponent";
import $ from "jquery";
import ShareComponent from "../../../components/ShareComponent";
import Rate_employee from "../../../components/Modals/rate_employee";
export default {
  name: "published_jobs",

  components: {
    Rate_employee,
    ShareComponent,
    JobComponent
  },
  mounted() {
    $('#__nuxt').on('click','.dynamic_tabs ul li',function (){
      if(event.target.tagName.toLocaleLowerCase() == 'p'){
        $(event.target).parent().parent().addClass('active').siblings().removeClass('active')
      }else if(event.target.tagName.toLocaleLowerCase() == 'p'){
        $(event.target).parent().addClass('active').siblings().removeClass('active')
      }else{
        $(event.target).addClass('active').siblings().removeClass('active')
      }
    });
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
.job_description{
  padding: 10px;
  border:1px solid #dddddd;
  border-radius: 8px;
  .heading{
    img{
      height: 70px;
    }
    .controls{
      p{
        margin-bottom: 0px;
      }
      a{
        border: 1px solid #dddddd;
        border-radius:4px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-size: $normal;
        color:$gray;
      }
    }
  }
}
.dynamic_tabs{
  border: 1px solid #dddddd;
  border-radius: 8px;
  >div:first-of-type{
    overflow: hidden;
  }
  .job_info{
    img{
      max-height: 140px;
    }
  }
  .data{
    .value{
      div{
        >div{
          width:-webkit-fill-available;
        }
      }
      &:last-of-type{
        border-bottom: none;
      }
    }
  }
}

</style>
