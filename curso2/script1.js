/*
OBJETO
 - Uma coleção de dados e/ou funcionalidades
 - Podem ter propriedades e metodos
 */

 //criar objeto
 const user  = {
    //propriedades (caracteristicas)
    email: "marcio@teste.com",
    age: 41,
    name: {
        first_name: "Márcio",
        last_name: "Silva"
    },
    address: {
        street: "Estrada Itaquera Guaianases",
        number: "2001",
        city: "São Paulo",
        postal_code: "08420-000"
    },
    message: function(){
        console.log("Oi Mãrcio")
    }

 }
 console.log(user);

 //duas notações forma de chamar o objeto

 //Acessando propriedades e metodos usando a notação de ponto
 console.log(user.email);
 console.log(user.age);
 console.log(user.name.first_name);

//executar metodo do objeto
 user.message();


 // notação de colchetes
 console.log(user["email"]);
 console.log(user["age"]);
 console.log(user["name"]["first_name"]);
 user["message"]();