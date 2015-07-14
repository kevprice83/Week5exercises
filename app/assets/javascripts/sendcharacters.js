function onSubmit (event) {
  event.preventDefault();
  console.debug('submitted');

  var newCharacter = {
    name: $('#name').val(), 
    occupation: $('#occupation').val(),
    debt: $('#debt').val(),
    weapon: $('#weapon').val()
  };

  var request = $.post('http://ironhack-characters.herokuapp.com/characters', newCharacter);

  function onSaveSuccess (response) {
    console.debug('BOOM', response);
    window.location = ('/');
  }

  function onSaveFailure (err) {
    console.error(err.responseJSON);
  }

  request.done(onSaveSuccess);
  request.fail(onSaveFailure);

}

module.exports = onSubmit;

function(response) {
  console.log(response) // { hello: "world" }
}

console.log(xhr.responseText) // '{ "hello": "world" }'