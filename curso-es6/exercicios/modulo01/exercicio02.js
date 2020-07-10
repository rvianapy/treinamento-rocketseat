const usuarios = [
  {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
  {nome: 'Gabriel', idade: 17, empresa: 'Rocketseat'},
  {nome: 'Lucas', idade: 30, empresa: 'Facebook'},
  {nome: 'Rodrigo', idade: 40, empresa: 'Google'},
];


// Retorna as idades dos usuários
const arrayIdades = usuarios.map(usuario => usuario.idade);

console.log(arrayIdades);


// Retorna usuários com mais de 18 anos e que trabalham na Rocketseat
const newArr = usuarios.filter(usuario => usuario.idade >= 18 && usuario.empresa === 'Rocketseat');

console.log(newArr);


// Retorna usuários que trabalham no Google
const {nome} = usuarios.find(usuario => usuario.empresa === 'Google');

console.log(nome);


// Dobra as idades dos usuários e retorna aqueles com no máximo 50 anos
const newAges = usuarios.map(usuario => {
  const newUser = {...usuario};
  newUser.idade = newUser.idade * 2;
  return newUser;
});

const underFifty = newAges.filter(usuario => usuario.idade <= 50);

console.log(underFifty);
