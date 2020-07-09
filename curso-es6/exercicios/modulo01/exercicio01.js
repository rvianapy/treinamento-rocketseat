class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    if(this.admin == true){
      return true;
    } else {
      return false;
    }
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super();

    this.email = email;
    this.senha = senha;
    this.admin = true;
  }
}

const Usuario1 = new Usuario("usuario@email.com", "senha123");
console.log(Usuario1);
console.log(Usuario1.isAdmin());

const Admin1 = new Admin("admin@email.com", "pwd123");
console.log(Admin1);
console.log(Admin1.isAdmin());