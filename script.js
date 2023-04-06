'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Setting elements score = 0
score0El.textContent = 0; // per visualizzarli in pagina JS li convertirà in stringhe
score1El.textContent = 0;

diceEl.classList.add('hidden');
