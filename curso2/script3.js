/*
OPTIONAL CHAINING (?.) encadeamento opcional
Se a propriedade ou função chamada é nullsh (null or undefined),
a expressão retorna underfined em vez de gerar um erro

Útil ao explorar o conteúdo de um objeto quanto não existe
]garantia da existencia de determinadas propriedades obrigatórias
 */

const user = {
    id: 1,
    name: "Márcio Alves",
    /* address: {
         street: "Estrada Itaquera Guaianases 2001 - Apto 134B",
         city: "São Paulo", 
         geo: {
             latitude: 47.888,
             longitude: 17.4286
         },
    },
    /*message: function(){
        console.log(`Olá, ${this.name}`)
    }*/
}
//console.log(user.address.street);
console.log(user?.address?.street); //caso não exista a propriedade o sinal de ? aponta que é underfined

user.message?.();//caso não tenha a função "?." 