/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(allInView);
$(window).scroll(allInView);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



//function isScrolledIntoView(elem) {
//    var docViewTop = $(window).scrollTop();
//    var docViewBottom = docViewTop + $(window).height();
//
//    var offSetTop = $(elem).offset();
//    var elemTop = offSetTop.top;
//    var elemBottom = elemTop + $(elem).height();
//
//    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//}

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    return (elemTop >= 0) && (elemBottom <= window.innerHeight);

}
function allInView() {
    if (isScrolledIntoView($("#comp-java"))) {
        var doughnutData = [
            {
                value: 65,
                color: "#2c3e50"

            },
            {
                value: 35,
                color: "#1abc9c"
            }
        ];
        var cercle = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);
        $("#comp-java").set(cercle);
    }
    else cercle=null;


    if (isScrolledIntoView($(".page2"))) $(".page2").css("backgroundColor", "green");
    else $(".page2").css("backgroundColor", "#333");

    if (isScrolledIntoView($(".page3"))) $(".page3").css("backgroundColor", "yellow");
    else $(".page3").css("backgroundColor", "#222");

    if (isScrolledIntoView($(".page4"))) $(".page4").css("backgroundColor", "blue");
    else $(".page4").css("backgroundColor", "#111");

}