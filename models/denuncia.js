class Denuncia {
  constructor(id, nome, email, cidade, rua, problema, descricao) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cidade = cidade;
    this.rua = rua;
    this.problema = problema;
    this.descricao = descricao;
  }
}

module.exports = Denuncia;
