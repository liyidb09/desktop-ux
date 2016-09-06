// // foundation enable

$(document).foundation({
	
});

// mobile sub menu
$(window).resize(function(){
	 if($(window).width()<767){
	 	//$(".dropdown-menu").removeAttr('style');
	 	//$(".dropdown-menu").removeStyle('display');
		$(".submenu").click(function(e){
			e.preventDefault();

			$(this).toggleClass('active-submenu');
	        $(this).next().slideToggle();
	    });
	}

})
if($(window).width()<767){
	$(".submenu").click(function(e){
		e.preventDefault();
		$(this).toggleClass('active-submenu')
        $(this).next().slideToggle();
    });
}
$(".expand-social-links").click(function(){
	$(this).toggleClass('active-expanded')
	$(".social-logos").slideToggle();
});


// Tabs
$('.tab-content1').eq(0).css({'display':'block','visibility':'visible','height':'auto'});
$('.tab-menu li a').click(function(e){
	e.preventDefault();
	var currentAttrValue = $(this).attr('href');
	$('.tab-menu li').removeClass('active-tab');
	$(this).parent().addClass('active-tab');
	$('.tab-content1').fadeOut().css({'visibility':'hidden','height':'0','padding':'0'});
	$(currentAttrValue).fadeIn().css({'visibility':'visible','height':'auto'});

})
// Tab ending
$('.tab-content2').css({'display':'none'});
$('.tab-content2').eq(0).css({'display':'block','height':'auto'});
$('.tab-menu2 li a').click(function(e){
	e.preventDefault();
	var currentAttrValue = $(this).attr('href');
	$('.tab-menu2 li').removeClass('active-tab');
	$(this).parent().addClass('active-tab');
	$('.tab-content2').fadeOut().css({'display':'none','height':'0','padding':'0'});
	$(currentAttrValue).fadeIn().css({'display':'block','height':'auto'});

})

$('.team-main .tab-menu li').eq(1).find('a').trigger('click');
$('.tab-main-menu .tab-menu li').eq(2).find('a').trigger('click');
$('.tab-main-menu .tab-menu2 li').eq(3).find('a').trigger('click');
$('.tab-last-block .tab-menu li').eq(1).find('a').trigger('click');

$('.slider-block').slick();
$('.thumbnailimg').click(function(){
	var src=$(this).data('bigimage');
	$(this).parents('.slider-content').find('.mainimg').hide();
	
	//setTimeout(function(){
		$(this).parents('.slider-content').find('.mainimg').fadeIn();
		$(this).parents('.slider-content').find('.mainimg').attr('src',src);
	//},500)
	
})


// slider homev1 screen
$('.slider-v1screen, .slider-v1screen2').slick({

  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true

      }
    },
    {
      breakpoint: 979,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$(document).ready(function() {
	$(".toggle").click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(".right-block").slideToggle();
	});	
	$(window).resize(function(){
      var w = $(window).width();
      if(w > 320 && $('.right-block').is(':hidden')) {
          $('.right-block').removeAttr('style');
    }
});
	// hover funtion for hexagon
	$( ".hover-layer" ).hover(
	  function() {
	    $( this ).find( ".hexagon" ).addClass( "hexa-hover" );
	  }, function() {
	    $( this ).find( ".hexagon" ).removeClass( "hexa-hover" );
	  }
	);

	// animated method
	$("#animate").click(function(e){
	  e.preventDefault();
    //$(".header-nav-menu").slideToggle();
    $('.right-block').toggleClass("active");
  	$('.login-box').toggleClass("active");
    if($('.login-box').hasClass('active')){
        $(".login-box").removeClass('fadeOutUp').addClass('fadeInDown');
    }
    else
    {
       $(".login-box").removeClass('fadeInDown').addClass('fadeOutUp');
    }
});
});

//single slider
$('.single-item-slide-block').slick();


