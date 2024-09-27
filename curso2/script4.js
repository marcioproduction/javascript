/*
OPERADOR DE COALECESCÊNCIA NULA (??)
Operador logico que retorna o seu oparador do lado direito quando o seu oparador do lado esquerdo é null
ou underfined. caso contrário, ele retorna o seu operador ao lado esquerdo
 */

const content1 = null
console.log(content1 ?? "Conteudo padrão")


const content2 = "Conteudo Cadastrado"
console.log(content2 ?? "Conteudo padrão")


const user = {
    name: "Márcio",
    picture: undefined //null ou undefined
}
// no exemplo caso não tenha um imagem 
console.log(user.picture ?? "sem imagem cadastrada")