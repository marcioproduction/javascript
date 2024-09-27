//console.log(document);
//console.log(document.title);

//selecionado id
/*
let guest = document.getElementById("guest-1");
console.log(guest);

let novoGuest = document.getElementById('guest-2');
console.log(novoGuest);
*/


//Selecionando por class
let guestClass = document.getElementsByClassName("guest");
console.log(guestClass)
//selecionando o primeiro .item(0)
console.log(guestClass.item(0));
console.log(guestClass[1]);

/*
// selecion por tag (elemento)
let elemento = document.getElementsByTagName("li");
console.log(elemento);
*/

//acessando query selector
//id
let idQuery = document.querySelector("#guest-1");
// primeiro da class
let classQuery = document.querySelector(".guest");
//todos da class
let classQuery2 = document.querySelectorAll(".guest");

console.log('Por Id: ', idQuery);
console.log('Por Classe', classQuery);
console.log('Por Classe', classQuery2);



/*********************** Manupular conteudo */

console.log("*******************************");

//selecionando elementos filhos
const campo1 = document.querySelector("#guest-1 span");
console.log(campo1.textContent);

console.log("*******************************");

//retorna o conteudo
const campoV2 = document.querySelector("#guest-1");
console.log(campoV2.textContent); // conteudo visivel e oculto
console.log(campoV2.innerText);  // visivel
console.log(campoV2.innerHTML); // retorna htmk
//alterar
campoV2.textContent = 'Márcio';


const input = document.querySelector("#name");
// inserrir class
input.classList.add("input-error");

//remover class 
input.classList.remove("input-error");

// alterar class
input.classList.toggle("input-error");


//criando css
let button = document.querySelector("button");
button.style.backgroundColor = "red";
