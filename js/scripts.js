$( document ).ready(function() {
    // SVG fallback
    // toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script#update
    !function () {
        function supportsSVG() {
            return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
        };
        if (supportsSVG()) document.documentElement.className += ' svg';
    }();

    //Super easy scroller
    $('.scroller').on("click", function () {
        var target = ($(this).attr('href'));
        $("html, body").animate({
            scrollTop: $(target).offset().top //- 20
        }, 400);
        return false;
    });
});
