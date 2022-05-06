const lang = document.querySelector('.hero__lang');
const langArray = ['english', 'spanish', 'chineese', 'french', 'german'];
const logo = document.querySelector('.hero__logo');
const colorArray = [0, 70, 140 , 210, 280];


let current = 0;
setInterval(function() {
      lang.innerHTML = langArray[current];
      logo.style.filter = `hue-rotate(${colorArray[current]}deg)`;
      current++;
      if(current >= langArray.length) current = 0;
}, 3000);