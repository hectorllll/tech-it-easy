//Opdracht 2 - Elementen in de DOM plaatsen
//Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let result = 0;

for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold;
}
console.log(result);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const soldTvs = document.getElementById("container");

const soldTvsTitle = document.createElement('h3');

const soldTvsNumber = document.createElement("h4");

soldTvsTitle.textContent = "Aantal verkochte televisies";

soldTvsNumber.textContent = result;

soldTvsNumber.style.color = "green";

soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(soldTvsNumber);

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let resultsBuy = 0;

for (let i = 0; i < inventory.length; i++) {
    resultsBuy = resultsBuy + inventory[i].originalStock;
}
console.log(resultsBuy);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const boughtTvs = document.getElementById("container2");

const boughtTvsTitle = document.createElement('h3');

const boughtTvsNumber = document.createElement("h4");

boughtTvsTitle.textContent = "Aantal ingekochte televisies";

boughtTvsNumber.textContent = resultsBuy;

boughtTvsNumber.style.color = "blue";

boughtTvs.appendChild(boughtTvsTitle);
boughtTvs.appendChild(boughtTvsNumber);

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const stock = document.getElementById("container3");

const stockTitle = document.createElement("h3");

const stockNumber = document.createElement("h4");

stockTitle.textContent = "Nog televisies te verkopen (stock)";

stockNumber.textContent = `${resultsBuy - result}`

stockNumber.style.color = "red";

stock.appendChild(stockTitle);
stock.appendChild(stockNumber);