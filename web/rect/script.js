// Get a reference to the canvas element
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// Initial position and velocity of the rectangle
var x = 50;
var y = 50;
var dx = 2;
var dy = 2;
var rectWidth = 50;
var rectHeight = 30;
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
