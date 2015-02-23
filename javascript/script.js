function slideSwitch() {
    var $active = $('#slideshow img.active');
 
    if ( $active.length == 0 ) $active = $('#slideshow img:last');
 
    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow img:first');
 
    // uncomment the 3 lines below to pull the images in random order
 
     //var $sibs  = $active.siblings();
     //var rndNum = Math.floor(Math.random() * $sibs.length );
     //var $next  = $( $sibs[ rndNum ] );
 
    $active.addClass('last-active');
 
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(document).ready(function(){
    $('#timelinePhotos').fbAlbum({
        albumID: '302288106477795',
        thumbSize: 3,
        fullSize: 9
    });
    
    $('#weArePhotos').fbAlbum({
        albumID: '516088595097744',
        thumbSize: 3,
        fullSize: 9,
        limit: 24
    });

    $('ul.album li a').fancybox({
        helpers : {
            title : {
                type : 'inside'
            }
        }
    });

    $(".showMe").show();

    $("a.showYear").click(function() {
        $("p.hometown, p.major").hide();
        $("a.showHometown, a.showMajor").removeClass("selected");
        $("p.year").show();
        $("a.showYear").addClass("selected");
    });

    $("a.showMajor").click(function() {
        $("p.year, p.hometown").hide();
        $("a.showHometown, a.showYear").removeClass("selected");
        $("p.major").show();
        $("a.showMajor").addClass("selected");
    });

    $("a.showHometown").click(function() {
        $("p.year, p.major").hide();
        $("a.showYear, a.showMajor").removeClass("selected");
        $("p.hometown").show();
        $("a.showHometown").addClass("selected");
    });

    setInterval( "slideSwitch()", 5000 );
});