document.getElementById("bottonePartenza").addEventListener("click", partenza)

function partenza() {
  let sceltaUtente = document
    .querySelector("input[name='button']:checked")
    .value.toString();
  let computerRandom = randomGenerator();
  let numeroUtente = parseInt(document.getElementById("numeroInserito").value);
  let sommaNumeri = somma(numeroUtente, computerRandom);
  console.log("Scelta utente: " + sceltaUtente);
  console.log("Numero utente: " + numeroUtente);
  console.log("Numero computer: " + computerRandom);
  console.log("Somma numeri: " + sommaNumeri);
  let pariODispari = isEvenOrOdd(sommaNumeri);
  console.log("La somma è: " + pariODispari)
  let vincitore = checkVincitore(sceltaUtente, pariODispari)
  console.log(vincitore)
}

//generiamo un numero random da 1 a 5 per il computer
function randomGenerator() {
  return Math.floor(Math.random() * 5) + 1;
}

//sommiamo i due numeri
function somma(numero1, numero2) {
  return numero1 + numero2;
}

//stabiliamo se la somma dei due numeri è pari o dispari
function isEvenOrOdd(sommanumero) {
  if (sommanumero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
//dichiariamo chi ha vinto
function checkVincitore(scelta, risultatoPariDispari) {
  if (scelta === risultatoPariDispari) {
    return "Hai vinto!";
  } else {
    return "Hai perso!";
  }
}