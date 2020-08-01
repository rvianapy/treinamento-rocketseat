// OBJECT SHORT SYNTAX (sintaxe curta de objeto)


// 7

// Utilize a sintaxe curta de objeto no seguinte objeto:

// const nome = 'Diego';
// const idade = 23;

// const usuario = {
//   nome: nome,
//   idade: idade,
//   cidade: 'Rio do Sul',
// };

const nome = 'Diego';
const idade = 23;

const usuario = {
  nome,
  idade,
  cidade: 'Rio do Sul',
};

console.log(usuario);
