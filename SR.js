let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Contraint = Matter.Contraint;

let engine;
let terrain;
let enemy;
let spheres = [];
let mDragged, dragTime, dragDist, mLock;
let clickedPos = [0, 0];

function setup() {
    createCanvas(1000, 400);
    engine = Engine.create();

    // Mouse variables
    mDragged = false;
    mLock = false;
    dragTime = 0;
    dragDist = 0;

    enemy = new Sid();
    
    terrain = new Terrain();
    terrain.materialize();
    
}

function draw() {
    background(51);
    Engine.update(engine);
    
    terrain.show();
    enemy.live();

    spheres.forEach(s => {
        s.show();
    })
    
    if (mDragged) {
        dragDist = dist(mouseX, mouseY, clickedPos[0], clickedPos[1]);
        if (dragDist < 50 && !mLock) {
            if (dragTime % 20 == 0) {
                spheres.push(new Sphere(mouseX, mouseY));
            }
        } else {
            displayTragetory()
            mLock = true;
        }
        dragTime++;
    }

}
function mousePressed() {
    mDragged = true;
    clickedPos[0] = mouseX;
    clickedPos[1] = mouseY;

}
function mouseReleased() {
    mDragged = false;
    dragTime = 0;
    if (mLock) {
        // Fire Sphere
        mLock = false;
    }
}
function displayTragetory() {
    push();
    stroke(208, 158, 0, 127);
    strokeWeight(1.4);
    fill(255, 127);

    let leap = dragDist / 4;
    let pinRadius = 8;
    for (let d = 0; d < 5; d++) {

        let xPos = d * leap + clickedPos[0];
        let yPos = d *leap + clickedPos[1];
        
        ellipse(xPos, yPos, pinRadius);
    }

    line(mouseX, mouseY, clickedPos[0], clickedPos[1]);
    
    pop();
}

class Terrain {
    constructor() {
        this.body = Bodies.rectangle(width / 2, height, width * 8, 80, {isStatic: true, friction: 0.4});
    }
    materialize() {
        World.add(engine.world, this.body)
    }
    simulateMovement() {
        
    }
    show() {
        let dim = this.body.bounds;
        push();
        // line(0, height/2, width, height/2);
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(255, 127);
        stroke(0);
        rect(0, 0, dim.max.x - dim.min.x, dim.max.y - dim.min.y);
        pop();
    }
}
