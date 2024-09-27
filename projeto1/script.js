//cotação de hoje
const USD = 5.44;
const EUR = 6.08;
const GBP = 7.29;
//elementos form
const form =  document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
//elementos footer
const description = document.getElementById("description");
const result = document.getElementById("result");


// manipulando o input amout para recebre somento numeros
amount.addEventListener("input", () =>{
    const hasChacactersRegex = /\D+/g  //pegar apenas numeros
    amount.value = amount.value.replace(hasChacactersRegex, ""); //substiturir numeros por nada
});

// capiturando evento submit (enviar) do form
form.onsubmit = (event) =>{
    event.preventDefault (); //
    switch (currency.value){
        case "USD":
        convertCurrency(amount.value, USD, "US$");
        break;

        case "EUR":
        convertCurrency(amount.value, EUR, "€");
        break;

        case "GBP":
        convertCurrency(amount.value, GBP, "£");
        break;
    }
}


// converter moeda
function convertCurrency(amount, price, symbol){
    console.log (amount, price, symbol);

    try{
        // Exibir cotação da moeda selecionada
        description.textContent = `${symbol} 1  = ${formatCurrentBRL(price)}` 
        
        let total = amount + price; //calculta total
        result.textContent = `${total} Reais`; // mostra total
        total = formatCurrentBRL (total).replace("R$", "");

        
        //add class e mostar footer
        footer.classList.add("show-result");
    }catch{
        footer.classList.remove("show-result");
        console.log(error);
        alert("Não foi possivel converter, tente mais tarde");
    }
}

//formatar para reais Brasil
function formatCurrentBRL (value){
    //fonverte para numeros -> tolocale converte para real do Brasil
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}