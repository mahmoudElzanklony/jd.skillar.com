<template>
  <!-- Modal of update personal data -->
  <div class="modal fade" id="update_personal_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.update_data }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="variety_data mb-2">
              <div class="one_variety">
                <div class="heading d-flex align-items-center justify-content-between">
                  <span class="normal fw-bold">{{ words.personal_data }}</span>
                  <p class="mb-0">
                    <span><i class="bi bi-caret-down-fill"></i></span>
                  </p>
                </div>

                <div class="row p-2">
                  <div class="col-12 mb-2">
                    <div class="form-group position-relative input-icon flex-wrap">
                      <label>{{ words.username }}</label>
                      <span><i class="bi bi-person-circle"></i></span>
                      <input class="form-control">
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="form-group position-relative input-icon flex-wrap">
                      <label>{{ words.email }}</label>
                      <span><i class="bi bi-envelope"></i></span>
                      <input class="form-control">
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="form-group position-relative input-icon flex-wrap">
                      <label>{{ words.password }}</label>
                      <span><i class="bi bi-lock"></i></span>
                      <input class="form-control">
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="form-group position-relative input-icon flex-wrap">
                      <label>{{ words.country }}</label>
                      <span><i class="bi bi-arrow-down-short"></i></span>
                      <select class="form-control" name="country_id">
                        <option value="">{{ words.select_best_choice }}</option>
                        <option value="1" v-for="i in 10">egypt</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="form-group position-relative input-icon flex-wrap">
                      <label>{{ words.city }}</label>
                      <span><i class="bi bi-arrow-down-short"></i></span>
                      <select class="form-control" name="country_id">
                        <option value="">{{ words.select_best_choice }}</option>
                        <option value="1" v-for="i in 10">cairo</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="form-group position-relative input-icon flex-wrap">
                      <label>{{ words.address }}</label>
                      <span><i class="bi bi-geo-alt"></i></span>
                      <input class="form-control">
                    </div>
                  </div>
                </div>

              </div>
              <div class="one_variety">
                <div class="heading d-flex align-items-center justify-content-between">
                  <span class="normal fw-bold">{{ words.business_data }}</span>
                  <p class="mb-0">
                    <span><i class="bi bi-caret-down-fill"></i></span>
                  </p>
                </div>

                <div class="row p-2">
                  <div class="col-12 mb-2">
                    <label>{{ words.quick_description }}</label>
                    <textarea class="form-control editor"></textarea>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="file_upload mb-2">
                      <div>
                        <span class="mrl-1">{{ words.resume }}</span>
                        <span class="gray"><i class="bi bi-cloud-arrow-up"></i></span>
                      </div>
                      <input type="file" name="video" required>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div>
            <div class="mb-2">
                <div class="form-group position-relative input-icon flex-wrap">
                  <input class="btn btn-primary" type="submit" :value="words.save">
                </div>
            </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
export default {
  name: "update_personal_data",
  mixins:[WordsLang],
  data(){
    return {
      file_name:'modals/update_personal_data',
    }
  },
}
</script>

<style scoped>

</style>
