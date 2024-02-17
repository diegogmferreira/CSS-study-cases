let wheel = document.querySelector('.wheel');
let inner = document.querySelector('.inner-wheel');
let spinBtn = document.querySelector('.wheel-spin-btn');

let value1 = Math.ceil(Math.random() * -3600);
let value2 = Math.ceil(Math.random() * 3600);

spinBtn.onclick = () => {
  wheel.style.transform = `rotate(${value1}deg)`;
  inner.style.transform = `rotate(${value2}deg)`;
  value1 += Math.ceil(Math.random() * -3600);
  value2 += Math.ceil(Math.random() * 3600);
}