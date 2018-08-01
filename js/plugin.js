/*global $, document  */
$(document).ready(function () {
    "use strict";
    $('.btn').hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 500);
    }, function () {
        $(this).find('span').eq(0).animate({
            width: 0
        }, 300);
    });
    $('.more').click(function () {
        $(this).hide();
        $('.hide').slideDown();
    });
    $('.less').click(function () {
        $('.hide').fadeOut();
        $('.more').fadeIn();
    });
    $('.btn-send').click(function () {
        if ($('textarea.form-control').val() !== '') {
            $('.questions').append('<a>' + $('textarea.form-control').val() + '</a>');
        }
    });
    $('.btn-ans').click(function () {
        if ($('textarea.control').val() !== '') {
            $('.inner').append('<p> -' + $('textarea.control').val() + '</p>');
        }
    });
    $('.questions a').click(function () {
        $(this).children().fadeIn();
    });
    $('.inner span').click(function (e) {
        e.stopPropagation();
        $(this).parentsUntil('.popup').parent().fadeOut();
    });
    $(".gear-box").click(function () {
        "use strict";
        $(this).fadeOut(500);
        $(".option-box").animate({
            right: 0
        }, 500);
        $('.fa-angle-right').fadeIn(500);
    });
    $(".fa-angle-right").click(function () {
        "use strict";
        $(this).fadeOut(500);
        $(".option-box").animate({
            right: '-220px'
        }, 500);
        $('.gear-box').fadeIn(500);
    });
});