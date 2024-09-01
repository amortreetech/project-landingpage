$(document).ready(function () {
    "use strict";

    // Navbar Fixed
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#navbar_top').addClass("fixed-top");
                $('#navbar_top').removeClass("navbar-light")
                $('#navbar_top').removeClass("bg-transparent")
            } else {
                $('#navbar_top').removeClass("fixed-top");
                $('#navbar_top').addClass("navbar-light")
            }
        });
    }

    // AOS
    AOS.init();

    $(function(){ 
        var navLink = $("#offcanvasNavbar");
        navLink.on("click", "a", null, function () {
            navLink.collapse('hide') ;
            $('.offcanvas-backdrop').hide();
        });
    });
});

