import formValidation from '/validation/formValidation';
export const state = () => ({
  user_info: {}
})

export const mutations = {
  InitializeData(state,payload){
    state.user_info = payload;
  }
}


export const actions = {
  async loginAction({ state,commit }) {
    let router = this.$router;
    var target = event.target;
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.post('login',new FormData(target)).then((e)=>{
      console.log(e.data);
      formValidation(e.data,target,'/',true);
      if(e.data.status == 200){
        window.location = '/';
      }
      if(e.data.status == 200){
        commit('InitializeData',e.data.data);
        localStorage.setItem('user_info',JSON.stringify(e.data.data));
        localStorage.setItem('token',e.data.data.token);
        document.cookie = "token="+e.data.data.token+"; expires=Thu, 01 Jan 3970 00:00:00 UTC; path=/;";
      }
    }).finally(() => {
      commit('loader/updateLoaderMutation',false,{root:true});
    });
  },

}
