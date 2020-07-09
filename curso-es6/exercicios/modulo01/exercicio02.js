const usuarios = [
  {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
  {nome: 'Gabriel', idade: 18, empresa: 'Rocketseat'},
  {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
];

const arrayIdades = usuarios.map(usuario => usuario.idade);

console.log(arrayIdades);