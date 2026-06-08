let balls = [];

function setup() {
    createCanvas(800, 500);

    window.simParams = {
        gravity: 0.1,
        speed: 1,
        friction: 0.99,
        chaos: 0.2
    };

    for (let i = 0; i < 30; i++) {
        balls.push({
            x: random(width),
            y: random(height),
            vx: random(-2, 2),
            vy: random(-2, 2)
        });
    }
}

function draw() {
    background(20);

    let g = window.simParams.gravity;
    let f = window.simParams.friction;
    let c = window.simParams.chaos;
    let s = window.simParams.speed;

    for (let b of balls) {

        b.vy += g;

        b.vx += random(-c, c);
        b.vy += random(-c, c);

        b.x += b.vx * s;
        b.y += b.vy * s;

        b.vx *= f;
        b.vy *= f;

        if (b.x < 0 || b.x > width) b.vx *= -1;
        if (b.y < 0 || b.y > height) b.vy *= -1;

        fill(0, 200, 255);
        circle(b.x, b.y, 10);
    }
}