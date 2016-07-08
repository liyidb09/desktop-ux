// // foundation enable

$(document).foundation({
	
});

// mobile sub menu

if($(window).width()<768){
	$(".submenu").click(function(){
		$(this).toggleClass('active-submenu')
        $(".dropdown-menu").slideToggle();
    });
};
$(".expand-social-links").click(function(){
	$(this).toggleClass('active-expanded')
	$(".social-logos").slideToggle();
});


// Tabs
$('.tab-content1').eq(0).css({'visibility':'visible','height':'auto'});
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

$('.tab-menu li').eq(1).find('a').trigger('click');


$('.slider-block').slick();
$('.thumbnailimg').click(function(){
	var src=$(this).data('bigimage');
	$(this).parents('.slider-content').find('.mainimg').hide();
	
	//setTimeout(function(){
		$(this).parents('.slider-content').find('.mainimg').fadeIn();
		$(this).parents('.slider-content').find('.mainimg').attr('src',src);
	//},500)
	
})






