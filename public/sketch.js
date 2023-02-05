let angle = 0

let kitten
// let cam
let plane1
let planetex
let graphics
let graphics2
let graphics3

let sliderAmbLight
let sliderDirLight

let colorPicker1
let colorPicker2
let colorPicker3

function preload() {
    kitten = loadImage('kitten0.jpg')
    planetex = loadImage('PlaneTex.png')
    plane1 = loadModel('AirPlane.obj')
    planeBody = loadModel('AirPlaneBody2.obj')
    planeProp = loadModel('AirPlaneProp2.obj')
    tree1 = loadModel('lowpolytree2.obj')
    cloud = loadModel('cloud2.obj')

}

function setup() {
    createCanvas(400, 400, WEBGL);
    perspective(PI / 3, width / height, ((height / 2) / tan(PI / 6)) / 10, ((height / 2) / tan(PI / 6)) * 3)

    //Plane
    graphics = createGraphics(200, 200)

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
    graphics3.noStroke()
    graphics3.fill(240, 200)
    graphics3.rect(0, 0, 200, 200)
    // cam = createCapture(VIDEO)
    // cam.size(320, 240)
    // cam.hide()


    // Controls
    let p0 = createP('Lighting');
    p0.style('font-size', '24px');
    p0.style('margin', '0px');
    p0.position(450, 30);
    // AmbLight
    sliderAmbLight = createSlider(0, 255, 100);
    sliderAmbLight.position(450, 80);
    sliderAmbLight.style('width', '130px');
    let p1 = createP('Ambient');
    p1.style('font-size', '24px');
    p1.style('margin', '0px');
    p1.position(600, 80);
    // DirLight
    sliderDirLight = createSlider(0, 255, 255);
    sliderDirLight.position(450, 130);
    sliderDirLight.style('width', '130px');
    let p2 = createP('Directional');
    p2.style('font-size', '24px');
    p2.style('margin', '0px');
    p2.position(600, 130);
    // ColorPickers
    let p03 = createP('Plane Colours');
    p03.style('font-size', '24px');
    p03.style('margin', '0px');
    p03.position(450, 180);
    colorPicker1 = createColorPicker('#0000FF');
    colorPicker1.position(450, 230);
    let p3 = createP('Primary');
    p3.style('font-size', '24px');
    p3.style('margin', '0px');
    p3.position(510, 230);
    colorPicker2 = createColorPicker('#FF0000');
    colorPicker2.position(450, 280);
    let p4 = createP('Secondary');
    p4.style('font-size', '24px');
    p4.style('margin', '0px');
    p4.position(510, 280);
    colorPicker3 = createColorPicker('#FFFF00');
    colorPicker3.position(450, 330);
    let p5 = createP('Tertiary');
    p5.style('font-size', '24px');
    p5.style('margin', '0px');
    p5.position(510, 330);
}

function draw() {

    graphics.noStroke()
    graphics.fill(colorPicker1.color())
    graphics.rect(0, 0, 100, 100)
    graphics.fill(colorPicker2.color())
    graphics.rect(100, 0, 100, 100)
    graphics.fill(colorPicker3.color())
    graphics.rect(0, 100, 100, 100)
    graphics.fill(200)
    graphics.rect(100, 100, 100, 100)

    // Lighting
    let val1 = sliderAmbLight.value();
    let val2 = sliderDirLight.value();

    // let dx = mouseX - width / 2
    // let dy = mouseY - height / 2
    // let v = createVector(-dx, -dy, -500)
    // v.normalize();
    // directionalLight(255, 255, 255, v)
    // pointLight(255, 0, 0, mouseX - 200, mouseY - 200, 200)
    directionalLight(val2, val2, val2, 0, 1, -1)
    ambientLight(val1)



    let sinAngle = 0
    let sinAngle2 = 0
    let sinAngle3 = 0


    background(0, 4 * max(val1, val2) / 5, max(val1, val2));

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
        translate(i * 50, -140, (angle * 80 + random(-1000, 1000)) % 1200 - 600)
        ambientMaterial(255)
        texture(graphics2)
        scale(30);
        model(tree1)
        pop()
    }

    randomSeed(99);
    for (let i = -10; i < 10; i++) {
        push()
        noStroke()
        rotateX(PI)
        // randomSeed(300)
        translate(i * 120, 30 + random(-100, 300), (angle * 80 + random(-1000, 1000)) % 1400 - 700)
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

