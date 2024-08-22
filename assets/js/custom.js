$(document).ready(function () {
    "use strict";

    // Navbar Fixed
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#navbar_top').addClass("fixed-top");
                $('#navbar_top').removeClass("bg-transparent")
            } else {
                $('#navbar_top').removeClass("fixed-top");
            }
        });
    }

    // AOS
    AOS.init();
});