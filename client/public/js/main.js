//DOM STUFF
//get to server side with AJAX
$(document).on('ready', function() {
  $('#success-message').hide();//note: css display none is better
  $('#error-message').hide();
  getPuppies();
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
    $('#results').html('');
    getPuppies();
  })
  .fail(function(jqXHR, err){
    $('#success-message').hide();
    $('#error-message')
      .html(jqXHR.responseJSON)
      .show();
  });
});

//UTILITIES
function getPuppies(){
  $.ajax({
    method: 'GET',
    url: '/api/v1/puppies',
    //dont need data because not passing in anything, only need to pass in when posting
  })
  .done(function(data){
    data.forEach(function(puppy){
      $('#results').prepend(
        '<p><a href="/gpuppy/'+puppy.puppyID+'">'+puppy.puppyName+'</a></p>');
    });
  });
  // .fail(function(jqXHR, err){
  //   console.log(err);
  // });
}


