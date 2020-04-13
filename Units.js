
class Sid {
    constructor() {
        // body is a series of matter.js's bodies
        // in especific locations based on canvas's dimentions
        
        this.animetionFrame = 0;
        this.animetionDir = 1;
        // afl => animetion Frame Limits
        this.afl = [0, 50];

        this.components = [
            new Component(125, 100, 20, 20, 'circle'),
            new Component(600, 200, 20, 20, 'sqr'),
        ]
        this.components.forEach(c => {
            World.add(engine.world, c.body);
        })
    }
    live() {
        this.show();

        this.animetionDir == 1 ? this.animetionFrame++ : this.animetionFrame--        
        // this.animetionFrame++;
        if (this.animetionFrame < this.afl[0] || this.animetionFrame > this.afl[1]) {
            this.animetionDir *= -1;
        }
    }

    show() {
        this.components.forEach(c => {
            c.show();
        })
        // draw caracteristics
        push();
        stroke(0);
        fill(0, 127);

        translate(this.components[0].body.position.x, this.components[0].body.position.y);
        let r = this.components[0].body.circleRadius;

        let arc = map(this.animetionFrame, this.afl[0], this.afl[1], 0, PI / 4);
        rotate(arc);
        
        let endPoint = r + 1.5; 

        line(-r * 0.6, -r * 0.2, endPoint, -r * 0.2);
        // let d = dist(r * 0.6, -r* 0.2, r + 1.5, -r * 0.2);
        // Lens
        beginShape();
        
        vertex(endPoint, -r * 0.2);
        bezierVertex(10, 8, 6, 6, endPoint * 0.5, -r * 0.2);

        endShape();
        
        pop();
    }
}
class Guard {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.conponents = [
            new Conponent(300, 200, 'circle'),
            new Component(300, 200, 'line')
        ]
    }
}
class Sphere {
    constructor(x, y) {
        this.r = 12
        this.body = Bodies.circle(x, y, this.r, {friction: 0.4, restitution: 0.5, });
        World.add(engine.world, this.body);
    }
    show() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255, 127);
        stroke(255);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}