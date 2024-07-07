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

let stopAtEdge = () => {
    do {
        initialPosition--
    } while (initialPosition > 0);
};

const movement = (press) => {
    stopAtEdge();
        switch (press.code) {
            case "ArrowLeft":
            case "KeyA":
                butterflyAndBubble.style.left = `${initialPosition--}%`;
                break;
            case "ArrowRight":
            case "KeyD":
                butterflyAndBubble.style.left = `${initialPosition++}%`;
                break;
        }
};


document.addEventListener('keydown', movement);