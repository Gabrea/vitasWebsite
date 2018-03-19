
$(document).ready(function(){
/*Object Fit start*/
    $(function () { objectFitImages() });
$(window).scroll(function(){

        var scrollPos = $(this).scrollTop();
        var transY = scrollPos / 4.5;
		$(".paramax").css('transform', 'translateY(-' + transY + 'px)');

        var transY3 = scrollPos / 3;
        $(".paramax2").css('transform', 'translateY(-' + transY3 + 'px)');

		var scrollPos2 = $(this).scrollTop();
        var transY2 = scrollPos2 / 4;
		$(".para").css('transform', 'translateY(-' + transY2 + 'px)');

        /* Check the location of each desired element */
       
     
});
	


   $(".inner__link a").on("click", function() {
        	$(".whitebox").toggleClass("show");
        	$(".menu-icon").toggleClass("open");

        });
        $(".menu-icon").on("click", function() {
        	$(".whitebox").toggleClass("show");
        	$(".menu-icon").toggleClass("open");
     
        });

  /*
		var slideCount = $('#slider li').length;
		var slideWidth = $('#slider li').width();
		var slideHeight = $('#slider li').height();
		

		var sliderUlWidth = slideCount * slideWidth;

			$('#slider').css({ width: sliderUlWidth });

		    $('.prev').click(function () {
		        $("#slider").css({"margin-left": + slideWidth}, 200);
		    });

		    $('.next').click(function () {
		        $("#slider").animate({"margin-left": - slideWidth}, 200);
		    });
*/


/*SHow hide hamburg menu*/
function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 50 > thisPos ) {
                $(this).addClass("fadeIn");
            }
            if (topOfWindow + windowHeight - 200 > 1200 ) {
                $(".hamburg").addClass("display");
                $(".logo-small").addClass("hide");
                $(".nav__menu").addClass("hide");
            }
            if (topOfWindow + windowHeight - 200 < 1200 ) {
                $(".hamburg").removeClass("display");
                $(".nav__menu").removeClass("hide");
                $(".logo-small").removeClass("hide");
            }
            if (topOfWindow + windowHeight - 200 > 1750 ) {
                $(".background").addClass("circle");
               
            }
            else {
                $(".background").removeClass("circle");
            }

            if (topOfWindow + windowHeight - 200 > 1050 ) {
                $(".background").addClass("up");
               
            }
            else {
                $(".background").removeClass("up");
            }
            if (topOfWindow + windowHeight - 200 > 3000 ) {
                $(".background").addClass("left");
               
            }
            else {
                $(".background").removeClass("left");
            }
            if (topOfWindow + windowHeight - 200 > 3500 ) {
                $(".background").removeClass("left");
                $(".background").removeClass("circle");
                $(".background").removeClass("half");
               
            }
            if (topOfWindow + windowHeight - 200 > 6000 ) {
                $(".background").addClass("half");
               
            }
            else {
                $(".background").removeClass("half");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
            showImages('.hide-me');
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
            showImages('.hide-me');
    });




/*slider */
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}




$(document).ready(function(){
    //must be outside of galleryslider events
    var slidercountgallery = 1;

$("#galleryslider .next").on('click', function(){ 
    var vpWidth = viewport().width;
    var documentwidth = vpWidth;
    var slidewidth = (vpWidth)*0.70;
    var marginleft = ((vpWidth)*0.70) + ((vpWidth)*0.05);


    var originalmargin = parseInt($("#galleryslider .inner").css("margin-left"), 10);
    var numberslides = $("#galleryslider .inner article").length;
    slidercountgallery++;
    var slidename = $(this).parent().attr("id");
    if(slidercountgallery <= numberslides -1){
    $("#galleryslider .inner").animate({"margin-left":"-="+marginleft+"px"});
    }
    else{
        slidercountgallery = numberslides-1;
    }
});

$("#galleryslider .prev").on('click', function(){ 
    var vpWidth = viewport().width;
    var documentwidth = vpWidth;
    var slidewidth = (vpWidth)*0.70;
    var marginleft = ((vpWidth)*0.70) + ((vpWidth)*0.05);
    

    var originalmargin = parseInt($("#galleryslider .inner").css("margin-left"), 10);
    var numberslides = $("#galleryslider .inner article").length;
    slidercountgallery--;
    var slidename = $(this).parent().attr("id");
    if(slidercountgallery >= 0){
    $("#galleryslider .inner").animate({"margin-left":"+="+marginleft+"px"});

    }
    else{
        slidercountgallery = 0;
    }
});
  
    var slidercounttestimonial = 1;

$("#testimonialslide .next").on('click', function(){ 
    var vpWidth = viewport().width;
    var documentwidth = vpWidth;
    var slidewidth = (vpWidth)*0.70;
    var marginleft = ((vpWidth)*0.70) + ((vpWidth)*0.05);
    var slidercountgallery = 1;

    var originalmargin = parseInt($("#testimonialslide .inner").css("margin-left"), 10);
    var numberslides = $("#testimonialslide .inner article").length;
    slidercounttestimonial++;
    var slidename = $(this).parent().attr("id");
    
    if(slidercounttestimonial <= numberslides -1){
    $("#testimonialslide .inner").animate({"margin-left":"-="+marginleft+"px"});
    }
    else{
        slidercounttestimonial = numberslides-1;
    }
});

$("#testimonialslide .prev").on('click', function(){ 
    var vpWidth = viewport().width;
    var documentwidth = vpWidth;
    var slidewidth = (vpWidth)*0.70;
    var marginleft = ((vpWidth)*0.70) + ((vpWidth)*0.05);
    var slidercountgallery = 1;

    var originalmargin = parseInt($("#testimonialslide .inner").css("margin-left"), 10);
    var numberslides = $("#testimonialslide .inner article").length;
    var slidercounttestimonial = 1;
    slidercounttestimonial--;
    var slidename = $(this).parent().attr("id");

    if(slidercounttestimonial >= 0){
    $("#testimonialslide .inner").animate({"margin-left":"+="+marginleft+"px"});

    }
    else{
        slidercounttestimonial = 0;
    }
});

window.onresize = function(event) {
    $("#galleryslider .inner").removeAttr('style');
    slidercountgallery = 1;
};

});




$('a.image-slide-anchor').click(function(e) {
    e.preventDefault();
});
























});