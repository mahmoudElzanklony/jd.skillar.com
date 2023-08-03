import CurrentPageDetectPaginate from "../../plugins/CurrentPageDetectPaginate";

export const state = () => ({
  data: [],
  item:{},
  total:0,
  status:true
})

export const getters = {
  getData(state) {
    return state.data
  },
  getTotal(state){
    return state.total;
  },
  getItemJob(state){
    return state.item;
  }
}

export const mutations = {
  SetTotal(state,payload){
    state.total = payload;
  },
  SetItemJob(state,payload){
     state.item = payload;
  },
  ChangeStatus(state,payload){
     state.status = payload;
  },
  EmptyData(state){
    state.data = [];
  },
  InitializeData(state,payload){
     state.data = payload;
  },
  UpdateData(state,payload){
    if(payload.length > 0) {
      state.data = [...state.data, ...payload]
    }
  },
}

export const actions = {
  async allJobsAction({ state,commit},payload = []) {
    commit('loader/updateLoaderMutation',true,{root:true});
    if(Object.keys(payload).length > 0 && payload.hasOwnProperty('empty')){
      commit('EmptyData');
      commit('ChangeStatus',true);
    }

    var page = CurrentPageDetectPaginate(payload);

    if(state.status) {
      return this.$axios.post('jobs/names' + page, payload).then((e) => {
        commit('UpdateData', e.data.data);
        commit('SetTotal',e.data.meta.total);
        if(e.data.data.length == 0){
           commit('ChangeStatus',false);
        }
      }).finally(() => {
        commit('loader/updateLoaderMutation', false, {root: true});
      });
    }else{
      commit('loader/updateLoaderMutation', false, {root: true});
    }
  },
  async SpecificJob({commit},payload){
    commit('loader/updateLoaderMutation', true, {root: true});
    return this.$axios.get('jobs/' + payload).then((e) => {
       console.log(e.data);
        commit('SetItemJob',e.data.data)
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },
  async getJobsByName({commit},payload){
    return this.$axios.post('jobs/names',payload).then((e) => {
      commit('InitializeData', e.data.data);
      commit('ChangeStatus',true);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  }
}
