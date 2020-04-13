class Population {
    constructor() {
        this.pool = [];
        this.strPosition = createVector(width * 0.66, height * 0.5);
        for (let i = 0; i < 2; i++) {
            this.pool.push(new Guard(this.strPos.x, this.strPos.y));
        }
        this.best;
        
    }
}