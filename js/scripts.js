$(document).ready(function(){
  $("form").submit(function() {
    event.preventDefault();
    var colorInput = $('#color').val();
    var numberInput = parseInt($('#number').val());
    var cityInput = $('#city').val();
    var favThings = [colorInput, numberInput, cityInput]
    $('.output').text(favThings);
    $('#output').show();
  });
});
