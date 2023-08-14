<template>
  <!-- Modal of update personal data -->
  <div class="modal fade" id="job_info_save_box" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.show_all_info }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="list-types d-flex align-item-center justify-content-between mb-4" v-if="words['jobs_types_data']">
            <li v-for="(i,index) in Object.values(words['jobs_types_data'])"
                :key="index" :class="index == 0 ? 'active':''">{{ i }}
            </li>
          </ul>
          <div class="content" v-if="words['jobs_types_data']">
            <div :class="i" v-for="(i,index) in Object.keys(words['jobs_types_data'])" :key="index">
              <div class="data" v-if="i == 'main_info'">
                <div class="row" v-if="words['main_info_inputs']">
                  <div class="col-lg-6 col-12 mb-2" v-for="(d,index) in words['main_info_inputs']" :key="index">
                    <div>
                      <label>{{ d['name'] }} : </label>
                      <input class="form-control" :name="d['input']"
                             :type="d['type']" v-if="d['type'] == 'text'" :value="item != null ? item[d['input']]:''" required>
                      <textarea class="form-control" :name="d['input']" v-else-if="d['type'] == 'textarea'"
                                :value="item != null ? item[d['input']]:''" required>{{ item != null ? item[d['input']]:'' }}</textarea>
                      <select v-else-if="d['type'] == 'select'" class="form-control" :name="d['input']" required>
                        <option value="">{{ words['select_best_choice'] }}</option>
                        <option v-if="d.hasOwnProperty('toggle')" value="1"
                                :selected="item != null && item[d['input']] == 1">{{ words.active }}</option>
                        <option v-if="d.hasOwnProperty('toggle')" value="0"
                                :selected="item != null && item[d['input']] == 0">{{ words.disabled }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="data" v-else>
                <div class="row" >

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import WordsLang from "../../mixins/WordsLang";
export default {
  name: "job_info_save_box",
  props:['item'],
  mixins:[WordsLang],
  data(){
    return {
      file_name:'modals/update_personal_data',
    }
  },

}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
.modal-dialog{
  width:96%;
  max-width: 96%;
}
.modal{
  ul{
    border-bottom: 1px solid #ddd;
    padding-bottom: 17px;
    li{
      cursor: pointer;
      &:hover{
        @extend .active
      }
    }
    li.active{
      font-weight: bold;
      color:$blue;
    }
  }
  .content{
    >div:not(:first-of-type){
      display: none;
    }
  }
}
</style>
