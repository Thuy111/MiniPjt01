$(document).ready(function(){
  $('#question').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('#faq *').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});