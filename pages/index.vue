<template>
  <div class="welcome_home current_page">

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
  asyncData({store,route}) {

  },
  created() {
    this.$router.push('/jobs');
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
