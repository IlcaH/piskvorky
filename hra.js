import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

const polickoElement = document.querySelector('.hraci_pole_policko');
const ikonaHracElement = document.querySelector('.hra_image');

let hracNaTahu = 'kolecko';


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

// 16-25
  let herniPole = []
  const kosticky = document.querySelectorAll('.herni_pole_policko')
  kosticky.forEach(kostka => {
    let hodnota = kostka.textContent
    if (hodnota === '') {
      hodnota = '_'
    }
    herniPole.push(hodnota)
  })

// 29-40
  const vysledek = findWinner(herniPole)
  if (vysledek === 'images/circle_black.svg' || vysledek === 'images/cross_black') {
    conslole.log('vyhrál', vysledek)

  } else if (vysledek === 'tie') {
    console.log('remiza')

  } else {
    console.log('zatím nic')
  }
};



// 42-46
const tahElement = document.querySelectorAll('.hraci_pole_policko')
tahElement.forEach((btn) => {
  btn.addEventListener('click', hracTah)
})



// document.querySelector('#pole00').addEventListener('click', hracTah);
// document.querySelector('#pole01').addEventListener('click', hracTah);
// document.querySelector('#pole02').addEventListener('click', hracTah);
// document.querySelector('#pole03').addEventListener('click', hracTah);
// document.querySelector('#pole04').addEventListener('click', hracTah);
// document.querySelector('#pole05').addEventListener('click', hracTah);
// document.querySelector('#pole06').addEventListener('click', hracTah);
// document.querySelector('#pole07').addEventListener('click', hracTah);
// document.querySelector('#pole08').addEventListener('click', hracTah);
// document.querySelector('#pole09').addEventListener('click', hracTah);



