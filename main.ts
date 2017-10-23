let inputSquareSide = document.getElementById('input-square-side');
let inputRectangleWidth = document.getElementById('input-rect-width');
let inputRectangleHeight = document.getElementById('input-rect-height');
let inputTriangleHeight = document.getElementById('input-tri-height');
let inputCircleRadius = document.getElementById('input-circ-radius');

let shapeNameLabel = document.getElementById('shape-name');
let shapeWidthLabel = document.getElementById('shape-width');
let shapeHeightLabel = document.getElementById('shape-height');
let shapeRadiusLabel = document.getElementById('shape-radius');
let shapeAreaLabel = document.getElementById('shape-area');
let shapePerimeterLabel = document.getElementById('shape-perimeter');

document.getElementById('circle-btn').addEventListener('click', createCircle);
document.getElementById('triangle-btn').addEventListener('click', createTriangle);
document.getElementById('rectangle-btn').addEventListener('click', createRectangle);
document.getElementById('square-btn').addEventListener('click', createSquare);
document.createNewElement('div').id("canvas")

let canvas: documentGetElementById('canvas');


class shape{

    height: number;
    width: number;
    div: HTMLDivElement;

   

    constructor(){
        this.div = document.createElement('div');
        this.div.className = 'shape';
        this.div.addEventListener('click', function(){
            this.describe()
        }.bind(this));
        document.body.appendChild(this.div);
    }
    
 
    
        createCircle(){
            let inputRadius = inputCircleRadius.value;
            new Circle(inputRadius);
        }

        createTriangle() {
            new Triangle(inputTriangleHeight.value);
        }
        createRectangle() {
            new Rectangle(inputRectangleWidth.value, inputRectangleHeight.value);
        }
        createSquare() {
            new Square(inputSquareSide.value);
        }
        
        Shape(width, height) {
            this.width = width;
            this.height = height;
        }
        draw() {
            this.div = document.createElement('div');
            this.div.className = 'shape ' + this.cssClass;
            let x = Math.floor(Math.random() * (600 - this.width));
            let y = Math.floor(Math.random() * (600 - this.height));

            this.div.style.top = y + 'px';
            this.div.style.left = x + 'px';
            this.div.style.width = this.width + 'px';
            this.div.style.height = this.height + 'px';

            this.div.addEventListener('click', this.describe.bind(this));

            this.div.addEventListener('dblclick', =>{
                this.div.remove();

            canvas.appendChild(this.div);
            } 

          describe() {
                shapeNameLabel.innerText = this.constructor.name;
                shapeWidthLabel.innerText = this.width;
                shapeHeightLabel.innerText = this.height;
                shapeRadiusLabel.innerText = this.radius;
                shapeAreaLabel.innerText = this.area();
                shapePerimeterLabel.innerText = this.perimeter();
            }

    }




       
    }

    buildShape( draw: number){
        console.log("success");
    }

    let myshape = new shape(this.height, this.shape, this.radius);
   myshape.buildShape(draw, 0);
}

class circle  extends shape{
    constructor(theradius: number){
        radius: number;
        super(radius);
    }
}

class square extends shape{
    let input;
}







    
