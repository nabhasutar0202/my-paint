var last_postion_of_x, last_postion_of_y;
color="black";
width_of_line= 1;

canvas = document.getElementById(mycanvas);
ctx= canvas.getContext("2d");

var width = screen.width; 

new_width = screen.width - 70;
new_height = screen.height - 300;
   if(width < 992)
   {
       document.getElementById("mycanvas").width = new_width;
       document.getElementById("mycanvas").height = new_height;
       document.body.style.overflow = "hidden";
   }
      canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    last_postion_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_postion_of_y = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e);
{
    console.log("my_touchMove");
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y cordinates =");
    console.log("x = " + last_postion_of_x + "y = " + last_postion_of_y );
    ctx.moveTo(last_postion_of_x, last_postion_of_y);

    console.log("current position of x and y cordinates =");
    console.log("x = " + current_postion_of_x + "y = " + current_postion_of_y );
    ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y);
    ctx.stroke();

last_postion_of_x = current_position_of_touch_x;
last_postion_of_y = current_position_of_touch_y;

}
function clearArea()
{
    ctx.clearRect(0 , 0 , ctx.canvas.width, ctx.canvas.height);
    
}