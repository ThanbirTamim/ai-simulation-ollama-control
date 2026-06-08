let objects = [];

function setup() {
    createCanvas(900, 500);

    window.worldState = {
        gravity: 0.1,
        windX: 0,
        windY: 0,
        chaos: 0.2,
        energy: 1.0
    };

    for (let i = 0; i < 40; i++) {
        objects.push({
            x: random(width),
            y: random(height),
            vx: random(-2, 2),
            vy: random(-2, 2)
        });
    }
}

function draw() {
    background(10);

    let w = window.worldState;

    for (let o of objects) {

        // 🌍 gravity
        o.vy += w.gravity;

        // 🌪 wind
        o.vx += w.windX;
        o.vy += w.windY;

        // ⚡ chaos
        o.vx += random(-w.chaos, w.chaos);
        o.vy += random(-w.chaos, w.chaos);

        // 🌊 energy scaling
        o.x += o.vx * w.energy;
        o.y += o.vy * w.energy;

        // bounce
        if (o.x < 0 || o.x > width) o.vx *= -1;
        if (o.y < 0 || o.y > height) o.vy *= -1;

        fill(0, 200, 255);
        circle(o.x, o.y, 10);
    }
}