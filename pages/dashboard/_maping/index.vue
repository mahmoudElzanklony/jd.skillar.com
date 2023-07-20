<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3" v-if="words[dashboard_name]">
      {{ words[dashboard_name] }}
    </h1>
    <div class="container">
      <div class="filters mb-5">
        <div class="row">
          <div class="col" v-for="(c,index) in words[map_columns]" :key="index">
            <div class="form-group position-relative input-icon flex-wrap mb-2">
              <label>{{ c['name'] }}</label>
              <span><i class="bi bi-info-circle"></i></span>
              <input class="form-control" :name="c['input']" v-if="c['type'] == 'text'">
              <select class="form-control" :name="c['input']" required v-else>
                <option value="">{{ words['select_from_list'] }}</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group position-relative input-icon flex-wrap mb-2">
              <input type="submit" class="w-100 btn btn-primary position-relative mt-4 top-6" :value="words.filter">
            </div>
          </div>
        </div>
      </div>
      <table class="table table-hover table-stripped text-center table-responsive table-bordered" v-if="words[map_columns]">
        <thead>
        <tr>
          <td v-for="(column,index) in words[map_columns]" :key="index">
            {{  column['name'] }}
          </td>
          <td>
            {{ words.actions['name'] }}
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td v-for="(column,index) in words[map_columns]" :key="index">
            <span>test</span>
          </td>
          <td>
              <span v-tooltip="words.actions['edit']"
                    data-bs-toggle="modal"
                    data-bs-target=".modal"
                    class="mrl-1 cursor-pointer open-box-modal"><i class="bi bi-pencil-square"></i></span>

            <span v-tooltip="words.actions['delete']" class="red cursor-pointer">
                <i class="bi bi-trash remove-element delete"></i>
              </span>
          </td>
        </tr>
        </tbody>
      </table>

      <!-- Modal of insert of update data -->
      <div class="modal fade" id="update_personal_education" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" v-if="words['actions']">
                 {{ words['actions']['add'] +' '+ words['info'] }} {{ (map_columns == 'country_modal'?words['country']:words['city']) }}
              </h5>
              <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form v-if="words[map_columns]">
                <div class="form-group position-relative input-icon flex-wrap mb-2"
                     v-for="(c,index) in words[map_columns]" :key="index">
                  <label>{{ c['name'] }}</label>
                  <span><i class="bi bi-info-circle"></i></span>
                  <input class="form-control" :name="c['input']" v-if="c['type'] == 'text'">
                  <select class="form-control" :name="c['input']" required v-else>
                    <option value="">{{ words['select_from_list'] }}</option>
                  </select>
                </div>
                <div class="form-group position-relative input-icon flex-wrap mb-2">
                  <input class="btn btn-primary" type="submit" :value="words['actions']['save']">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import $ from 'jquery';
export default {
  name: "map",
  layout:"admin",
  mixins:[WordsLang],
  validate({params}){
    return ['countries','cities'].includes(params.maping);
  },
  data(){
    return {
      file_name:'dashboard_map',
      dashboard_name:this.$route.params.maping,
      name:'country',
      map_columns:'',
    }
  },
  mounted() {
    console.log(this.$route.params.maping);
    if(this.dashboard_name == 'countries'){
      this.map_columns = 'country_modal';
    }else{
      this.map_columns = 'city_modal';
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
table{
  border-radius: 8px;
  img{
    width: 200px;
  }
}
</style>

