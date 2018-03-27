$(document).ready(function(){
	setTimeout(function(){
		$("#name").animate({opacity:1},"slow")
	},500);

	 $(".menu-icon").on('click',function(){
        $(".cemenu").animate({right:'0px'},300);
        $(".mask").show();
	 });

	 $(".close").on('click',function(){
	 	$(".cemenu").animate({right:'-296px'},300);
        $(".mask").hide();
	 })

	  $(".mask").on('click',function(){
	 	$(".cemenu").animate({right:'-296px'},300);
        $(".mask").hide();
	 })

	   $(window).on('load',function(){
	   	$(".all-mask").fadeOut(6000);
	    $(".txn").animate({borderTopWidth:'2px',borderBottomWidth:'2px'},1000);
	  })

	   $(".more").click(function(){
	   	$("html,body").animate(
	   		{scrollTop: $(".content").offset().top},{duration:500,easing:"swing"});
	   	  return false;
	   })
})