
export default {
  data(){
    return {
      current_position:0,
      current_page:2,
      action_path:'',
    }
  },
  methods:{

  },
  mounted(){
    var com = this;
    setTimeout(()=> {
      if ($('#__nuxt').find('.infinite_scroll').length > 0) {
        $(window).scrollTop(0)
        this.action_path = $('#__nuxt').find('.infinite_scroll').attr('action_path');
        var max_scroll = window.scrollMaxY; // infinite_scroll_form
        $(window).on('scroll', function () {
          var data = new FormData($('#__nuxt').find('.infinite_scroll_form')[0]);
          if ($(window).scrollTop() > com.current_position && $(window).scrollTop() - com.current_position >= 100) {
            com.current_position = $(window).scrollTop();
            console.log(com.action_path);
            if (com.action_path != '') {
              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
              data.append('page', com.current_page);
              com.$store.dispatch(com.action_path, data);
              com.current_page++;
            }
          }
        });
      }
    },500);
  }
}
