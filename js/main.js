


// Start Menus Bar: --------------------------------
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // End Menus Bar: --------------------------------




// Start Working Area ----------------------------
// Read more about this code:
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = brushColor.value;
  context.lineWidth = brushSize.value;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
// End Working Area ------------------------------


// Start panels toggle
let panelsToggle = document.getElementById("panels-toggle");
let panelsContainer = document.getElementById("panels-container");
let brushSize = document.getElementById("brush-size")
let brushColor = document.getElementById("brush-color")
let brushViewerContainer = document.getElementById("brush-viewer-container")
let brushViewer = document.getElementById("brush-viewer")

panelsToggle.onclick = function () {
        panelsContainer.classList.toggle("open");
        brushViewerContainer.classList.toggle("show")
}

function brushSetting() {
  brushViewer.style.width = brushSize.value + "px";
  brushViewer.style.height = brushSize.value + "px";
  brushViewer.style.backgroundColor = brushColor.value;
}


// End panels toggle