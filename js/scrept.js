$(function(){
    AOS.init({
        duration: 1000,
        offset: 180,
        // delay: 1000,
    });
    // console.log($(".rocket").offset().top)
    // Rocket
    $(window).scroll(function(){
        var rocket =$(this).scrollTop();
        var topValue = $(".rocket").offset().top
        if(rocket > topValue){
          $('.rocket').addClass('add_rocket');
        }
        else{
          $('.rocket').removeClass('add_rocket');
        }
    })

     $(window).scroll(function(){
        var roket =$(this).scrollTop();
        var sticky = $(".sticky_menu").offset().top
        if(roket == sticky){
          $('.sticky_menu').css("background","rgb(34, 0, 59) none repeat scroll 0% 0%")
        }
        else if(roket < sticky){
          $('.sticky_menu').css("background","transparent")
        }
    })

    

    $(document).on("click",".sticky_menu li",function(){
      $(this).addClass("active").siblings().removeClass("active");
    })


    // $('.navbar-toggler').click(function(){
    //   $('#small_device_menu').toggleClass('show_menu');
    // })

});

const menuBtn = document.querySelector('.menu-btn');
let menuList = document.querySelector('#small_device_menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
      $('#small_device_menu').toggleClass('show_menu');
      menuList.classList.add('show_menu');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menuList.classList.remove('show_menu');
  }
});