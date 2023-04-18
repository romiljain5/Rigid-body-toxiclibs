const {VerletPhysics2D, VerletParticle2D, VerletSpring2D} = toxi.physics2d;
const {GravityBehavior} = toxi.physics2d.behaviors;
const {Vec2D, Rect} = toxi.geom;

//all other methods are from p5.js for 2d

let physics;
let particleA;

function setup() {
    createCanvas(640, 360);

    physics = new VerletPhysics2D();
    let gravity = new GravityBehavior(new Vec2D(0, 1));
    physics.addBehavior(gravity); //need to add everything to physics world

    let bounds = new Rect(0, 0, width, height); //rectangle for setting boundaries
    physics.setWorldBounds(bounds);

    particleA = new VerletParticle2D(320, 100);
    physics.addParticle(particleA);
}

function draw() {
    background(255);

    physics.update(); //updates in time

    fill(0)
    circle(particleA.x, particleA.y, 16)
}