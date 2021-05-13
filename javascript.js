const Computers = 
  [

    { "codProduto": 1234,
    
      "descricao": "Computador Dell Inspiron XS 12000 8Gb RAM 1 TB HD Intel i5 4g NVidia 1080",
    
      "preco": 3500.00,
    
      "qtdEstoque": 14,
    //49.000
      "disponivel": "sim",
    
      "emDestaque": "sim",
    
      "departamento" : {
    
      "idDepto": 987,
    
      "nomeDepto":"Informatica e acessórios"
    
      }
    
    },
    { "codProduto": 1235,
    
    "descricao": "Computador Dualcore 2gb de ram",
  
    "preco": 2500.00,
  
    "qtdEstoque": 975,
    //3.475
    "disponivel": "não",
  
    "emDestaque": "sim",
  
    "departamento" : {
  
    "idDepto": 987,
  
    "nomeDepto":"Informatica e acessórios"
  
    }
  
  },
  { "codProduto": 1236,
    
  "descricao": "Computador Dell Inspiron XS 12000 8Gb RAM 1 TB HD Intel i5 4g NVidia 1080",

  "preco": 1500.00,

  "qtdEstoque": 320,

  "disponivel": "sim",

  "emDestaque": "não",
//480.000
  "departamento" : {

  "idDepto": 987,

  "nomeDepto":"Informatica e acessórios"

  }

},
    
 ]


//1309


//Quantidade total de itens em estoque (somatória das quantidades de todos os produtos) 


/*
let totalQtd = {
  "qtdEstoque": 0
}

for (i in Computers){
  totalQtd["qtdEstoque"] += Number(Computers[i]['qtdEstoque']) | 0
}
console.log(totalQtd)

*/






//Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")
/*
let SomatoriaDestaque = Computers.filter((item) => {
  return item.emDestaque === "sim"
}
)
let sum = 0
for (const item of SomatoriaDestaque) {
  sum += item.qtdEstoque
}

console.log(sum)
*/






//Quantidade total de itens disponíveis (similar ao anterior)
/*
let SomatoriaDisponível = Computers.filter((item) => {
  return item.disponivel === "sim"
}
)
let sumDisponível = 0
for (const item of SomatoriaDisponível) {
  sumDisponível += item.qtdEstoque
}

console.log(sumDisponível)
*/

//Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque)

/*
const valorProdutos = Computers.map(qtd => qtd.qtdEstoque * qtd.preco)

let total = 0 
for (let i = 0; i < valorProdutos.length; i++) {
  total = total +valorProdutos[i]
  
}
*/






//Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele)
/*
const SomatoriaDep = Computers.filter((dep)=>{
  return dep.departamento.nomeDepto === "Informatica e acessórios"
})

let sumDep = 0
for (const item of SomatoriaDep) {
  sumDep += item.qtdEstoque
}
console.log(sumDep)
*/





//Valor total do inventário por departamento (similar ao item anterior)
/*
const SomatoriaDep = Computers.filter((dep)=>{
  return dep.departamento.nomeDepto === "Informatica e acessórios"
})

const Somatoria = SomatoriaDep.map(Computer => Computer.qtdEstoque * Computer.preco)

let total = 0 
for (let i = 0; i < Somatoria.length; i++) {
  total = total +Somatoria[i]
  
}
console.log(total)
*/





//Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens)

/*
const ticketTotal = Computers.map(item => item.qtdEstoque * item.preco )

let total = 0 
for (let i = 0; i < ticketTotal.length; i++) {
  total = total +ticketTotal[i]
  
}
console.log(total)

let SomatoriaEstoque = Computers.filter((item) => {
  return item
}
)
let sumEstoque = 0
for (const item of SomatoriaEstoque) {
  sumEstoque += item.qtdEstoque
}
console.log(sumEstoque)

const TicketMedio = total / sumEstoque

console.log(TicketMedio)

*/






//Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio)
/*
const somatoriaTicket = Computers.filter((dep)=>{
  return dep.departamento.nomeDepto === "Informatica e acessórios"
})

const valorTotal = somatoriaTicket.map(Computer => Computer.qtdEstoque * Computer.preco)

let totalEstoque = 0 
for (let i = 0; i < valorTotal.length; i++) {
  totalEstoque = totalEstoque +valorTotal[i]
  
}

let SomatoriaEstoque = Computers.filter((item) => {
  return item.departamento.nomeDepto === "Informatica e acessórios"
}
)
let sumEstoque = 0
for (const item of SomatoriaEstoque) {
  sumEstoque += item.qtdEstoque
}

const ticketMedioDep = totalEstoque / sumEstoque

console.log(ticketMedioDep)
*/








//Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens)


function departamentoCaro() {
  const produtos = new Map();
  for (product of Computers) {
      produtos.set(
          product.departamento.nomeDepto,
          Computers
              .filter(
                  p => p.departamento.nomeDepto === product.departamento.nomeDepto
              )
              .reduce((acc, cur) => acc + cur.preco, 0)
      );
  }
  console.log(produtos);
}
departamentoCaro()








//Produto mais caro da loja (bem como seu departamento)


//Produto mais barato da loja (bem como seu departamento)
