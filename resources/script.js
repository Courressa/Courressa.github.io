let arrow = document.getElementById('down-arrow');
let game = document.getElementById('secret-game');

let startGame = document.getElementById('start-game');
let rain = document.getElementById('falling-objects');
let score = document.getElementById('score');

const gameArea = Array.from(document.querySelectorAll('.game-area'))
const fallingObjectsArea = gameArea.slice(0, 25);
const butterflyArea = gameArea.slice(25);
const scoreDisplay = document.querySelector('#score-number');

let butterflyInBubble = document.querySelector('.butterfly-ingame');
let dropCount, speed, scoreNumber;

//Item Creation

const butterflyCreation = '<div class="butterfly-ingame"><img src="./resources/images/Butterfly-In-Bubble.png" alt="Butterfly In Protective Bubble"></div>';

//reveals the "Secret" Game section
const reveal = () => {
    if (game.style.display == '' || game.style.display == 'none') {
        game.style.display = 'inline-grid';
        score.style.display = 'flex';
    } else {
        game.style.display = 'none';
        score.style.display = 'none';
    }
    
}

arrow.addEventListener('click', reveal);

//moving butterfly

const movement = (press) => {
    if ((press.code === "ArrowLeft" && butterflyArea.includes(butterflyInBubble.parentElement.previousElementSibling)) || (press.code === "KeyA" && butterflyArea.includes(butterflyInBubble.parentElement.previousElementSibling))) {
        butterflyInBubble.parentElement.previousElementSibling.appendChild(butterflyInBubble);
    } else if ((press.code === "ArrowRight" && butterflyInBubble.parentElement.nextElementSibling) || (press.code === "KeyD" && butterflyInBubble.parentElement.nextElementSibling)) {
        butterflyInBubble.parentElement.nextElementSibling.appendChild(butterflyInBubble);
    }
};

document.addEventListener('keydown', movement);
/*
let initialPosition = 48;

let stopAtEdgeLeft = () => {
    if (initialPosition > 18) {
        initialPosition--;
        return initialPosition;
    } else if (initialPosition === 18) {
        return initialPosition;
    };
};

let stopAtEdgeRight = () => {
    if (initialPosition < 77) {
        initialPosition++;
        return initialPosition;
    } else if (initialPosition === 77) {
        return initialPosition;
    };
};

const movement = (press) => {
    
    switch (press.code) {
        case "ArrowLeft":
        case "KeyA":
            butterflyAndBubble.style.left = `${stopAtEdgeLeft()}%`;
            break;
        case "ArrowRight":
        case "KeyD":
            butterflyAndBubble.style.left = `${stopAtEdgeRight()}%`;
            break;
    } 
};



document.addEventListener('keydown', movement);*/

// Reset Game

const reset = () => {
    dropCount = 0;
    speed = 1;
    score = 0;
    scoreDisplay.innerHTML = '0';

    gameArea.forEach(cell => cell.innerHTML = '');
    butterflyArea[1].innerHTML = `${butterflyCreation}`;
}

//let objects appear and fall - game start  -247
/*
let getStyle = window.getComputedStyle(rain);
let showStyleValue = getStyle.getPropertyValue('bottom');
let value = -183;

const rainOpacity = () => {
    if (value === -248) {
        value--;
         rain.style.opacity = '0';

    } else {
        rain.style.backgroundColor = 'green';
        rainFall();
    } 

};

const rainFall = () => {
    while (value > -247) {
        value--;  
    }
    
    rain.style.bottom = `${value}%`;
    rainOpacity();
};



const start = () => {
    startGame.style.transition = '1s';
    startGame.style.fontSize = '1rem';
    startGame.style.opacity = '0';
    rainFall();
};


startGame.addEventListener('click', start);*/