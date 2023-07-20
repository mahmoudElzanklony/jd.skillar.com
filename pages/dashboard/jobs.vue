<template>
    <div class="dashboard mt-4">
      <div class="container">
        <div class="filter mb-3 position-relative">
          <h2 class="d-flex justify-content-between mb-3 align-items-center section-title-control d-sm-none">
            <span class="fw-bold blue">{{ words.filter_jobs }}</span>
            <span class="gray"><i class="bi bi-arrow-down-short"></i></span>
          </h2>
          <filteration-jobs-component :words="words"></filteration-jobs-component>
        </div>
        <div class="current_jobs">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12" v-for="(i,index) in 15" :key="index">
              <job-component
                title="Full stack"
                company_name="Algorithma"
                time="30M ago"
                id="1"
                :skills="skills"
                admin="yes"
                :controls="{view:words.view,edit:words.edit,delete:words.delete}"
                :show_details="words.open"
                img="/images/companies/1.png"
              ></job-component>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import JobComponent from "../../components/JobComponent";
import FilterationJobsComponent from "../../components/FilterationJobsComponent";
export default {
  name: "dashboard_jobs",
  layout:"admin",
  mixins:[WordsLang],
  components: {FilterationJobsComponent, JobComponent},
  data(){
    return {
      file_name:'jobs',
      skills:['php','laravel','oop','design pattern','mysql']

    }
  }
}
</script>

<style scoped>

</style>
