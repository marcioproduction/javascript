const user = {
    name: "Juliane",
    message: function () {
        //console.log(`Bom dia ${user.name}`)
        console.log(`Bom dia ${this.name}`)//melhor usar this (não funciona com arrow funcion)
    }
}
user.message();


//atualizar propriedade de objeto
user.name = "Clarice";
user.message();


//atualizar com colchetes propriedade de objeto
user["name"] = "Ana";
user.message();