// Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//
// NIKKEI NH3216SMART - HD smart TV
// €159,-
//     32 inch (81 cm)
//
// Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function modelTv(tvBundel) {
    return `${tvBundel.brand} ${tvBundel.type} - ${tvBundel.name}`
}

console.log(modelTv(inventory[4]));

//
//     Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function priceFormat(pricesTv) {
    return `€${pricesTv},-`
}

console.log(priceFormat(inventory[0].price));


//     Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.

function diagonalFormat(sizes) {

    let resultString = "";
    for (let i = 0; i < sizes.length; i++) {
        const cmFactor = 2.54;
        const cmValue = cmFactor * sizes[i];
        resultString = resultString + `${sizes[i]} inch (${cmValue}) | `
    }
    return resultString
}

console.log(diagonalFormat(inventory[3].availableSizes));


//     Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

const tvDetail = document.getElementById("container5");

const firstItem = document.createElement("p");
firstItem.textContent = modelTv(inventory[4]);

const secondItem = document.createElement("p");
secondItem.textContent = priceFormat(inventory[4].price);

const thirdItem = document.createElement("p");
thirdItem.textContent = diagonalFormat(inventory[4].availableSizes);

tvDetail.appendChild(firstItem);
tvDetail.appendChild(secondItem);
tvDetail.appendChild(thirdItem);

//
// Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
//

function oneTvGenerator(oneTv,container) {
   // const tvDetail = document.getElementById("container5");

    const firstItem = document.createElement("p");
    firstItem.textContent = modelTv(oneTv);

    const secondItem = document.createElement("p");
    secondItem.textContent = priceFormat(oneTv.price);

    const thirdItem = document.createElement("p");
    thirdItem.textContent = diagonalFormat(oneTv.availableSizes);

    container.appendChild(firstItem);
    container.appendChild(secondItem);
    container.appendChild(thirdItem);
}



function tvGenerator(allTvs,containerAllTvs) {
    for (let i = 0; i < allTvs.length; i++) {
    let containerOneTv = document.createElement("div");
    containerAllTvs.appendChild(containerOneTv);
    oneTvGenerator(allTvs[i], containerOneTv);
    }
}

tvGenerator(inventory, document.getElementById("container6"))