/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-70px";
//     }
//     prevScrollpos = currentScrollPos;
// };

// Header scroll class
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $("#navbar").addClass("navbar-scrolled");
        $("#navbar").addClass("bg-dark");
    } else {
        $("#navbar").removeClass("navbar-scrolled");
        $("#navbar").removeClass("bg-dark");
    }
});

if ($(window).scrollTop() > 100) {
    $("#navbar").addClass("navbar-scrolled");
}

$(window).scroll(function() {
    var scrollTop = $(document).scrollTop();
    var anchors = $("body").find("section");

    for (var i = 0; i < anchors.length; i++) {
        if (
            scrollTop > $(anchors[i]).offset().top - 50 &&
            scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 50
        ) {
            $('nav ul li a[href="#' + $(anchors[i]).attr("id") + '"]').addClass(
                "active"
            );
        } else {
            $('nav ul li a[href="#' + $(anchors[i]).attr("id") + '"]').removeClass(
                "active"
            );
        }
    }
});