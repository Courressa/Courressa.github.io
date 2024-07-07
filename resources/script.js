let arrow = document.getElementById('down-arrow');
let game = document.getElementById('secret-game');
let butterflyAndBubble = document.getElementById('butterfly-ingame');
let startGame = document.getElementById('start-game');

//reveals the "Secret" Game section
const reveal = () => {
    if (game.style.display == '' || game.style.display == 'none') {
        game.style.display = 'grid';
    } else {
        game.style.display = 'none';
    }
    
}

arrow.addEventListener('click', reveal);

//moving butterfly

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


document.addEventListener('keydown', movement);

//let objects appear and fall - game start

const start = () => {
        startGame.style.transition = '1s';
        startGame.style.fontSize = '1rem';
        startGame.style.opacity = '0';
}

startGame.addEventListener('click', start);