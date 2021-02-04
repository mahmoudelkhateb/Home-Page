// @ts-nocheck
/*global $, alert, console*/
$(document).ready(function () {
  "use strict";

  //show & hide sidebar
  //sideBar
  $(".logo").on("click", function () {
    var fixedMenu = $(".sidebar");
    fixedMenu.toggleClass("show-side");
    if (fixedMenu.hasClass("show-side")) {
      fixedMenu.animate(
        {
          left: 0,
        },
        500
      );
      $('.footer').animate({
        bottom : 0
      },700)
    }
    $('.sidebar ul li .fa-times').click(function(){
      $('.sidebar').removeClass("show-side")
      $('.sidebar').animate({
        left:'-' + '300px'
      },500)
    })
    $('.sidebar ul li .fa-times').click(function(){
      $('.footer').animate({
        bottom:'-' + '61px'
      },500)
    })
  });
  $(".ask-me i").on("click", function () {
    var question = $(".ask-me");
    $(".ask-me i").toggleClass("fa-chevron-left fa-chevron-right");
    question.toggleClass("is-asked");
    if (question.hasClass("is-asked")) {
      question.animate(
        {
          right: 0,
        },
        500
      );
    } else {
      question.animate(
        {
          right: "-" + $('.ask-me').innerWidth()
        },
        500
      );
    }
  });
});
