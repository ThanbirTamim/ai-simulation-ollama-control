let cow, tiger;

function setup() {
    createCanvas(900, 500);

    cow = { x: 100, y: 250 };
    tiger = { x: 800, y: 250 };

    window.cow = { vx: 0, vy: 0, speed: 5 };
}

function draw() {
    background(10);

    // 🐄 Cow movement (AI controlled)
    cow.x += window.cow.vx * window.cow.speed;
    cow.y += window.cow.vy * window.cow.speed;

    cow.x = constrain(cow.x, 20, width - 20);
    cow.y = constrain(cow.y, 20, height - 20);

    // 🐅 Tiger AI (slower chase)
    let dx = cow.x - tiger.x;
    let dy = cow.y - tiger.y;

    tiger.x += dx * 0.008;   // 🔥 slower tiger
    tiger.y += dy * 0.008;

    // draw cow
    fill(0, 255, 100);
    circle(cow.x, cow.y, 30);

    // draw tiger
    fill(255, 120, 0);
    circle(tiger.x, tiger.y, 35);

    // collision
    let d = dist(cow.x, cow.y, tiger.x, tiger.y);

    if (d < 25) {
        fill(255);
        textSize(30);
        text("🐅 GAME OVER!", 300, 250);
        noLoop();
    }
}