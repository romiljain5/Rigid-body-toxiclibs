const {VerletPhysics2D, VerletParticle2D, VerletSpring2D} = toxi.physics2d;
const {GravityBehavior} = toxi.physics2d.behaviors;
const {Vec2D, Rect} = toxi.geom;

//all other methods are from p5.js for 2d

let physics;
let particles = [];
let springs = [];

function setup() {
    createCanvas(640, 360);
    
    physics = new VerletPhysics2D();
    // let gravity = new GravityBehavior(new Vec2D(0, 1));
    // physics.addBehavior(gravity); //need to add everything to physics world

    let bounds = new Rect(0, 0, width, height); //rectangle for setting boundaries
    physics.setWorldBounds(bounds);

    particles.push(new Particle(320, 100));
    particles.push(new Particle(320, 200));
    particles.push(new Particle(200, 100));

    springs.push(new Spring(particles[0], particles[1], 100, 0.1));
    springs.push(new Spring(particles[1], particles[2], 100, 0.1));
    springs.push(new Spring(particles[2], particles[0], 100, 0.1));
}

function draw() {
    background(255);

    //can add mouseIsPressed condition
    if(mouseIsPressed){
        particles[0].lock()
        particles[0].x=mouseX
        particles[0].y=mouseY
        particles[0].unlock()
    }
    physics.update(); //updates in time

    for(let x of particles){
        x.show()
    }
    // line(particleA.x, particleA.y, particleB.x, particleB.y);
    springs[0].show(particles[0], particles[1]);
    springs[1].show(particles[1], particles[2]);
    springs[2].show(particles[2], particles[0]);
}