$(document).ready(function(){
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
  
        let hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){

          window.location.hash = hash;
        });
      } 
    });
  });


  $(function () {
  $(document).scroll(function () {
      let $nav = $(".navbar-bg");
      let $navmenu = $(".bar")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navmenu.toggleClass('nav-scrolled', $(this).scrollTop() > $navmenu.height());

    });
  });
