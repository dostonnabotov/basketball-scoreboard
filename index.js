const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const compareScore = document.getElementById('compare');
const time = document.getElementById('time');

let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
console.log(countDownDate);

let x =  setInterval(function() {
    // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  time.innerHTML = `${hours} : ${minutes} : ${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    time = "EXPIRED";
  }
}, 1000);



let HOME_SCORE = 0;
let GUEST_SCORE = 0;

function compare() {
    let comparedResult = HOME_SCORE < GUEST_SCORE ? compareScore.textContent = '<'
                : HOME_SCORE > GUEST_SCORE ? compareScore.textContent = '>'
                : compareScore.textContent = '=';
    
    return comparedResult;
}

const incrementHome1 = () => {
    HOME_SCORE += 1;
    homeScore.textContent = HOME_SCORE;
    compare();
}

const incrementHome2 = () => {
    HOME_SCORE += 2;
    homeScore.textContent = HOME_SCORE;
    compare();
}

const incrementHome3 = () => {
    HOME_SCORE += 3;
    homeScore.textContent = HOME_SCORE;
    compare();
}

const incrementGuest1 = () => {
    GUEST_SCORE += 1;
    guestScore.textContent = GUEST_SCORE;
    compare();
}

const incrementGuest2 = () => {
    GUEST_SCORE += 2;
    guestScore.textContent = GUEST_SCORE;
    compare();
}

const incrementGuest3 = () => {
    GUEST_SCORE += 3;
    guestScore.textContent = GUEST_SCORE;
    compare();
}

const newGame = () => {
    HOME_SCORE = 0;
    homeScore.textContent = HOME_SCORE;
    GUEST_SCORE = 0;
    guestScore.textContent = GUEST_SCORE;
    compare();
}