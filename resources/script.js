let arrow = document.getElementById('down-arrow');
let game = document.getElementById('secret-game');
let butterflyAndBubble = document.getElementById('butterfly-ingame');

//reveals the "Secret" Game section
const reveal = () => {
    if (game.style.display == '' || game.style.display == 'none') {
        game.style.display = 'flex';
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