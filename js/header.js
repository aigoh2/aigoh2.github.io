$(document).ready(function(){
	$('.code').hover(function(){
		$(this).find('div').slideToggle(100);
	});
	var w = $(".code div img").width();
    var h = $(".code div img").height();
    var w2 = w + 40;
    var h2 = h + 40;
   
    $(".code div img").hover(function () {
        $(this).stop().animate({ height: h2, width: w2, left: "0px", top: "0px" }, 400);
    }, function () {
        $(this).stop().animate({ height: h, width: w, left: "0px", top: "0px" }, 400);
    });
});

