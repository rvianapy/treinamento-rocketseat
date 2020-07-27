"use strict";

// Converter as funções nos seguintes trechos de código em Arrow Functions
// 3.1
// arr.map(function(item) {
//   return item + 10;
// });
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr); // 3.2
// const usuario = {nome: 'Diego', idade: 23};
// function mostraIdade(usuario) {
//   return usuario.idade;
// }
// mostraIdade(usuario);

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade() {
  return usuario.idade;
};

console.log(mostraIdade());
