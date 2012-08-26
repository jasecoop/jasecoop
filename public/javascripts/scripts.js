function background() {

var i = 0;
var colours = ["blue"];

	$("body").mousemove(function(e){

		var x = i++;

		var random = colours[Math.floor(Math.random() * colours.length)];
		
		var pageCordX = e.pageX - 250;
		var pageCordY = e.pageY - 250;
		
		
		$("body").append("<div class='blur" + x + " blur'></div>")

		$('.blur' + x).css("top", pageCordY)
		$('.blur' + x).css("left", pageCordX)
		$('.blur' + x).addClass(random)
		$('.blur' + x).fadeOut(1000);


	});

}

function asideToggle() {

	$("article.content aside a").click(function(e) {

    	e.preventDefault();


    	if ($(".open").length) {

    		$("body").removeClass("open");
    		$(this).closest('aside').attr('style','bottom: -250px;');

    	}	else {

    		$("body").addClass("open");
    		$(this).closest('aside').attr('style','bottom: 0px;');

    	}

	});

}

function fixedAsideOpen() {

	var winTop = $(window).scrollTop();
	var halfWinTop = winTop / 2;

	$('article.content').each(function(){

		var xTop = $(this).offset().top;
		var xBottom = xTop + $(this).height();

		var xDiff = xTop - halfWin;



		if (xDiff <= winTop) {
			
			$(this).addClass('active');
			$(this).children('.info').attr('style','bottom: 0px;');
		} else {
			$(this).removeClass('active');
			$(this).children('.info').attr('style','bottom: -300px;');
		}

	});


}

function fixedAsideClosed() {

	var winTop = $(window).scrollTop();
	var win = $(window).height();
	var halfWin = win / 3;

	$('article.content').each(function(){

		var xTop = $(this).offset().top;
		var xBottom = xTop + $(this).height();

		var xDiff = xTop - halfWin;



		if (xDiff <= winTop) {
			
			$(this).addClass('active');
			$(this).children('.info').attr('style','bottom: -250px;');
		} else {
			$(this).removeClass('active');
			$(this).children('.info').attr('style','bottom: -300px;');
		}

	});

	

}



$(window).scroll(function(){
	
	if ($(".open").length){

		fixedAsideOpen();

	} else {

		fixedAsideClosed();

	}

});


function intro(){

	var h =  $(window).height(); 

	$(".intro").attr('style','height:' + h + 'px');

	$(".intro h1").fadeIn('slow');

	$(".intro h1").attr('style','line-height:' + h + 'px');

	$("body").attr('style','padding-top:' + h + 'px');

}


$(document).ready(function() {

  asideToggle();
  intro();

});
