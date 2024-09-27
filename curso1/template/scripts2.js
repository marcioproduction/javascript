let guests = document.querySelector("ul")
//inserindo elemento
let newGuest = document.createElement("li");
let guestName = document.createElement("span");
//inseriri class
newGuest.classList.add("guest")
guestName.textContent = "Bruno";


//append (insere depois) x prepend (insere antes) 
newGuest.append(guestName);

//guests.append(newGuest);
guests.prepend(newGuest);



//manupulando atributos

const input =  document.querySelector("input");

//setAttribute > primeiro nome do atributo depois valor
//input.setAttribute('placeholder', 'digite seu nome');


//remover atributo
input.removeAttribute("id");
