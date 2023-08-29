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
        sessionStorage.setItem('authenticated',true);
        document.cookie = "token="+e.data.data.token+"; expires=Thu, 01 Jan 3970 00:00:00 UTC; path=/;";
        document.cookie = "user_info="+JSON.stringify(e.data.data)+"; expires=Thu, 01 Jan 3970 00:00:00 UTC; path=/;";
      }
    }).finally(() => {
      commit('loader/updateLoaderMutation',false,{root:true});
    });
  },

  async deleteUserData(){
    console.log('delete user data');
    localStorage.removeItem('user_info');
    localStorage.removeItem('token');
    document.cookie = "token=; expires=Thu, 01 Jan 1990 00:00:00 UTC; path=/;";
    document.cookie = "user_info=; expires=Thu, 01 Jan 1990 00:00:00 UTC; path=/;";
    window.location = '/auth/login';
  },


  async validateAuthAction({state,commit,dispatch}){
    var data = new FormData();
    if(localStorage.hasOwnProperty('token')){
      data.append('token',localStorage.token);
    }
    return this.$axios.post('validate-user',data,{

    }).then((e)=>{
      if(e.status == 200){
        sessionStorage.setItem('authenticated',true);
      }
    }).catch((e)=>{
      dispatch('deleteUserData')
    })
  }

}
