$(document).ready(function(){



$(".landnav__pro a").click(function(){
    scrollTop:0;
    var classname = $(this).attr('class');
    //alert("#"+classname);
    $('#p3').animate({
        scrollTop: $("#"+classname).offset().top
    }, 2000);

});

$(".landnav__pro a").click(function(){
    var classname = $(this).attr('class');
    //alert("#"+classname);
    $('#p4').animate({
        scrollTop: $("#"+classname).offset().top
    }, 2000);

});

jQuery(function($) {
    var options = {
      $menu: false,
      menuSelector: 'a',
      panelSelector: '> div',
      namespace: '.projects__film',
      onSnapStart: function(){},
      onSnapFinish: function(){},
      onActivate: function(){},
      directionThreshold: 50,
      slideSpeed: 200,
      easing: 'linear',
      offset: 0,
      navigation: {
        keys: {
          nextKey: false,
          prevKey: false,
        },
        buttons: {
          $nextButton: false,
          $prevButton: false,
        },
        wrapAround: false
      }
    };

    $('#p3 .projects').panelSnap(options);
  });

/*show and hide lightbox */
$('.playbutton').on('click', function(){
    var video = $(this).attr("data-video");
    $("#"+video).addClass("reveal");
});
$('.closevid').on('click', function(){
    $('.to-open').removeClass("reveal");
});

/*End video when lightbox closed*/
$('.closevid').click(function(){      
    $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
    });
});






function bar() {
var bar = $(".anim__bar");
var background = $(".background-index")
    setTimeout(function(){ bar.addClass("fadein")}, 0);

    setTimeout(function(){ bar.addClass("flicker");}, 200);
    setTimeout(function(){ bar.removeClass("flicker"); }, 1000);
    setTimeout(function(){ bar.addClass("flicker2");}, 1000);
    setTimeout(function(){ bar.removeClass("flicker2"); }, 1900);

    
    setTimeout(function(){ bar.addClass("bar1"); }, 1900);
    setTimeout(function(){ bar.addClass("bar2"); }, 4000);
    setTimeout(function(){ bar.addClass("bar3"); }, 6000);
    setTimeout(function(){ bar.addClass("fadeout")}, 9000);

    setTimeout(function(){ bar.addClass("flicker");}, 8400);
    setTimeout(function(){ bar.removeClass("flicker"); }, 8600);
    setTimeout(function(){ bar.addClass("flicker2");}, 8600);
    setTimeout(function(){ bar.removeClass("flicker2"); }, 8900);

    setTimeout(function(){ background.addClass("show");}, 9000);
    
}


function centerbox() {
var center = $(".center-box");
    setTimeout(function(){ center.addClass("fadein"); }, 0);
    setTimeout(function(){ center.removeClass("fadein"); }, 9000);
}

function intro() {
var anthony = $(".anim__intro");
    setTimeout(function(){ anthony.addClass("test"); }, 0);
    setTimeout(function(){ anthony.addClass("test2"); }, 2000);
}

function intro2() {
var director = $(".anim__intro2");
    setTimeout(function(){ director.addClass("test3"); }, 0);
    setTimeout(function(){ director.addClass("test4"); }, 2000);
}

function intro3() {
var cinematographer = $(".anim__intro3");
    setTimeout(function(){ cinematographer.addClass("test5"); }, 0);
    setTimeout(function(){ cinematographer.addClass("test6"); }, 7000);
    setTimeout(function(){ cinematographer.addClass("fadeout"); }, 2000);
}
centerbox();
bar();
setTimeout(intro, 2000);
setTimeout(intro2, 4000);
setTimeout(intro3, 6000);



});
