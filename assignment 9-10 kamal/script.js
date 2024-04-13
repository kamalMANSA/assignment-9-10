(() => {
  document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("paintCanvas");
    const context = canvas.getContext("2d");
    let painting = false;

    let brushColor = "black";
    let brushSize = 5;
    context.lineWidth = brushSize;
    
    document.getElementById("blueBtn").addEventListener("click", function() {
      brushColor = "blue";
    });
    document.getElementById("blackBtn").addEventListener("click", function() {
      brushColor = "black";
    });
    document.getElementById("redBtn").addEventListener("click", function() {
      brushColor = "red";
    });
    document.getElementById("yellowBtn").addEventListener("click", function() {
      brushColor = "yellow";
    });
    document.getElementById("eraserBtn").addEventListener("click", function() {
      brushColor = "white"; 
    });  document.getElementById("clearBtn").addEventListener("click", function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
    document.getElementById("brushSize").addEventListener("input", function() {
      brushSize = parseInt(this.value);
      context.lineWidth = brushSize;
    });

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    function startPosition(event) {
      painting = true;
      draw(event);
    }
    function finishedPosition() {
      painting = false;
      context.beginPath();
    }

    function draw(event) {
      if (!painting) return;
      context.lineCap = "round";
      context.strokeStyle = brushColor;
      context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }
  });
})();
