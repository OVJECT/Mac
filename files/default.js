//minify하기
jQuery.fn.Grid = function () {
    var CSZ = $("#Container").width();
    var MTH = Math.floor(CSZ / 240) / 1.6;
    var GRS = Math.floor(CSZ / Math.round(MTH));
    var GUT = $(this).outerWidth(true) - $(this).outerWidth();
    var BIG = (((GRS - GUT)) * 2) + GUT;
    $(this).width(GRS - GUT);
    $(this).height(GRS - GUT);
    $(".W2").width(BIG);
    $(".H2").height(BIG);
	$('.marquee').each( function () {
		var WTXT = $(this).width()*28;
        var FontSize = $(this).parents(".Cell").height();
        $(this).css("font-size", FontSize);
        $('.marquee img').css("height", FontSize/1.4);
        $("p.Title").css("font-size", FontSize/8);
        $("span.Sub").css("font-size", FontSize/24);
        $(".BTN").css("font-size", FontSize/24);
		$(this).slick({
			pauseOnHover: false,
			pauseOnFocus: false,
			draggable: false,
			variableWidth: true,
			speed: WTXT,
			infinite: true,
			autoplay: true,
			arrows: false,
			autoplaySpeed:0,
			cssEase: 'linear'
		});
    });
    return this;
};

$(document).ready(function () {
    $(".Cell").Grid();
    $('#Container').isotope({
        itemSelector: '.Cell',
        layoutMode: 'packery',
        percentPosition: true,
    });
});

$(window).resize(function () {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function () {
        $(".Cell").Grid();
    }, 10);
});

$('.Hover').plate({perspective: 3000});
$('.no-select').bind('dragstart', function(e) { event.preventDefault(); });

// $( ".Flow" ).mouseenter(function(){
//     var Flow =  $(this).width() / 2;
//     $( this ).stop().animate({
//     left:Flow,
//     },500, 'easeOutExpo');
// }).mouseleave(function(){
//     $( this ).stop().animate({
//         left:0,
//         },500, 'easeOutExpo' );
// });

$(".Flip").click(function(){
    $(this).flip(true);
});
$(".Flip").flip({
    speed: '300',
    trigger: 'manual'
  }).mouseleave(function(){
    $(this).flip(false);
});