$(function() {
  // All jQuery code goes here
  $('.dropdownMenu > li').hover(function() {
    $(this).children("ul").slideToggle(200);
  })
});