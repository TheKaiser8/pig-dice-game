'use strict';

// Seleziono elementi
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Imposto condizioni iniziali
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // nascondo img dado

let currentScore = 0;
let activePlayer = 0; // creo variabile per cambiare dinamicamente il giocatore attivo

// Implemento funzionalità lancio dadi
btnRoll.addEventListener('click', function () {
  // 1. Genero numero di dadi casuale da 1 a 6
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  // 2. Visualizzo dado con l'immagine corrispondente al numero uscito
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`; // imposto l'immagine del dado da visualizzare (caricamento dinamico img)

  // 3. Controllo se il numero uscito è = 1: se true passo al giocatore successivo
  if (diceNumber !== 1) {
    // Aggiungo il numero uscito al punteggio corrente e lo visualizzo in pagina
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Riporto a 0 il punteggio corrente
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    // Cambio giocatore attivo
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
});
