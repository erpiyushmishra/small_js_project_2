const colors = ['pink', 'blue', 'coral', 'grey','green','brown','blue', 'yellow', 'voilet'];

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const hexcode = document.querySelector('.hexcode');
const heading_text = document.querySelector('.heading-text');

btn.addEventListener('click', ()=>{
    let color = colors[Math.floor(Math.random()*colors.length)];
    hexcode.innerHTML = color;
    container.style.background= color;



})