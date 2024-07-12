const arrow = document.getElementById('down-arrow');
const game = document.getElementById('secret-game');

const startButton = document.getElementById('start-game');
const score = document.querySelector('.score');
const gameOverNotice = document.getElementById('game-over');
const playAgainButton = document.getElementById('play-again');

const gameArea = Array.from(document.querySelectorAll('.game-area'))
const fallingObjectsArea = gameArea.slice(0, 25);
const butterflyArea = gameArea.slice(25);
const scoreDisplay = document.querySelector('#score-number');


let dropCount, speed, scoreNumber;


//Item Creation
const butterflyCreation = '<div class="butterfly-ingame"><img src="./resources/images/Butterfly-In-Bubble.png" alt="Butterfly In Protective Bubble"></div>';
const fallingObjectCreation = '<div class="falling-objects"></div>';


//reveals the "Secret" Game section
const reveal = () => {
    if (game.style.display == '' || game.style.display == 'none') {
        game.style.display = 'grid';
        score.style.display = 'grid';
        startButton.style.display = 'grid';
    } else {
        game.style.display = 'none';
        score.style.display = 'none';
        startButton.style.display = 'none';
    }; 
    
     
}

arrow.addEventListener('click', reveal);

//moving butterfly

const movement = (press) => {
    const butterflyInBubble = document.querySelector('.butterfly-ingame');

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
    speed = 1000;
    scoreNumber = 0;
    scoreDisplay.innerHTML = '0';

    gameArea.forEach(cell => cell.innerHTML = "");
    butterflyArea[2].innerHTML = `${butterflyCreation}`;
}

//let objects appear and fall - game start

const startGame = () => {
    reset();
    loop();
};

const loop = () => {
    let stopGame = false;

    for (let i = fallingObjectsArea.length - 1; i >= 0; i--) {
        const cell = fallingObjectsArea[i];
        const nextCell = gameArea[i + 5];
        const object = cell.children[0];

        if (!object) {
            continue;
        };

        nextCell.appendChild(object);

        if (butterflyArea.includes(nextCell)) {
            if (nextCell.querySelector('.butterfly-ingame')) {
                stopGame = true;
            } else {
                scoreNumber++;
                speed = Math.max(100, speed - 25);
                scoreDisplay.innerHTML = scoreNumber;
                object.remove();
            }
        }
    }

    //adds a new enemy at even drop count
    if (dropCount % 2 === 0) {
        const position = Math.floor(Math.random() * 5);

        fallingObjectsArea[position].innerHTML = `${fallingObjectCreation}`
    }

    //will continue game if there is no collision
    if (stopGame) {
        gameOverNotice.style.display = 'flex';
        scoreNumber;
        playAgainButton.style.display = 'flex';
        
    } else {
        dropCount++;
        setTimeout(loop, speed);
    }
};

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
*/

startButton.addEventListener('click', startGame);

// Play again
/* reset(); */
