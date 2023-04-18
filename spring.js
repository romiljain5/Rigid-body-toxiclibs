class Spring extends VerletSpring2D{

    constructor(particleA, particleB, length, strength) {
        super(particleA, particleB, length, strength);
        physics.addSpring(this); //we're adding this spring, spring between 2 particles
    }
    
    show(a, b) {
        stroke(0);
        line(a.x, a.y, b.x, b.y); //Add line in-between
    }
}