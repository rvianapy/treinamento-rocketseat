// REST / SPREAD


// 5.1

// A partir do array arr = [1, 2, 3, 4, 5, 6], defina
// uma variável 'x' que recebe a primeira posição do
// vetor e outra variável 'y' que recebe todo restante
// dos dados.

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


// Crie uma função que recebe inúmeros parâmetros 
// e retorna a soma de todos eles

function soma(...params) {
  return params.reduce((total, next) => total + next);  
}

console.log(soma(-1, 0, 1, 2, 3, 4, 5, 6, 7, 8)); // 35


// 5.2

// A partir do objeto a seguir crie uma variável 'usuario2'
// que contenha todos os dados do usuário porém com nome 
// 'Gabriel' e uma variável 'usuario3' que contenha todos
// os dados do usuário porém com cidade 'Lontras'
//

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario2);
console.log(usuario3);
