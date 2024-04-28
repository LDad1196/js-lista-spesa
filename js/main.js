// Aggiungere elementi nell'array
const list = [
    "Pollo",
    "Carciofi",
    "Zucchine",
    "Pasta",
    "Carne",
    "Biscotti",
    "Latte",
    "Cereali"
];

const listElement = document.querySelector("ul");

// Tramite l'array stampo gli elementi con il ciclo for
console.log("Gli elementi nel ciclo for sono:")
for (let i = 0; i < list.length; i++) {
    
    const element = list[i];
    console.log(i, element)

    listElement.innerHTML += `<li>${element}</li>`
}
