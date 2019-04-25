$(document).ready(function(){
	var window_height=$(window).height();
	var window_width=$(window).width();
	$('#bg').css('height', window_height+"px" );
	$("#h_text_absolute").css('left',window_width);
	$(".mini_divs_absolute").css('left',-window_width);
	$("#smol_div_left_absolute").css('left',-window_width);
	$("#smol_div_right_absolute").css('left',-window_width);
	$("#div_contener_right_absolute").css('left',window_width);
	$("#fix").css('opacity','0');
	$(window).load(function(){
		
		$("#h_text_absolute").addClass("animate");
	})
	$(window).scroll(function(){
		var scroll_value = $(window).scrollTop();
		if(scroll_value>200){
			$("#fix").css('opacity','1');
		}
		if(scroll_value<200){
			$("#fix").css('opacity','0');
		}
		if(scroll_value>150){
			$("#black_div").addClass("black_div");
			$(".menu_li").addClass("menu_li_black");
			$(".menu_open_ul").addClass("menu_open_ul_black");
		}
		if(scroll_value<150){
			$("#black_div").removeClass("black_div");
			$(".menu_li").removeClass("menu_li_black");
			$(".menu_open_ul").removeClass("menu_open_ul_black");
		}
		
		if(scroll_value > 500){
			$("#absolute_1").addClass("animate_1");
			$("#absolute_2").addClass("animate_2");
			$("#absolute_3").addClass("animate_3");
			$("#absolute_4").addClass("animate_4");
		}
		if(scroll_value>1000){
			$("#text_animate_1").addClass("animate_text_1");
			$("#text_animate_2").addClass("animate_text_2");
			$("#text_animate_3").addClass("animate_text_3");
			$(".text_div_absolute").animate({opacity:1},3000);
		}
		if(scroll_value>1500){
			$("#smol_div_left_absolute").addClass("animate_text_1")
			$("#smol_div_right_absolute").addClass("animate_text_2")
		}
		if(scroll_value>1650){
			$("#div_contener_right_absolute").addClass("animate_text_1")
		}
		if(scroll_value>1800){
			$("#contener_left_down_absolute").addClass("animate_text_4")
		}
		
		
	});
	$("#fix").click(function(){
			$("html, body").animate({
				scrollTop:0,
			},500)
		});
})



