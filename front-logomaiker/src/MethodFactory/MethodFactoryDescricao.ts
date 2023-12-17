
  
  class MethodFactoryDescricao {
    private descricao: DescricaoCompleta | DescricaoSimples;
  
    constructor(...args: any[]) {
      if (args.length === 5) {
        this.descricao = new DescricaoCompleta(
          args[0],
          args[1],
          args[2],
          args[3],
          args[4]
        );
      } else if (args.length === 3) {
        this.descricao = new DescricaoSimples(args[0], args[1], args[2]);
      } else {
        throw new Error("Número de argumentos inválido.");
      }
    }
  
    getDescricao(): DescricaoCompleta | DescricaoSimples {
      return this.descricao;
    }
  }
  