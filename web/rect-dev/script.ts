// Get a reference to the canvas element
const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Initial position and velocity of the rectangle
let x = 50;
let y = 50;
let dx = 2;
let dy = 2;
const rectWidth = 50;
const rectHeight = 30;

function drawRectangle() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, rectWidth, rectHeight);

    // Update the position
    x += dx;
    y += dy;

    // Check for collision with the canvas boundaries
    if (x + rectWidth > canvas.width || x < 0) {
        dx = -dx;
    }

    if (y + rectHeight > canvas.height || y < 0) {
        dy = -dy;
    }

    // Request the next animation frame
    requestAnimationFrame(drawRectangle);
}

// Start the animation
drawRectangle();
