import entradaDados from "readline-sync";
let produtos = [
  {
    id: 1,
    nome: "Serenidade - Vela de Lavanda",
    quantidade: 10,
    preco: 49.9,
  },
  {
    id: 2,
    nome: "Paz Interior - Vela de Sândalo",
    quantidade: 8,
    preco: 59.9,
  },
  {
    id: 3,
    nome: "Meditação - Vela de Frankincense",
    quantidade: 12,
    preco: 69.9,
  },
  {
    id: 4,
    nome: "Descanso - Vela de Vanilha",
    quantidade: 15,
    preco: 39.9,
  },
  {
    id: 5,
    nome: "Vitalidade - Vela de Citrino",
    quantidade: 10,
    preco: 49.9,
  },
  {
    id: 6,
    nome: "Foco - Vela de Eucalipto",
    quantidade: 8,
    preco: 59.9,
  },
  {
    id: 7,
    nome: "Energia Pura - Vela de Bergamota",
    quantidade: 12,
    preco: 69.9,
  },
  {
    id: 8,
    nome: "Motivação - Vela de Canela",
    quantidade: 15,
    preco: 39.9,
  },
  {
    id: 9,
    nome: "Amor à Luz - Vela de Jasmim",
    quantidade: 10,
    preco: 59.9,
  },
  {
    id: 10,
    nome: "Paixão - Vela de Patchouli",
    quantidade: 8,
    preco: 69.9,
  },
  {
    id: 11,
    nome: "Intimidade - Vela de Sândalo",
    quantidade: 12,
    preco: 59.9,
  },
  {
    id: 12,
    nome: "Romantismo - Vela de Rosa",
    quantidade: 15,
    preco: 49.9,
  },
  {
    id: 13,
    nome: "Festividade - Vela de Limão",
    quantidade: 10,
    preco: 39.9,
  },
  {
    id: 14,
    nome: "Alegria - Vela de Flor de Laranjeira",
    quantidade: 8,
    preco: 49.9,
  },
  {
    id: 15,
    nome: "Comemoração - Vela de Canela",
    quantidade: 12,
    preco: 59.9,
  },
  {
    id: 16,
    nome: "Jubileu - Vela de Bergamota",
    quantidade: 15,
    preco: 69.9,
  },
];
let novoId = produtos.reduce((maxId, produto) => {
  return Math.max(maxId, produto.id);
}, 0);
let valorTotalativo = produtos.reduce((total, produto) => {
  return total + produto.quantidade * produto.preco;
}, 0);

// Declarei as funcionalidades para não precisar reescreve-las sempre
let funcionalidades = `1) Mostrar o estoque completo. 
2) Mostrar item e posição de estoque.
3) Adicionar novo produto ao estoque.
4) Atualizar a quantidade de um produto existente.
5) Calcular o valor total do estoque.
6) Remover produto do estoque.
7) Encerrar o programa`;

console.log("\n\n");
console.log("Velas aromáticas - Velas de Barros");
console.log("\n\n");
console.log(`Funcionalidades ↓↓`.padStart(26, ".").padEnd(34, "."));
console.log("\n");

let escolha; // Declaro a variavel escolha, para utilizar no "do"

do {
  // O programa fará ↓↓↓
  console.log(funcionalidades);
  console.log("\n");
  escolha = Number(
    entradaDados
      .question(
        `Digite a opção desejada:
`
      )
      .trim()
  );

  if (escolha >= 1 && escolha <= 7) {
    switch (escolha) {
      case 1:
        console.log("Relatório de estoque completo");
        for (let i = 0; i < produtos.length; i++) {
          let id_produto = produtos[i].id;
          let nome_produto = produtos[i].nome;
          let quantidade_produto = produtos[i].quantidade;
          console.log(`Id: ${id_produto}`);
          console.log(`Nome: ${nome_produto}`);
          console.log(
            `Quantidade disponivel em estoque: ${quantidade_produto}`
          );
          console.log("\n\n");
        }
        console.log("Deseja realizar outra tarefa?");
        console.log("\n");
        break;
      case 2:
        let verificar_outro_item; // Controla o loop de verificação de itens

        do {
          let id_informado = Number(
            entradaDados.question("Digite o Id do produto:\n").trim()
          );
          let indice_produto = id_informado - 1; // Conversão de id em indice
          console.log("\n");

          if (indice_produto >= 0 && indice_produto < produtos.length) {
            console.log(`Id: ${produtos[indice_produto].id}`);
            console.log(`Produto: ${produtos[indice_produto].nome}`);
            console.log(
              `Quantidade em estoque: ${produtos[indice_produto].quantidade}`
            );
            console.log("\n\n");
          } else {
            console.log("Produto não encontrado. Verifique o ID informado.");
            console.log("\n");
          }

          // Pergunta se o usuário deseja verificar outro item
          verificar_outro_item = Number(
            entradaDados
              .question(
                `Deseja verificar outro item?
                1) Sim
                2) Não\n`
              )
              .trim()
          );
          console.log("\n\n");
        } while (verificar_outro_item !== 2);

        console.log("Deseja realizar outra tarefa?");
        console.log("\n");
        break;
      case 3:
        break;
      case 4:
        console.log("Caso 4");
        break;
      case 5:
        console.log("\n\n");
        console.log(
          `Valor total de Estoque ativo é de R$${valorTotalativo},00 \n`
        );
        console.log("Deseja realizar outra tarefa?");
        console.log("\n");
        break;
      case 6:
        console.log("Caso 6");
        break;
      case 7:
        console.log("Aplicação encerrada.");
        break;
    }
  } else {
    console.log("\n");
    console.log("Digite uma opção valida");
    console.log("\n");
  } // O programa fará ↑↑
} while (escolha !== 7); //Enquanto a escolha não for 6 (Encerrar o programa)
