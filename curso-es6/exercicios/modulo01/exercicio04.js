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
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
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

const usuario = {nome: 'Diego', idade: 23};

function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario));
