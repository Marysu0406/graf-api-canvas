window.onload = function() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    // Dibujar un rectángulo
    function drawRect() {
        ctx.beginPath();
        ctx.rect(50, 50, 150, 100);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }
    

    // Dibujar un triángulo
    function drawTriangle() {
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(150, 50);
        ctx.lineTo(200, 100);
        ctx.closePath();
        ctx.fillStyle = 'green';
        ctx.fill();
    }
    
    // Dibujar una línea
    function drawLines() {
        ctx.beginPath();
        ctx.moveTo(50, 300);
        ctx.lineTo(250, 300);
        ctx.lineTo(250, 400);
        ctx.lineTo(50, 400);
        ctx.closePath();
        ctx.stroke();
    }
    

    // Dibujar un arco (círculo)
    function drawArc() {
        ctx.beginPath();
        ctx.arc(300, 300, 50, 0, Math.PI * 2, false); // Círculo completo
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
    

    // Dibujar una curva Bézier
    function drawBezier() {
        ctx.beginPath();
        ctx.moveTo(50, 500);
        ctx.bezierCurveTo(150, 400, 250, 600, 350, 500);
        ctx.stroke();
    }
    
};