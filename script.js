const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);

let test1 = document.getElementById("shape1");
let selected = document.getElementById("selected");
let anims = [];

const animate = (text) => {
  if (anims.length > 0) {
    anims.forEach((anim) => {
      clearTimeout(anim)
    })
  }
  selected.classList.add("fadeOut")
  let t = setTimeout(() => {
    selected.innerHTML = text
    selected.classList.remove("fadeOut")
    selected.classList.add("fadeIn")
    let k = setTimeout(() => {
      selected.classList.remove("fadeIn")
    }, 350)
    anims.add(k)
  }, 350)
  anims.add(t)
}

test1.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("hello")
}, false);

test1.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);

let test2 = document.getElementById("shape2");

test2.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("hello2")
}, false);

test2.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);
