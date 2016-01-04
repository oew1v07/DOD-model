/*  ::

    :: Theme         : Talisman
    :: Theme URI     : http://funcoders.com/templates/Talisman

    :: File          : js/slider.js
    :: Name          : Revolution slider init script
    :: Version       : 1.1

:: */

$(function() {

    var revolution = {
        delay           : 5000,
        startheight     : 600,
        hideThumbs      : 10,

        touchenabled    : 'on',
        onHoverStop     : 'on',
        startwidth      : 1170,

        navOffsetHorizontal : 50,
        navOffsetVertical   : 300,

        minFullScreenHeight : '320',

        fullWidth           : 'on',
        videoJsPath         : 'js/library/slider-revolution/videojs/',
    };

    if ($('#page-slider').parent().hasClass('fc-full-screen')) {
        revolution.fullWidth = 'off';
        revolution.forceFullWidth = 'on';
        revolution.fullScreen = 'on';
    }

    $('#page-slider').revolution(revolution).bind('revolution.slide.onloaded', function (e, data) {
        $(this).parent().css({
            background  : 'transparent',
            height      : 'auto',
            overflow    : 'visible'
        }).children().addClass('created');

        var video = $('video', this);
        if (video.length) {
            $('video', this)[0].play();
        }
    });
});