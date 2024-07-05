let arrow = document.getElementById('down-arrow');
let game = document.getElementById('secret-game');

//reveals the "Secret" Game section
const reveal = () => {
    if (game.style.display == '' || game.style.display == 'none') {
        game.style.display = 'block';
    } else {
        game.style.display = 'none';
    }
    
}

arrow.addEventListener('click', reveal);