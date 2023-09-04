<template>
  <div class="job_info current_page">
    <div class="header_shape pt-4 pb-4 position-relative">
      <div class="header_shape_2"></div>
      <div class="container">
        <h2 class="text-center fw-bold mb-4">
          {{ getJobItemGetter['name'] }}
        </h2>
        <p class="text-center gray">
          {{ getJobItemGetter['description'] }}
        </p>
      </div>
    </div>
    <div class="info mt-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-6 col-12 mb-2 mt-2">
               <div class="d-flex align-items-center justify-content-between">
                  <p class="mb-2 fw-bold">{{ words.details_position }}</p>
                  <div class="buttons">
                    <button
                            v-for="(btn,index) in words.buttons" :key="index"
                            :class="'btn-bk-primary d-inline-flex align-items-center mb-2 '+(index > 0 ? 'mrl-reverse-15':'')  "
                            :copy_target="btn['icon'] == 'bi bi-clipboard-check' ? true:false"
                            :data-bs-toggle="btn['icon'] == 'bi bi-share' ?'modal':''"
                            :data-bs-target="btn['icon'] == 'bi bi-share' ? '#shareModal':''"

                    >
                      <span class="p-relative mrl-1 " >{{ btn['name'] }}</span>
                      <span><i :class="'position-relative top-1'+btn.icon"></i></span>
                    </button>
                  </div>
               </div>
               <div class="data-table" v-if="words.job_features">
                  <table class="table table-bordered table-hover">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody v-for="(i,index) in Object.keys(words.job_features)" :key="index">
                       <tr>
                         <td>{{ words.job_features[i] }}</td>
                         <td>{{ getJobItemGetter[i] }}</td>
                       </tr>
                    </tbody>

                  </table>
               </div>

              <div class="job-data mt-3">
                 <div class="main-data mb-3" :id="i['link']" v-for="(i,index) in words.task_bar" :key="index">
                    <div class="main-data-header d-flex align-items-center justify-content-between mb-3">
                       <p class="mb-0 fw-bold" :link="i['link']">{{ i['name'] }}</p>
                       <div class="d-flex align-items-center">
                         <p class="mb-0 border-side cursor-pointer" @click="copy">
                           <span class="gray"><i class="bi bi-clipboard-check"></i></span>
                           <span class="gray">{{ words.copy }}</span>
                         </p>
                         <p class="mb-0 mrl-reverse-15 cursor-pointer" @click="show_more_less">
                           <span class="gray"><i class="bi bi-chevron-down position-relative top-3"></i></span>
                           <span class="gray">{{ words.show_less }}</span>
                         </p>
                       </div>
                    </div>
                    <div class="main-data-body">
                      <div class="mb-0" v-for="(item,index) in getJobItemGetter[i['link']]" :key="index">
                         <p class="mb-0 fw-bold">{{ item['title'] }}</p>
                         <p class="normal gray">{{ item['description'] }}</p>
                         <p class="normal gray"
                            v-if="item.hasOwnProperty('skill')">{{ item['skill']['title'] }}</p>
                        <p class="normal gray"
                           v-if="item.hasOwnProperty('skill')">{{ item['skill']['description'] }}</p>

                        <div class="skill d-flex justify-content-between" v-if="item.hasOwnProperty('skill')">
                          <div>
                            <span class="gray fw-bold mrl-half">{{ words.importance }} : </span>
                            <span class="gray">{{ item.importance }}</span>
                          </div>
                          <div>
                            <span class="gray fw-bold mrl-half">{{ words.mastery }} : </span>
                            <span class="gray">{{ item.importance }}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                 </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-2">
               <div class="side-bar h-100">
                  <ul>
                    <li v-for="(i,index) in words.task_bar"  :class="'mb-3 '+(index == 0 ? 'active':'')" :key="index">
                      <nuxt-link :to="'#'+i['link']">{{ i['name'] }}</nuxt-link>
                    </li>
                  </ul>
                  <button class="mt-5 btn btn-outline-primary w-100 hover-white" data-bs-toggle="modal"
                          data-bs-target="#feedback">
                    <span class="blue mrl-half position-relative top-1"><i class="bi bi-card-text"></i></span>
                    <span class="blue">{{ words['send_feedback'] }}</span>
                  </button>

               </div>
            </div>
          </div>
        </div>
    </div>
    <share-component></share-component>
    <send_feedback :title="words['send_feedback']"></send_feedback>

  </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import CopyContent from "../../mixins/CopyContent";
import GeneratePDF from "../../mixins/GeneratePDF";
import ShareComponent from "../../components/ShareComponent";
import {mapGetters,mapActions} from 'vuex';
import Send_feedback from "../../components/Modals/send_feedback";

export default {
  name: '_id',
  components: {Send_feedback, ShareComponent},
  mixins:[WordsLang,CopyContent,GeneratePDF],
  asyncData({store,route}){
     if(route.params){
       return store.dispatch('jobs/SpecificJob',route.params.id);
     }
  },
  async validate({ params}) {
    return !(isNaN(params.id));
  },
  data(){
    return {
      data: [],
      skills:['php','mysql','laravel'],
    }
  },
  computed:{
    ...mapGetters({
       'getJobItemGetter':'jobs/getItemJob',
    })
  },
  mounted() {
    var com = this;
    setTimeout(()=>{
      document.querySelector('.buttons button[copy_target=true]').addEventListener('click', function () {
        var copyBoxElement = document.querySelector('body');
        com.copy_content(copyBoxElement);
      })

      document.querySelector('.buttons button:nth-of-type(3)').addEventListener('click', function () {
         window.print();
      })

     /* document.querySelector('.buttons button:nth-of-type(4)').addEventListener('click', function () {
        com.generatePDF(document.querySelector('.job-data'),'job_description');
      })*/


      /*const doc = new jsPDF();

      doc.text("Hello world!", 10, 10);
      doc.save("job_definition.pdf");*/
    },2500);
  },
  methods:{
    show_more_less(){
      if($(event.target).parent().find('i').hasClass('bi bi-chevron-down')){
        $(event.target).parent().find('i').removeClass('bi bi-chevron-down').addClass('bi bi-chevron-up')
      }else{
        $(event.target).parent().find('i').removeClass('bi bi-chevron-up').addClass('bi bi-chevron-down')
      }
      console.log($(event.target).parentsUntil('.job-data').last());
      $(event.target).parentsUntil('.job-data').last().find('.main-data-body').slideToggle();
    },
    copy() {
      // Get the paragraph element
      var copyBoxElement = $(event.target).parentsUntil('.job-data').last().find('.main-data-body p')[0];
      this.copy_content(copyBoxElement);
    },
  },
  comments:{ShareComponent},
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
      transition: 0.5s all;
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
      &:hover{
        @extend .active;
      }
    }
  }
}

.buttons{
  button{
    border:1px solid $main_color;
    span{
      color:$main_color;
    }
  }
}

.job-data{
  .main-data{
    .main-data-header{
      background-color: $main_color_white_bk;
      padding: 8px;
      border-radius: 4px;
    }
  }
}

@media (max-width: 767px) {
  .info{
    .row{
      >div:first-of-type{
        order:2;
      }
    }
  }
}
</style>
