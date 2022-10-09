// variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

console.log(randomNumber);

// events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', pressEnter);
inputNumber.focus();

// functions
function handleTryClick(event) {
  event.preventDefault();
  validatePlay();
}

function validatePlay() {
  const inputNumber = document.querySelector("#inputNumber");
  inputNumber.focus();

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || inputNumber.value == "") {
    alert("Número inválido! Por favor, adivinhe um número entre 0 e 10");
  } else {
    playGame();
  }
  console.log(xAttempts);
  inputNumber.value = "";
  inputNumber.focus();
}

function playGame() {
  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen();
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`;
  }
  xAttempts++;
  inputNumber.value = "";
  inputNumber.focus();
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
  inputNumber.focus();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(event) {
  if (event.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
