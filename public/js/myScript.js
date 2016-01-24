$(function(){
	localStorage.lang = localStorage.lang || "en";
	if(localStorage.lang == "en"){
		console.log("EN");
		$("#headerToggleLang").addClass("langCN");
	}
	else if(localStorage.lang == "cn"){
		console.log("CN");
		$("#headerToggleLang").addClass("langEN");
	}
	
	$("#headerToggleLang").on("click", function(){
		$logo = $("#headerToggleLang");
		if(localStorage.lang == "cn"){
			localStorage.lang = "en";
			location.reload();
		}
		else{
			localStorage.lang = "cn";
			location.reload();
		}
	});
	
	
	if($('.carousel').length > 0){
		$('.carousel').fadeIn('slow', function(){
			$('.fade').addClass('in');
		});
	}
	else{
			$('.fade').addClass('in');
	}
	
	$('.carousel').carousel({
        interval: 3000 //changes the speed
    });
	setTimeout(function(){	
		$("li.active > a").click(function(e){
			e.preventDefault();
		});
	}, 500);
	
	$(".serviceBlock").height($(".serviceBlock").width());
	$(window).resize(function(){
		$(".serviceBlock").height($(".serviceBlock").width());
		var $contactLogo = $(".contact_logo > img");
		if($contactLogo){
			$contactLogo.width("100%");
		}
	});
	
	$(".btnMediaToVideo").on("click", function(){
		$(".mediaToVideo").fadeOut(500,function(){
			$(".mediaToGallery").fadeIn(500);
		});
		$("#galleryTab").animate({
			opacity:0,
			left: -$("#galleryTab").width()
		}, 500, function(){
			$("#galleryTab").css("display", "none");
			$("#videoTab").css("display", "inline-block");
			$("#videoTab").animate({
				opacity: 1,
				right:0
			},500);
		});
	});
	
	$(".btnMediaToGallery").on("click", function(){
		$(".mediaToGallery").fadeOut(500,function(){
			$(".mediaToVideo").fadeIn(500);
		});
		$("#videoTab").animate({
			opacity:0,
			right: -$("#videoTab").width()
		}, 500, function(){
			$("#videoTab").css("display", "none");
			$("#galleryTab").css("display", "inline-block");
			$("#galleryTab").animate({
				opacity: 1,
				left: 0
			},500);
		});
	});
});

