let angle = 0

let kitten
// let cam
let plane1
let planetex
let graphics

function preload() {
    kitten = loadImage('kitten0.jpg')
    planetex = loadImage('PlaneTex.png')
    plane1 = loadModel('AirPlane.obj')

}

function setup() {
    createCanvas(400, 400, WEBGL);
    graphics = createGraphics(200, 200)
    graphics.fill(0, 0, 255)
    graphics.rect(0, 0, 100, 100)
    graphics.fill(255, 0, 0)
    graphics.rect(100, 0, 100, 100)
    graphics.fill(255, 255, 0)
    graphics.rect(0, 100, 100, 100)
    graphics.fill(200)
    graphics.rect(100, 100, 100, 100)
    // cam = createCapture(VIDEO)
    // cam.size(320, 240)
    // cam.hide()
}

function draw() {
    // Lighting
    // let dx = mouseX - width / 2
    // let dy = mouseY - height / 2
    // let v = createVector(-dx, -dy, -500)
    // v.normalize();
    // directionalLight(255, 255, 255, v)
    // pointLight(255, 0, 0, mouseX - 200, mouseY - 200, 200)
    directionalLight(255, 255, 255, 0, 1, -1)
    // ambientLight(255)

    camera(0, 0, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0)

    background(0, 200, 255);

    let sinAngle = 0
    let sinAngle2 = 0
    let sinAngle3 = 0

    angle += 0.05
    sinAngle += sin(angle)
    sinAngle2 += sin(angle / 2)
    sinAngle3 += sin(angle / 3)

    push()
    rotateX((26 + 2 * sinAngle2) * PI / 30)
    rotateZ((-2 + sinAngle) * PI / 30)
    rotateY((2 * sinAngle3) * PI / 30)
    // rotateZ(angle * 1.2)

    noStroke()
    ambientMaterial(255)
    // texture(cam)
    // texture(planetex)
    texture(graphics)
    // box(100)
    scale(50);
    model(plane1)
    pop()

    translate(0, 200)
    rotateX(PI / 2)
    ambientMaterial(0, 255, 0)
    noStroke()
    plane(1000, 1000)
}

// function mouseDragged() {
//     fill(255);
//     noStroke();
//     ellipse(mouseX, mouseY, 20, 20);
// }

