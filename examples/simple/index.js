var mercury = require('mercury');

var GridUi = require('grid-ui');
var PersonUi = require('person-ui');

var DataUi = require('../../');

var people = [{
  id: "http://dinosaur.is#i",
  type: "Person",
  name: "Mikey Williams",
  email: "dinosaur@example.com",
  bio: "a human from planet earth",
}, {
  id: "http://api.enspiral.net/people/simon",
  type: "Person",
  name: "Simon Tegg",
  email: "simon@example.com",
  bio: "such cool, very awesome, wow",
}];

var selectOptions = people.map(function (person) {
  return {
    id: person.id,
    title: person.name,
  };
});

var dataUi = DataUi({
  select: {
    options: selectOptions,
    value: [],
  },
  types: {
    Person: PersonUi,
  },
  data: people,
  viewAs: require('list-ui'), 
});

mercury.app(document.body, dataUi.state, DataUi.render);
