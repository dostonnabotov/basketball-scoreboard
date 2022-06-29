const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const compareScore = document.getElementById('compare');


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