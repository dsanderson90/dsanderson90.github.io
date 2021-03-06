//  GITHUB USERDATA FETCH
// let dataset;
// fetch('https://api.github.com/users/dsanderson90')
//     .then(response => response.json())
//     .then(data => {
//  	dataset = data;
//   populateData();
// });

// function populateData () {
//   let container = document.querySelector('.stats');
//   for(let prop in dataset) {
//     let stat = document.createElement('div');
//     stat.className = 'stat'
//     stat.innerText = `${prop} ${dataset[prop]}`;
//     container.appendChild(stat);
//   }

// }

let greeting = document.querySelector('.greeting');
let greetingStr = document.querySelector('.greeting').innerText;
let greetingArr = greetingStr.split('');
// let colors = ['#FF355E', '#FD5B78', '#0066FF', '#FF6037', '#FF9933', '#FFCC33', '#FFFF66', '#CCFF00', '#66FF66', '#AAF0D1', '#50BFE6', '#FF6EFF', '#EE34D2']
let colors = ['#f75f1c', '#ff9a00', '#881ee4', '#85e21f'];
let letters = greetingArr.map((el, i) => {
  el = `<span class="ltr">${el}</span>`;
  return el;
});
greeting.innerHTML = letters.join('');

let greetingShort = document.querySelector('.greeting.short');
let greetingShortStr = document.querySelector('.greeting.short').innerText;
let greetingShortArr = greetingShortStr.split('');
let lettersShort = greetingShortArr.map((el, i) => {
  el = `<span class="ltr">${el}</span>`;
  return el;
});
greetingShort.innerHTML = lettersShort.join('');

let projectsTaglineShort = document.querySelector('.projects-tagline.short');
let projectsTaglineShortStr = projectsTaglineShort.innerText;
let projectsTaglineShortArr = projectsTaglineShortStr.split('');
let projectLettersShort = projectsTaglineShortArr.map((el, i) => {
  return (i % 2 == 0) ?
    el = `<span>${el}</span>` :
    el = `<span>${el}</span>`

});
projectsTaglineShort.innerHTML = projectLettersShort.join('');

let projectTagline = document.querySelector('.projects-tagline');
let projectTaglineStr = document.querySelector('.projects-tagline').innerText;
let projectTaglineArr = projectTaglineStr.split('');
let projectLetters = projectTaglineArr.map((el, i) => {
  if (i % 2 == 0) {
    el = `<span>${el}</span>`;
  } else {
    el = `<span>${el}</span>`;
  }
  return el;
});
projectTagline.innerHTML = projectLetters.join('');

let contactTitleShort = document.querySelector('.contact-title.short');
let contactTitleShortStr = contactTitleShort.innerText;
let contactShortArr = contactTitleShortStr.split('');
let contactLetterShort = contactShortArr.map((el, i) => {
  el = `<span>${el}</span>`;
  return el;
});
contactTitleShort.innerHTML = contactLetterShort.join('');

const toggleDarkLight = () => {
  const body = document.getElementById('body');
  let currentClass = body.className;
  body.className = currentClass == 'dark-mode' ? 'light-mode' : 'dark-mode';
};
document.getElementById('toggle').addEventListener('click', () => {
  toggleDarkLight();
  document.getElementById('lol').style.color = getRandomColor();
});

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Event listeners for hover effects

let links = document
  .querySelectorAll('.link, .project-title')
  .forEach(element => {
    if(element.className == 'project-title') {
      element.addEventListener('mouseover', () => {
        element.style.color = getRandomColor();
        element.style.fontSize = '2.5rem'
      });
      element.addEventListener('mouseout', () => {
        element.style.color = '';
        element.style.fontSize = ''

      });
    }

    element.addEventListener('mouseover', () => {
      element.style.color = getRandomColor();

    });
    element.addEventListener('mouseout', () => {
      element.style.color = '';

    });
  });

let imgs = document.querySelectorAll('img');
imgs.forEach(img => {
  img.addEventListener('mouseover', e => {
    //selects project headline from the DOM
    let projectHeadline =
      e.target.parentNode.previousElementSibling.childNodes[1];
    projectHeadline.style.color = getRandomColor();
    projectHeadline.style.fontSize = '2.5rem'
  });
  img.addEventListener('mouseout', e => {
    let projectHeadline =
      e.target.parentNode.previousElementSibling.childNodes[1];
    projectHeadline.style.color = '';
    projectHeadline.style.fontSize = '';
  });
});

// CONTACT SECTION ANIMATION

const consoleText = (words, id, colors) => {
  if (colors === undefined) colors = ['#fff'];
  let visible = true;
  let con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function() {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      visible = false;
    } else {
      con.className = 'console-underscore';

      visible = true;
    }
  }, 400);
};
consoleText(
  ['Contact Me.', 'Get In Touch.', "Let's build something.", 'Hire me!'],
  'text',
  [getRandomColor(), getRandomColor(), getRandomColor()]
);
