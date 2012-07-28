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


$(document).ready(function() {

    if ($('#content').hasClass('home')) {

	background();
	indexClick();

    }

});