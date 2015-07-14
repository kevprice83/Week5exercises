function fetchCharacters () {
  var request = $.get('http://ironhack-characters.herokuapp.com/characters');

  function handleCharacters(characters) {

    characters.forEach(function (chr) {

      var characterItem = '<li>'+ chr.name + '</li>';

      $('.js-characters-list').append(characterItem);
    });
  };

  function handleError(xhr, code, errorMsg) {
    console.error('OH NO!!!', xhr, code, errorMsg);
  };

  request.done(handleCharacters);
  request.fail(handleError);
}

module.exports = fetchCharacters;