var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fruits = ['https://purepng.com/public/uploads/medium/purepng.com-bananafruitsyellowfruit-981524754290imrx9.png', 'http://purepng.com/public/uploads/large/purepng.com-classic-red-appleapplegreenhealthycut-641522015196qtavo.png', 'orange.png', 'http://pluspng.com/img-png/grapes-hd-png-green-grapes-transparent-images-796.png'];
var random = Math.floor(Math.random() * 4);
var basketx = 275;
var fruitx = Math.floor(Math.random() * 650);
var fruity = -50;
var score = 0;
var scorelabel = document.getElementById('score');
var candraw = true;
function add() {
    if (candraw == true) {
    background = new Image();
    background.onload = uploadBackground;
    background.src = "background.png";

    basket = new Image();
    basket.onload = uploadBasket;
    basket.src = "basket.png";

    fruit = new Image();
    fruit.onload = uploadFruit;
    fruit.src = fruits[random];
    }
}

function uploadBasket() {
    ctx.drawImage(basket, basketx, 460, 120, 100);
}

function uploadBackground() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}


function uploadFruit() {
    ctx.drawImage(fruit, fruitx, fruity, 50, 50);
}
setInterval(move, 50);
window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
    keycode = e.keyCode;
    if (keycode == 39) {
        basketx += 6;
        add();
    }
    if (keycode == 37) {
        basketx -= 6;
        add();
    }

}

function move() {
    fruity += 8;
    add();
    if (candraw == true) {
    if (fruitx <= basketx + 65 && fruitx >= basketx - 4 && fruity >= 465 && fruity <= 475) {
        fruity = -50;
        fruitx = Math.floor(Math.random() * 675); 
        random = Math.floor(Math.random() * 4)
        add();
        score += 1;
        scorelabel.innerHTML = "Score: " + score;
    }
    if(fruity >= 610) {
    score -= 1;
    scorelabel.innerHTML = "Score: " + score;
    fruity = -50;
    fruitx = Math.floor(Math.random() * 675);
    random = Math.floor(Math.random() * 4)
    add();
    }
    } 
    if (score <= -4) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "60px Arial";
        ctx.fillText("Oh no! You lose",120,160);
        ctx.fillText("Try again",190,230);
        candraw = false;
        }
}