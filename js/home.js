
$(document).ready(function () { 
	// $("#partner_m .partner_img").mouseenter(function () {  
	// 	$(this).siblings().show() 
	// 	$(this).siblings().find('div').slideDown() 
	// 	$(this).addClass('hoverAct') 
	// });
	// $("#partner_m .partner_img").mouseleave(function () { 
	// 	$(this).siblings().hide()  
	// 	$(this).siblings().find('div').hide()  
	// 	$(this).removeClass('hoverAct') 
	// });
	$("#up").click(function () {
		// $("#scroll_b").hide("800");
		// $("#scroll_a").show("1000");
		$('#partner .point2').removeClass('point_act')
		$('#partner .point1').addClass('point_act')
	});
	$("#down").click(function () {
		// $("#scroll_a").hide("800");
		// $("#scroll_b").show("1000");
		$('#partner .point1').removeClass('point_act')
		$('#partner .point2').addClass('point_act')
	});

	$("#daily_up").click(function () {
		$("#daily_b").hide("800");
		$("#daily_a").show("1000");
		$('#daily .point2').removeClass('point_act')
		$('#daily .point1').addClass('point_act')
	});
	$("#daily_down").click(function () {
		$("#daily_a").hide("800");
		$("#daily_b").show("1000");
		$('#daily .point1').removeClass('point_act')
		$('#daily .point2').addClass('point_act')
	});
	// $("#daily_m .daily_img").mouseenter(function () {
	// 	// $(this).siblings().removeClass('ishide')
	// 	$(this).siblings().animate( {height:'toggle'});
	// 	$(this).addClass('hoverAct')
	// });
	// $("#daily_m .daily_img").mouseleave(function () {
	// 	// $(this).siblings().addClass('ishide')
	// 	$(this).siblings().animate( {height:'toggle'});
	// 	$(this).removeClass('hoverAct')
	// });


	// $(".daily_img").mouseenter(function () {  
	// 	$(this).siblings().show() 
	// 	$(this).siblings().find('div').slideDown() 
	// 	$(this).addClass('hoverAct') 
	// });
	// $(".daily_img").mouseleave(function () { 
	// 	$(this).siblings().hide()  
	// 	$(this).siblings().find('div').hide()  
	// 	$(this).removeClass('hoverAct') 
	// });


	$("#Wechat").mouseenter(function () {
		$('.code_pc').fadeIn() 
	});
	$("#Wechat").mouseleave(function () { 
		$('.code_pc').fadeOut() 
	});
	
 

	$("#jian_act").click(function () {
		$("#fan").fadeToggle() 
		$("#en").fadeToggle() 
	});

 


	$("#tofounder").click(function () {  
		$("html,body").animate({scrollTop:$("#founder").offset().top},1000)
	});
	$("#toarea").click(function () {  
		$("html,body").animate({scrollTop:$("#area").offset().top},1000)
	});
	$("#todaily").click(function () {  
		$("html,body").animate({scrollTop:$("#daily").offset().top},1000)
	});
	$("#tocontact").click(function () {  
		$("html,body").animate({scrollTop:$("#contact").offset().top},1000)
	});
	$("#topartner").click(function () {  
		$("html,body").animate({scrollTop:$("#partner").offset().top},1000)
	});
	 
	
	$(".fan").click(function () {
		$(".fan").hide();
		$(".jian").show();
	});
	$(".jian").click(function () {
		$(".jian").hide();
		$(".fan").show();
	});



	$("#nav_right_m a").click(function () {
		$("#toggleNav").hide()
		$('body').removeClass('wh100')
	});
	$("#close_btn").click(function () {
		$("#toggleNav").hide()
		$('body').removeClass('wh100')
	});
	$("#menubtn").click(function () {
		$("#toggleNav").show()
		$('body').addClass('wh100')
	});

	$(".toShow").click(function () { 
		$('.founder_text_a').removeClass('hide_m')
		$('.toShow').addClass('hide_m')
		$('.tohide').removeClass('hide_m')
	});
	$(".tohide").click(function () { 
		$('.founder_text_a').addClass('hide_m')
		$('.tohide').addClass('hide_m')
		$('.toShow').removeClass('hide_m')
	});
	
	
});


// 滚动条距离顶部的距离
$(window).scroll(function () {
	$('.sizeAct span').addClass('notshow')
	if ($(window).scrollTop() >= 300) {
		$("#nav").addClass('nav_act')
	} else {
		$("#nav").removeClass('nav_act')

	}
});