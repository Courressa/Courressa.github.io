const arrow = document.getElementById('down-arrow');
const game = document.getElementById('secret-game');
const startButton = document.getElementById('start-game');
const score = document.querySelector('.score');
const gameOverNotice = document.getElementById('game-over');
const playAgainButton = document.getElementById('play-again');
const gameArea = Array.from(document.querySelectorAll('.game-area'));
const fallingObjectsArea = gameArea.slice(0, 25);
const butterflyArea = gameArea.slice(25);
const scoreDisplay = document.querySelector('#score-number');
const instructions = document.querySelector('.game-instructions');

//Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    //Change icon to X when open
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  //Close menu when clicking a link
  document.querySelectorAll('.mobile-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });
});


let dropCount, speed, scoreNumber;


//Item Creation
const butterflyCreation = '<div class="butterfly-ingame"><img src="./resources/images/Butterfly-In-Bubble.png" alt="Butterfly In Protective Bubble"></div>';
const fallingObjectCreation = '<div class="falling-objects"><img src="./resources/images/WaterDrop2.png" alt="Water Droplet"></div>';
const noBubbleButterflyCreation = '<div class="noBubbleButterfly"><img src="./resources/images/Logo-Colour2-medium.png" alt="Butterfly With No Bubble"></div>';

//reveals the "Secret" Game section
const reveal = () => {
    if (game.style.display == '' || game.style.display == 'none') {
        game.style.display = 'grid';
        score.style.display = 'grid';
        startButton.style.display = 'grid';
        butterflyArea[2].innerHTML = `${butterflyCreation}`;
        document.removeEventListener('click', touchMovement);
        instructions.style.display = 'grid';
    } else {
        game.style.display = 'none';
        score.style.display = 'none';
        startButton.style.display = 'none';
        instructions.style.display = 'none';
        playAgainButton.style.display = 'none';
        gameOverNotice.style.display = 'none';
    }; 
}

arrow.addEventListener('click', reveal);

//moving butterfly
    //-keyboard
const movement = (press) => {
    
    const butterflyInBubble = document.querySelector('.butterfly-ingame');

    if ((press.code === "ArrowLeft" && butterflyArea.includes(butterflyInBubble.parentElement.previousElementSibling)) || (press.code === "KeyA" && butterflyArea.includes(butterflyInBubble.parentElement.previousElementSibling))) {
        butterflyInBubble.parentElement.previousElementSibling.appendChild(butterflyInBubble);
    } else if ((press.code === "ArrowRight" && butterflyInBubble.parentElement.nextElementSibling) || (press.code === "KeyD" && butterflyInBubble.parentElement.nextElementSibling)) {
        butterflyInBubble.parentElement.nextElementSibling.appendChild(butterflyInBubble);
    }
};

    //-click
const touchMovement = (touch) => {
    const butterflyInBubble = document.querySelector('.butterfly-ingame');
    if (!butterflyInBubble) return;

    const gameRect = game.getBoundingClientRect();
    const clickX = touch.clientX - gameRect.left;
    const gameWidth = gameRect.width;
    const currentCell = butterflyInBubble.parentElement;

    if (clickX < (gameWidth / 2)) {
        // Try to move LEFT, but only within butterflyArea
        const prevCell = currentCell.previousElementSibling;
        if (prevCell && butterflyArea.includes(prevCell)) {
            console.log('Moved LEFT');
            prevCell.appendChild(butterflyInBubble);
        }
    } 
    else {
        // Try to move RIGHT, but only within butterflyArea
        const nextCell = currentCell.nextElementSibling;
        if (nextCell && butterflyArea.includes(nextCell)) {
            console.log('Moved RIGHT');
            nextCell.appendChild(butterflyInBubble);
        }
    }
}

document.addEventListener('keydown', movement);
document.addEventListener('DOMContentLoaded', () => {document.addEventListener('click', touchMovement)});


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
    startButton.style.display = 'none';
    instructions.style.display = 'none';
    setTimeout(() => {
        document.addEventListener('click', touchMovement);
    }, 300);
    
};

const loop = () => {
    const butterflyInBubble = document.querySelector('.butterfly-ingame');
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
        gameOverNotice.style.display = 'grid';
        playAgainButton.style.display = 'grid';
        butterflyInBubble.parentElement.innerHTML = `${noBubbleButterflyCreation}`;
    } else {
        dropCount++;
        setTimeout(loop, speed);
    }
};

startButton.addEventListener('click', startGame);

// Play again

const playAgain = () => {
    if (playAgainButton.style.display === 'grid') {
        playAgainButton.style.display = 'none';
        gameOverNotice.style.display = 'none';
        reset();
        startButton.style.display = 'grid';
        instructions.style.display ='grid';
        document.removeEventListener('click', touchMovement);
    }
};

playAgainButton.addEventListener('click', playAgain);