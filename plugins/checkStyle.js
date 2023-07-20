if(localStorage.getItem('lang') == null || localStorage.getItem('lang') == 'ar'){
    document.querySelector('.ar_external_style').setAttribute('href','/css/arabic.css');
}else{
  document.querySelector('.ar_external_style').setAttribute('href','/css/english.css');
}
