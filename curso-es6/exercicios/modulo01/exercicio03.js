// Converter as funções nos seguintes trechos de código em Arrow Functions

// 3.1

// arr.map(function(item) {
//   return item + 10;
// });

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(newArr);


// 3.2

// const usuario = {nome: 'Diego', idade: 23};
// function mostraIdade(usuario) {
//   return usuario.idade;
// }
// mostraIdade(usuario);


const usuario = {nome: 'Diego', idade: 23};
const mostraIdade = () => usuario.idade;
console.log(mostraIdade());


// 3.3

// const nome = "Diego";
// const idade = 23;

// function mostraUsuario(nome = 'Diego', idade = 18) {
//   return {nome, idade};
// }

// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

const nome = "Diego";
const idade = 23;

var mostraUsuario = () => ({nome, idade});
console.log(mostraUsuario());
mostraUsuario = () => nome;
console.log(mostraUsuario());


// 3.4

// const promise = function() {
//   return new Promise(function(resolve, reject) {
//     return resolve();
//   })
// }



// DESESTRUTURAÇÃO

// A partir do seguinte objeto:
//
// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//   }
// };

// 4.1

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis. No fim, deve ser possível fazer o seguinte:

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
//console.log(estado); // SC

const empresa = {
  nomeEmpresa: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

const {nomeEmpresa, endereco: {cidade, estado}} = empresa;

console.log(nomeEmpresa);
console.log(cidade);
console.log(estado);


// 4.2

// Na seguinte função:

// function mostraInfo(usuario) {
//   return `${usuario.nome} tem ${usuario.idade} anos.`;
// }

// mostraInfo({nome: 'Diego', idade: 23})

// Utilize a desestruturação nos parâmetros 
// da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:

// return `${nome} tem ${idade} anos.`;


function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario));
