"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 17,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}, {
  nome: 'Rodrigo',
  idade: 40,
  empresa: 'Google'
}]; // Retorna as idades dos usuários

var arrayIdades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(arrayIdades); // Retorna usuários com mais de 18 anos e que trabalham na Rocketseat

var newArr = usuarios.filter(function (usuario) {
  return usuario.idade >= 18 && usuario.empresa === 'Rocketseat';
});
console.log(newArr); // Retorna usuários que trabalham no Google

var _usuarios$find = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
}),
    nome = _usuarios$find.nome;

console.log(nome); // Dobra as idades dos usuários e retorna aqueles com no máximo 50 anos

var newAges = usuarios.map(function (usuario) {
  var newUser = _objectSpread({}, usuario);

  newUser.idade = newUser.idade * 2;
  return newUser;
});
var underFifty = newAges.filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(underFifty);
