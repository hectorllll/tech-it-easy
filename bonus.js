// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

const buttons = document.getElementById("container7");

const buttonPrice = document.createElement('button');

buttonPrice.addEventListener("click", console.log(sortArray(inventory)));

buttonPrice.textContent = "sorteer op prijs";

buttons.appendChild(buttonPrice);




// const button = document.createElement('button');
//
// button.textContent = 'Click Me!';
//
// button.addEventListener('click', () => {
//     alert('Hey, someone clicked me!');
// });
//
// document.body.appendChild(button);






// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan jouw generateTV-functie zodat de resultaten daadwerkelijk op de pagina weergegeven worden!