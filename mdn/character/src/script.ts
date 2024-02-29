
const canvas : HTMLCanvasElement = document.querySelector(".gameCanvas")!;
const ctx = canvas.getContext("2d")!;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const imagePath = "./walk-right.png";


type IO<A> = {io:A}



function init() : IO<{}> {
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    
    ctx.fillStyle = "rgb(0 0 0)";
    ctx.fillRect(0,0,windowWidth, windowHeight);
    
    ctx.translate(windowWidth/2, windowHeight/2);


    const image = new Image();
    image.src = imagePath;
    image.onload = draw;

    let sprite = 0;
    let posX = 0;

    function draw() {
        ctx.fillRect(-(windowWidth/2),-(windowHeight/2),windowWidth, windowHeight);
        ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74,102,148)

        if(posX % 13 === 0){
            sprite = (sprite === 5) ? 0 : sprite + 1;
        }
        posX = (posX > windowWidth/2) ? Math.ceil(-windowWidth/2 + 102) : posX + 2;

        window.requestAnimationFrame(draw);
    }

    return {io:{}};
}



init();


