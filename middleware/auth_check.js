import cookie from "cookie";

export default function ({ store, redirect, route , req}) {

  if (process.client) {
    console.log("middleware from client side");
  }

  // Check if the user is authenticated
  let token = process.client ?
    localStorage.getItem('token'):cookie.parse(req.headers.cookie || '').token;

  let user_info = process.client ?
    localStorage.getItem('user_info'):cookie.parse(req.headers.cookie || '').user_info;

  if(process.client){
    if(!(sessionStorage.hasOwnProperty('authenticated'))){
      store.dispatch('auth/login/validateAuthAction');
    }

  }
  if (!(token && user_info)) {
    if(route.name == null || route.name.split('register')[1] != undefined){
      return redirect('/auth/register')
    }else {
      return redirect('/auth/login')
    }
  }

  if(route.path.indexOf('dashboard') >= 0){
    if(JSON.parse(user_info).role.name != 'admin'){
       return redirect('/')
    }
  }


  if((route.name == 'auth-login' || route.name == 'auth-register') && token && user_info){
    return redirect('/')
  }


}
