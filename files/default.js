jQuery.fn.Grid = function() {
    var containerWidth = $("#Container").width();
    var cellsPerRow = Math.floor(containerWidth / 240) / 1.6;
    var cellSize = Math.floor(containerWidth / Math.round(cellsPerRow));
    var cellMargin = $(this).outerWidth(true) - $(this).outerWidth();
    var w2Size = 2 * (cellSize - cellMargin) + cellMargin;
  
    $(this).width(cellSize - cellMargin);
    $(this).height(cellSize - cellMargin);
    $(".W2").width(w2Size);
    $(".H2").height(w2Size);
  
    $(".marquee").each(function() {
      var marqueeSpeed = $(this).width() * 28;
      var marqueeHeight = $(this).parents(".Cell").height();
  
      $(this).css("font-size", marqueeHeight);
      $(".marquee img").css("height", marqueeHeight / 1.4);
      $("p.Title").css("font-size", marqueeHeight / 8);
      $("span.Sub").css("font-size", marqueeHeight / 24);
      $(".BTN").css("font-size", marqueeHeight / 24);
  
      $(this).slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        variableWidth: true,
        speed: marqueeSpeed,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear"
      });
    });
  
    return this;
  };
  
  $(document).ready(function() {
    $(".Cell").Grid();
    $("#Container").isotope({
      itemSelector: ".Cell",
      layoutMode: "packery",
      percentPosition: true
    });
  });
  
  $(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function() {
      $(".Cell").Grid();
    }, 10);
  });
  
  $(".Hover").plate({
    perspective: 3000
  });
  
  $(".no-select").bind("dragstart", function(e) {
    event.preventDefault();
  });
  
  $(".Flip").click(function() {
    $(this).flip(true);
  });
  
  $(".Flip").flip({
    speed: "300",
    trigger: "tap"
  }).mouseleave(function() {
    $(this).flip(false);
  });