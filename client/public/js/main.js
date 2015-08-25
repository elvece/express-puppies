
//get to server side with AJAX
$(document).on('ready', function() {
  $('#success-message').hide();//note: css display none is better
  $('#error-message').hide();

});

$('form').on('submit', function(event){
  event.preventDefault();

  var $puppyID = $('#puppy-id');
  var $puppyName = $('#puppy-name');
  var $puppyAge = $('#puppy-age');

  //have to add to entire collection, cant do a post request to a single instance
  $.ajax({
    method: 'POST',
    url: '/api/v1/puppies',
    data: {
      puppyID: $puppyID.val(),
      puppyName: $puppyName.val(),
      puppyAge: $puppyAge.val()
    }
  })
  .done(function(data){
    $puppyID.val('');
    $puppyName.val('');
    $puppyAge.val('');
    $('#error-message').hide();
    $('#success-message')
      .html(data.message)
      .show();
  })
  .fail(function(jqXHR, err){
    $('#success-message').hide();
    $('#error-message')
      .html('Something went wrong.')
      .show();
  });
});



