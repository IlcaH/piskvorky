import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

const ikonaHracElement = document.querySelector('.hra_image');

let hracNaTahu = 'kolecko';

const restartButtonElement = document.querySelector('.znovu-tlacitko2')
restartButtonElement.addEventListener('click', (event) => {
  if (window.confirm('Opravdu chceš restartovat hru?') === false) {
  event.preventDefault()
  }
})

const hracTah = (event) => {
  if (hracNaTahu === 'kolecko') {
    event.target.classList.toggle('hraci_pole_policko--kolecko');
    event.target.disabled = true;
    ikonaHracElement.src = 'images/cross.svg';
    hracNaTahu = 'krizek';
  } else if (hracNaTahu === 'krizek') {
    event.target.classList.toggle('hraci_pole_policko--krizek');
    event.target.disabled = true;
    ikonaHracElement.src = 'images/circle.svg';
    hracNaTahu = 'kolecko';
 }
 evaluation()
}
const gameArrays = document.querySelectorAll('.hraci_pole_policko')
gameArrays.forEach((array) => {
  array.addEventListener('click', hracTah)
})



const evaluation = () => {
  let gameField = []
  gameArrays.forEach((array) => {
    if (array.classList.contains('hraci_pole_policko--kolecko')) {
      gameField.push('o')
    } else if (array.classList.contains('hraci_pole_policko--krizek')) {
      gameField.push('x')
    } else {
      gameField.push('_')
    }
  })




console.log(gameField)
const winner = findWinner(gameField)
console.log('winner', winner)

if (winner === 'o') {
  setTimeout(() => {
    alert('Vyhrálo kolečko!')
    location.reload()
  }, 500)
} else if (winner === 'x') {
  setTimeout(() => {
    alert('Vyhrál křížek!')
    location.reload()
  }, 500)
}  else if (winner === 'tie') {
  setTimeout(() => {
    alert('Hra skončila remízou!')
    location.reload()
  }, 500)
}



// -- posl úkol --

const makeCrossMove = async (array) => {
  gameBoxes.forEach((button) => {
    button.disabled = true;
  });


const response = await fetch(
  'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      board: gameField,
      player: 'x',
    }),
  });

const data = await response.json();
const { x, y } = data.position;
const field = gameArrays[x + y * 10];

gameArrays.forEach((array) => {
  if (
    !array.classList.contains('hraci_pole_policko--kolecko') &&
    !array.classList.contains('hraci_pole_policko--krizek')
  ) {
    array.disabled = false;
  }
});

field.click();

}
}
