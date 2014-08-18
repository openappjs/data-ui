var mercury = require('mercury');
var RCSS = require('rcss');

var GridUi = require('grid-ui');
var PersonUi = require('person-ui');

var LdUi = require('../');

RCSS.injectAll()

var people = [{
  id: "http://dinosaur.is#i",
  name: "Mikey Williams",
  email: "dinosaur@example.com",
  bio: "a human from planet earth",
}, {
  id: "http://api.enspiral.net/people/simon",
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

var data = people.map(function (person) {
  return PersonUi({
    person: person,
  }).state;
});

var ldUi = LdUi({
  select: {
    options: selectOptions,
    value: [],
  },
  data: data,
});

mercury.app(document.body, ldUi.state, LdUi.render);
