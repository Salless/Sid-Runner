class Component {
    // Organize matter bodies
    constructor(x, y, w, h, type=null) {
        this.type = type;
        this.color = color(255, 127);
        let specs = {
            isStatic: true,
            friction: 1,
            restitution: 0
        }
        if (this.type == 'sqr') {
            this.body = Bodies.rectangle(x, y, w, h, specs);
        } else if (this.type == 'circle') {
            this.body = Bodies.circle(x, y, w, specs);
        } else if (this.type == 'line') {
            this.body = Bodies.rectangle(x, y, )
        } else if (this.type == 'complex') {

        } else {
            throw console.error(`Cannot initialize body of \'${type}\' component \ndue to incompatible type`);
        }
    }
    show() {
        fill(this.color);
        if (this.type == 'sqr') {
            push();
            let dim = this.body.bounds;
            
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            rect(0, 0, dim.max.x - dim.min.x, dim.max.y - dim.min.y);
            
            pop();
        } else if (this.type == 'circle') {
            push();
            
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            ellipse(0, 0, this.body.circleRadius *2);

            pop();
        } else if (this.type == 'complex') {
            push();
            
            pop();
        }
    }
}