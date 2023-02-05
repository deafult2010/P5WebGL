let angle = 0

let kitten
// let cam
let plane1
let planetex
let graphics
let graphics2
let graphics3

function preload() {
    kitten = loadImage('kitten0.jpg')
    planetex = loadImage('PlaneTex.png')
    plane1 = loadModel('AirPlane.obj')
    planeBody = loadModel('AirPlaneBody2.obj')
    planeProp = loadModel('AirPlaneProp2.obj')
    tree1 = loadModel('lowpolytree2.obj')
    cloud = loadModel('cloud.obj')

}

function setup() {
    createCanvas(400, 400, WEBGL);
    perspective(PI / 3, width / height, ((height / 2) / tan(PI / 6)) / 10, ((height / 2) / tan(PI / 6)) * 3)

    graphics = createGraphics(200, 200)
    graphics.fill(0, 0, 255)
    graphics.rect(0, 0, 100, 100)
    graphics.fill(255, 0, 0)
    graphics.rect(100, 0, 100, 100)
    graphics.fill(255, 255, 0)
    graphics.rect(0, 100, 100, 100)
    graphics.fill(200)
    graphics.rect(100, 100, 100, 100)

    //tree
    graphics2 = createGraphics(200, 200)
    //leaves
    graphics2.fill(139, 146, 22)
    graphics2.rect(0, 0, 200, 200)
    //trunk
    graphics2.fill(121, 68, 59)
    graphics2.rect(0, 0, 80, 65)

    //cloud
    graphics3 = createGraphics(200, 200)
    //leaves
    graphics3.fill(220)
    graphics3.rect(0, 0, 200, 200)
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
    ambientLight(100)

    let sinAngle = 0
    let sinAngle2 = 0
    let sinAngle3 = 0


    background(0, 200, 255);

    angle += 0.05
    sinAngle += sin(angle)
    sinAngle2 += sin(angle / 2)
    sinAngle3 += sin(angle / 3)


    camera(cos(angle / 8) * (height / 2) / tan(PI / 6), 0, sin(angle / 8) * (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0)


    push()
    rotateX((30 + 2 * sinAngle2) * PI / 30)
    rotateZ((-2 + sinAngle) * PI / 30)
    rotateY((2 * sinAngle3) * PI / 30)
    // rotateZ(angle * 1.2)

    noStroke()
    ambientMaterial(255)
    // texture(cam)
    // texture(planetex)
    texture(graphics)
    // box(100)
    scale(30);
    model(planeBody)
    pop()

    push()
    rotateX((30 + 2 * sinAngle2) * PI / 30)
    // rotateX(5 * PI / 6)
    // rotateZ((-2 + sinAngle) * PI / 30)
    rotateZ(angle * 37)
    // rotateY((2 * sinAngle3) * PI / 30)

    noStroke()
    ambientMaterial(255)
    // texture(cam)
    // texture(planetex)
    texture(graphics)
    // box(100)
    scale(30);
    model(planeProp)
    pop()

    push()
    translate(0, 200)
    rotateX(PI / 2)
    ambientMaterial(124, 252, 0)
    noStroke()
    plane(2000, 2000)
    pop()

    randomSeed(99);
    for (let i = -15; i < 15; i++) {
        push()
        noStroke()
        rotateX(PI)
        // randomSeed(300)
        translate(i * 50, -140, (angle * 80 + random(-1000, 1000)) % 1500 - 750)
        ambientMaterial(255)
        texture(graphics2)
        scale(30);
        model(tree1)
        pop()
    }

    randomSeed(99);
    for (let i = -15; i < 15; i++) {
        push()
        noStroke()
        rotateX(PI)
        // randomSeed(300)
        translate(i * 50, 30 + random(0, 200), (angle * 80 + random(-1000, 1000)) % 1500 - 750)
        ambientMaterial(255)
        texture(graphics3)
        scale(30);
        model(cloud)
        pop()
    }
}

// function mouseDragged() {
//     fill(255);
//     noStroke();
//     ellipse(mouseX, mouseY, 20, 20);
// }

