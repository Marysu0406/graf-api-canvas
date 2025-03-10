window.onload = function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    if (!canvas || !ctx) {
        console.error("No se encontró el canvas o su contexto.");
        return;
    }

    // Dibujar un rectángulo azul
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 100);

    // Dibujar un triángulo rojo
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(250, 150);
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    // Dibujar una línea negra
    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.lineTo(400, 150);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar un arco verde
    ctx.beginPath();
    ctx.arc(450, 100, 50, 0, Math.PI * 2);
    ctx.strokeStyle = "green";
    ctx.stroke();

    // Dibujar curva Bézier (púrpura)
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.bezierCurveTo(150, 200, 250, 300, 350, 250);
    ctx.strokeStyle = "purple";
    ctx.stroke();

    // Dibujar curva cuadrática (naranja)
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.quadraticCurveTo(150, 200, 250, 300);
    ctx.strokeStyle = "orange";
    ctx.stroke();

    // Dibujar combinación de líneas y figuras
    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(450, 250);
    ctx.lineTo(400, 300);
    ctx.lineTo(350, 250);
    ctx.closePath();
    ctx.fillStyle = "cyan";
    ctx.fill();
};
