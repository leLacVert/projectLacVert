// document.getElementById('menu-toggle').addEventListener('click', function () {
//   var burger = document.getElementsByTagName('nav');

//   if (burger.classList.contains('active')) {
//     burger.classList.remove('active');
//   } else {
//     burger.classList.add('active');
//   }
// }, false);

$(document).ready(function () {
  $('#menu-toggle').click(function () {
    $('nav').toggleClass('active')
  })
  $('ul li').click(function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  })
})