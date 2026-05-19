
// toggle dark mode

const toggle = document.getElementById('btnToggle');

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

//password data
const uppercaseLetters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const lowercaseLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const symbols = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
  "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\",
  ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?"
];

let btn = document.getElementById('gen-pass-btn')
let uppercaseEl = document.getElementById('uppercase')
let lowercaseEl = document.getElementById('lowercase')
let numbersEl = document.getElementById('numbers')
let symbolsEl = document.getElementById('symbols')
let rangeSliderEl = document.querySelector('.range-slider')
let passLenEl = document.getElementById('pass-len')
let pass1El = document.getElementById('pass-1')
let pass2El = document.getElementById('pass-2')
let openEyeIconEl1 = document.querySelector('#open-eye-img1')
let openEyeIconEl2 = document.querySelector('#open-eye-img2')
let pass1 = ''
let pass2 = ''
let passTypeEl
let isVisible1 = true;
let isVisible2 = true;
let randomPass1 = ''
let randomPass2 = ''



btn.addEventListener("click", () => {
  randomPass1 = fetchRandomPasswords()
  pass1El.textContent = randomPass1
  randomPass2 = fetchRandomPasswords()
  pass2El.textContent = randomPass2
})


rangeSliderEl.addEventListener("input", () => {
  updateSliderValue()
  updateSliderProgress()
})

function updateSliderValue(){
  passLenEl.textContent = rangeSliderEl.value

  const min = rangeSliderEl.min
  const max = rangeSliderEl.max
  const value = rangeSliderEl.value

  const percent = (value - min)/(max - min)

  const thumbWidth = 24

  const offset =
    (thumbWidth / 2) -
    (percent * thumbWidth)

  passLenEl.style.left =
    `calc(${percent * 100}% + ${offset}px)`
}

function updateSliderProgress(){

  const value = rangeSliderEl.value
  const min = rangeSliderEl.min
  const max = rangeSliderEl.max

  const percent =
    ((value - min) / (max - min)) * 100

  rangeSliderEl.style.background =
    `linear-gradient(
      to right,
      #1CD57F ${percent}%,
      #D9D9D9 ${percent}%
    )`
}


pass1El.addEventListener("click", () => {
  
   if (openEyeIconEl1.id === 'open-eye-img1'){
      navigator.clipboard.writeText(randomPass1)
      pass1El.textContent = 'Copied!'

      setTimeout(() => {
      pass1El.textContent = randomPass1
      }, 1000)

  }else{
      navigator.clipboard.writeText(randomPass1)
      pass1El.textContent = 'Copied!'

      setTimeout(() => {
      pass1El.textContent = "•".repeat(randomPass1.length)
      }, 1000)
  }
})


pass2El.addEventListener("click", () => {

  if (openEyeIconEl2.id === 'open-eye-img2'){
      navigator.clipboard.writeText(randomPass2)
      pass2El.textContent = 'Copied!'

      setTimeout(() => {
      pass2El.textContent = randomPass2
      }, 1000)

  }else{
      navigator.clipboard.writeText(randomPass2)
      pass2El.textContent = 'Copied!'

      setTimeout(() => {
      pass2El.textContent = "•".repeat(randomPass2.length)
      }, 1000)
  }
})

openEyeIconEl1.addEventListener("click", () => {

  if(randomPass1 === '') return

  if (isVisible1) {
    openEyeIconEl1.src = "images/closeeye.png"
    openEyeIconEl1.id = 'close-eye-img1'
    pass1El.textContent = "•".repeat(randomPass1.length)
    isVisible1 = false

  }else {
    openEyeIconEl1.src = "images/openeye.png"
    openEyeIconEl1.id = 'open-eye-img1'
    pass1El.textContent = randomPass1
    isVisible1 = true
  }
})

openEyeIconEl2.addEventListener("click", () => {

  if(randomPass2 === '') return 

  if (isVisible2) {
    openEyeIconEl2.src = "images/closeeye.png"
    openEyeIconEl2.id = 'close-eye-img2'
    pass2El.textContent = "•".repeat(randomPass2.length)
    isVisible2 = false

  } else {
    openEyeIconEl2.src = "images/openeye.png"
    openEyeIconEl2.id = 'open-eye-img2'
    pass2El.textContent = randomPass2
    isVisible2 = true
  }
})




function fetchRandomPasswords() {
  passTypeEl = []
  if (uppercaseEl.checked) {

    passTypeEl.push(...uppercaseLetters)

  } if (lowercaseEl.checked) {

    passTypeEl.push(...lowercaseLetters)


  } if (numbersEl.checked) {

    passTypeEl.push(...numbers)


  } if (symbolsEl.checked) {

    passTypeEl.push(...symbols)

  } if (passTypeEl.length === 0) {

    passTypeEl.push(...uppercaseLetters, ...lowercaseLetters, ...numbers, ...symbols)
  }

  return generateRandomPasswords(passTypeEl)
}

function generateRandomPasswords(passTypeEl) {
  let pass = ''

  for (let i = 0; i < passLenEl.textContent; i++) {
    let password = Math.floor(Math.random() * passTypeEl.length)
    pass += passTypeEl[password]
  }
  return pass
}

