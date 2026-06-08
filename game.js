let cow, tiger;

let actionQueue = [];
let currentAction = null;
let startTime = 0;

function setup() {
    createCanvas(900, 500);

    cow = { x: 100, y: 250, vx: 0, vy: 0, speed: 6 };
    tiger = { x: 800, y: 250 };
}

function draw() {
    background(10);

    updateActions();

    // 🐄 Cow movement
    cow.x += cow.vx * cow.speed;
    cow.y += cow.vy * cow.speed;

    cow.x = constrain(cow.x, 20, width - 20);
    cow.y = constrain(cow.y, 20, height - 20);

    // 🐅 SLOW TIGER AI (IMPORTANT REQUIREMENT)
    let dx = cow.x - tiger.x;
    let dy = cow.y - tiger.y;

    tiger.x += dx * 0.006;   // 🔥 slower than before
    tiger.y += dy * 0.006;

    // draw cow
    fill(0, 255, 120);
    circle(cow.x, cow.y, 30);

    // draw tiger
    fill(255, 120, 0);
    circle(tiger.x, tiger.y, 35);

    // collision
    let d = dist(cow.x, cow.y, tiger.x, tiger.y);

    if (d < 25) {
        fill(255);
        textSize(30);
        text("🐅 GAME OVER", 350, 250);
        noLoop();
    }
}

/* ---------------------------
   🧠 ACTION ENGINE (CORE AI SYSTEM)
----------------------------*/

function updateActions() {

    if (!currentAction && actionQueue.length > 0) {
        currentAction = actionQueue.shift();
        startTime = millis();
    }

    if (!currentAction) return;

    let elapsed = (millis() - startTime) / 1000;

    if (elapsed > currentAction.duration) {
        currentAction = null;
        cow.vx = 0;
        cow.vy = 0;
        return;
    }

    // reset
    cow.vx = 0;
    cow.vy = 0;

    // direction control
    if (currentAction.dir === "left") cow.vx = -1;
    if (currentAction.dir === "right") cow.vx = 1;
    if (currentAction.dir === "up") cow.vy = -1;
    if (currentAction.dir === "down") cow.vy = 1;
}