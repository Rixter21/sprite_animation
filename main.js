const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let playerState = 'run';

// bring in the image
const playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';

let gameFrame = 0;

const staggerFrames = 5;

const spriteAnimations = [];

// animation loop.../assets/
function animate() {
    // clear old paint from canvas between animation frames
    // clearRect function expects 4 arguments
    // objective: clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(50, 50, 100, 100);

    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0,  CANVAS_WIDTH, CANVAS_HEIGHT);

    // if (gameFrame % staggerFrames == 0) {
    //     if (frameX < 6) frameX++;
    //     else frameX = 0;
    // }

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();

const dropDown = document.getElementById('animations')
dropDown.addEventListener('click', (e) => {
    playerState = e.target.value;
});


const spriteWidth = 575;
const spriteHeight = 523;

const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({
            x: positionX, y: positionY
        });
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);






