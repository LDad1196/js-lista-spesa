// Aggiungere elementi nell'array
const lista = [
    "Pollo",
    "Carciofi",
    "Zucchine",
    "Pasta",
    "Carne",
    "Biscotti",
    "Latte",
    "Cereali"
];

const listaElement = document.querySelector("ul");

// Tramite l'array stampo gli elementi con il ciclo for
console.log("Gli elementi nel ciclo for sono:")
for (let i = 0; i < lista.length; i++) {
    
    const element = lista[i];
    console.log(i, element)

    listaElement.innerHTML += `<li>${element}</li>`

}

console.log("Apro ciclo in while");
let i = 0;
while (i < lista.length) {
    const element = lista[i];
    console.log(i, element);

    i++;
}

console.log("Contatore esistente ancora dopo il while: ", i);

let nuovoComponente = document.getElementById('new').value;

document.getElementById("lista").append("<li>" nuovoComponente "</li>")

listaElement.innerHTML += `<li>${nuovoComponente}</li>`; 