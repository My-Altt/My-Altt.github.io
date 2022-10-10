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

// shape 1

test1.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("Game Engine")
}, false);

test1.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);

// shape 2

let test2 = document.getElementById("shape2");

test2.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("Genesis")
}, false);

test2.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);

// shape 3

let test3 = document.getElementById("shape3");

test3.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("Other")
}, false);

test3.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);

// shape 4

let test4 = document.getElementById("shape4");

test4.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("To Do List")
}, false);

test4.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);


// shape 5

let test5 = document.getElementById("shape5");

test5.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("Vocab definition finder")
}, false);

test5.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);

// shape 6

let test6 = document.getElementById("shape6");

test6.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("New Tabs")
}, false);

test6.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);

// shape 7

let test7 = document.getElementById("shape7");

test7.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  animate("Periodtimer")
}, false);

test7.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  animate("none selected")
}, false);
