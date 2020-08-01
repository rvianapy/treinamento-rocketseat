"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// REST / SPREAD
// 5.1
// A partir do array arr = [1, 2, 3, 4, 5, 6], defina
// uma variável 'x' que recebe a primeira posição do
// vetor e outra variável 'y' que recebe todo restante
// dos dados.
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// Crie uma função que recebe inúmeros parâmetros 
// e retorna a soma de todos eles

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(-1, 0, 1, 2, 3, 4, 5, 6, 7, 8)); // 35
// 5.2
// A partir do objeto a seguir crie uma variável 'usuario2'
// que contenha todos os dados do usuário porém com nome 
// 'Gabriel' e uma variável 'usuario3' que contenha todos
// os dados do usuário porém com cidade 'Lontras'
//

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread(_objectSpread({}, usuario), {}, {
  endereco: _objectSpread(_objectSpread({}, usuario.endereco), {}, {
    cidade: 'Lontras'
  })
});

console.log(usuario2);
console.log(usuario3);
