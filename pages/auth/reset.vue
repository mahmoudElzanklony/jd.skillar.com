<template>
  <section class="auth current_page">
    <video src="/videos/bg.mp4" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"></video>
    <div class="auth-content">
      <div class="shape width-100-mobile"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7 mb-2">
            <div class="info text-center-mobile">
              <h2 class="mb-0 white big">Skillar</h2>
              <h2 class="white big">{{ words.for_every_one }}</h2>
              <p class="white">{{ words.be_member_of_our_community }}</p>
            </div>
          </div>
          <div class="col-md-5 mb-2">
            <div class="form-data">
              <form class="p-3">
                <div class="form-group mb-2 input-icon flex-wrap">
                  <label>{{ words.email }}</label>
                  <input class="form-control" name="email" required>
                  <span><i class="bi bi-envelope"></i></span>
                </div>
                <div class="form-group mb-4">
                  <input class="form-control btn btn-primary" type="submit" :value="words.send">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
export default {
  name: "reset",
  mixins:[WordsLang],
  methods:{

  },
  created() {
    console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

</style>
