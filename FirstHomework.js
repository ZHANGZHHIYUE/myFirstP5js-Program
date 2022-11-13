let valueX; 
let valueY; 
  
function setup() { 
      
    // Create Canvas 
    createCanvas(500, 500); 
} 
   
function draw() { 
      
    // Set background color 
    background(200);  
      
    fill('green'); 
      
    // Set font size 
    textSize(25); 
      
    text('Click mouse to change color', 30, 30); 
      
    // Fill color according to mouseMoved()  
    fill(valueX, 255-valueY, 255-valueX); 
      
    // Draw ellipse
    ellipse(mouseX, mouseY, 115, 115); 
   
    fill(valueY, 255-valueX, 255-valueX); 
     // Draw rectangle  
    rect(mouseX, mouseY+115, 115, 115); 
   
    fill(255-valueY, 255-valueY, 255-valueY); 
    rect(mouseX-115, mouseY+115, 115, 115); 
} 
  
function mouseReleased() { 
    valueX = mouseX%255; 
    valueY = mouseY%255; 
}
