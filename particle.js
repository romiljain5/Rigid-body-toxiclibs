class Particle extends VerletParticle2D{

    constructor(x, y){
        super(x, y);
        this.r = 8;
        physics.addParticle(this); //because we're adding this particle
    }

    show() {
        fill(0);
        circle(this.x, this.y, this.r * 2);
    }
}