import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

const polickoElement = document.querySelector('.hraci_pole_policko');
const ikonaHracElement = document.querySelector('.hra_image');

let hracNaTahu = 'kolecko';


const hracTah = (event) => {
  if (hracNaTahu === 'kolecko') {
    event.target.classList.add('hraci_pole_policko--kolecko');
    event.target.disabled = true;
    ikonaHracElement.src = 'cross.svg';
    hracNaTahu = 'krizek';
  } else if (hracNaTahu === 'krizek') {
    event.target.classList.add('hraci_pole_policko--krizek');
    event.target.disabled = true;
    ikonaHracElement.src = 'circle.svg';
    hracNaTahu = 'kolecko';
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

