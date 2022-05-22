console.log("We're connected!");
let game = document.querySelector("#game");
let ctx = game.getContext("2d"); // NOTE: creates two dimensional canvas.

let player;
let orc;
let chest;
let speed;
let movementArea;
let winner = false;
let gameOver = false;


game.setAttribute("height", "608");
game.setAttribute("width", "1216");
// NOTE: This will set the gameBoard width and height dynamically with the width of the gameboard in the window.
// game.setAttribute("height", getComputedStyle(game)["height"]);
// game.setAttribute("width", getComputedStyle(game)["width"]);

class Entity {
    constructor(name, x, y, color, width, height, health, attack) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.health = health;
        this.attack = attack;
        this.haveKey = false;
        this.visible = true;
    }
    // renders the square using the given parameters.
    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    takeTurn() {
        // TODO:
        // checks wheather you are attacking / deffending.
        // if attacking gets random number between range, uses that for attack,
            // do another random number to check if you critical hit, which will make your damage 1.5 x attack.
        // TODO:
        // if defending, uses a static amount.
    }
}

// NOTE: set this with canvas or just css / js ? ∆
// class UserInterface {
//     constructor(x, y, height, width)
// }

// load contents when DOM has loaded NOTE: or when start button is clicked??
window.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM has loaded!");
    // create and set entities on board
    player = new Entity("Hero",96, 160, "blue", 32, 32, 10, 3);
    orc = new Entity("Orc",608, 192, "darkGreen", 32, 32, 10, 3);
    chest = new Entity("Chest",96, 448, "yellow", 32, 32, 10, 3);

    const runGame = setInterval(gameLoop, 120);
    
})
    // run game loop 
function gameLoop() {
    player.render()
    orc.render()
    chest.render()
}

// 