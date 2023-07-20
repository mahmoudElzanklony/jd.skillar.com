<template>
  <div class="chat current_page">
    <div class="container mt-4 mb-4">
      <div class="outer">
         <div class="outer-heading">
            <h2 class="mb-0">{{ words.messager }}</h2>
            <div class="d-flex justify-content-between">
              <p class="mb-0">
                <nuxt-link to="/chat?type=all" class="gray">{{ words.total_messages }}</nuxt-link>
                <nuxt-link to="/chat?type=all">420</nuxt-link> ,
                <nuxt-link to="/chat?type=unseen" class="gray">{{ words.unseen_messages }}</nuxt-link>
                <nuxt-link to="/chat?type=unseen">10</nuxt-link>
              </p>
              <nuxt-link to="#">{{ words.contact_support }}</nuxt-link>
            </div>
         </div>
         <div class="outer-body">
            <div class="col-lg-4">
              <div class="friends">
                <div class="form-group input-icon">
                  <input class="form-control" :placeholder="words.search_friend">
                  <span><i class="bi bi-search"></i></span>
                </div>
                <ul>
                  <li class="d-flex flex-wrap align-items-center cursor-pointer p-1" v-for="i in 5" :key="i">
                    <img src="/images/companies/1.png" class="mrl-1">
                    <div class="message_info">
                      <p class="mb-0 fw-bold">Algorithma</p>
                      <p class="gray">we want to make with you meeting to discuss some important things</p>
                    </div>
                    <span>3</span>
                    <strong>40M ago</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-8">
               <div class="chat-info">
                 <div class="chat-header p-1 d-flex align-items-center">
                    <img src="/images/companies/1.png" class="mrl-half">
                    <div>
                       <p class="fw-bold mb-0">Algorithma</p>
                       <p class="gray mb-0">last seen 12:40pm</p>
                    </div>
                 </div>
                 <div class="chat-body">
                    <div class="receiver d-flex align-items-center">
                       <img class="mrl-1" src="/images/companies/1.png">
                       <p class="mb-0 flex-auto">
                         <span v-tooltip="'12:40pm'">This is text from receiver put here any text you want</span>
                       </p>
                    </div>
                     <div class="receiver d-flex align-items-center">
                       <img class="mrl-1" src="/images/companies/1.png">
                       <p class="mb-0 flex-auto">
                         <span v-tooltip="'12:40pm'">This is text from receiver put here any text you want</span>
                       </p>
                     </div>
                    <div class="sender d-flex align-items-center">
                     <p class="mb-0 flex-auto">
                       <span v-tooltip="'12:40pm'">This is text from me put here any text you want</span>
                     </p>
                   </div>
                   <div class="receiver d-flex align-items-center">
                     <img class="mrl-1" src="/images/companies/1.png">
                     <p class="mb-0 flex-auto">
                       <span v-tooltip="'12:40pm'">This is text from receiver put here any text you want</span>
                     </p>
                   </div>
                   <div class="receiver d-flex align-items-center">
                     <img class="mrl-1" src="/images/companies/1.png">
                     <p class="mb-0 flex-auto">
                       <span v-tooltip="'12:40pm'">This is text from receiver put here any text you want</span>
                     </p>
                   </div>
                   <div class="sender d-flex align-items-center">
                     <p class="mb-0 flex-auto">
                       <span v-tooltip="'12:40pm'">This is text from me put here any text you want</span>
                     </p>
                   </div>
                 </div>
                 <div class="chat-footer">
                   <form class="position-relative form-has-submit-absolute">
                     <input class="form-control" :placeholder="words.your_message">
                     <input type="submit" class="btn btn-primary absolute-submit" :value="words.send">
                   </form>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
export default {
  name: 'best_companies',
  mixins:[WordsLang],
  data(){
    return {
      data: [],
      skills:['php','mysql','laravel'],
    }
  },
}
</script>

<style lang="scss">
@import "~style/variables";

.chat{
  .outer{
    border: 1px solid #dddddd;
    border-radius: 8px;
    .outer-heading{
      padding: 10px;
      border-bottom: 1px solid #dddddd;
      background-color: $main_color_more_white_bk;
    }
    .outer-body{
      display: flex;
      flex-wrap: wrap;
      .friends{
        padding: 5px;
        max-height: 500px;
        overflow: auto;
        ul{
          li{
            position: relative;
            &:not(:last-of-type){
              border-bottom: 1px solid #dddddd;
              >span{
                display: none;
              }
            }
            img{
              height: 60px;
              max-width: 60px;
              border-radius: 4px;
            }
            div{
              width:calc(100% - 111px);
              p{
                margin-bottom: 0px;
              }
            }
            >span{
              background-color: $main_color;
              color:white;
              padding: 3px 10px;
              border-radius: 4px;
            }
            >strong{
              font-weight: normal;
              position: absolute;
              color:$gray;
              font-size: $small;
              bottom: 4px;
            }
          }
        }
      }
      .chat-info{
        position: relative;
        height: 100%;
        .chat-header{
          img{
            width: 60px;
          }
          border-bottom: 1px solid #dddddd;
        }
        .chat-body{
          padding: 10px;
          max-height: 400px;
          overflow: auto;
          margin-bottom: 46px;
          >div {
            margin-bottom: 10px;
            p{
              position: relative;
              span{
                position: relative;
                padding: 3px 6px;
                border-radius: 4px;
                background-color: white;
                display: inline-block;
                border: 1px solid $main_color_white_bk;
              }
            }
            img {
              height: 40px;
              border-radius: 4px;
            }
          }
          .sender{
            span{
              background-color: $main_color_more_white_bk;
            }
          }
          .receiver{
            span::before{
              content: '';
              border: 1px solid transparent;
              border-right: 1px solid $main_color_white_bk;
              border-bottom: 1px solid $main_color_white_bk;
              width: 10px;
              height: 10px;
              background-color: white;
              position: absolute;
              top: 9px;
            }
          }
        }
        .chat-footer{
          position: absolute;
          bottom: 0;
          width: 100%;
          form{
            input:first-of-type{
              border-radius: 0px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .outer-body{
    >div{
      width: 100%;
    }
    >div:last-of-type{
      >div:first-of-type{
        border-top:1px solid #dddddd;
      }
    }
  }
}
</style>
