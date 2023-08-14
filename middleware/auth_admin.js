import cookie from "cookie";

export default (function({route,app,req,redirect}){

  if(route.path.split('dashboard')[1] != undefined){
    // this is dashboard
    var token = process.client ?
      localStorage.getItem('token'):cookie.parse(req.headers.cookie || '').token;
    if(!(token)){
      console.log(token);
       return redirect('/auth/login')

    }
  }
});
