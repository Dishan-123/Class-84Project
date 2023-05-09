canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))

		{
			aplhabetkey();
		console.log("This is a alphabet key");
       document.getElementById("d1").innerHTML = "This is a alphabet key" 

		}
        if(keyPressed >= 48 && keyPressed <= 57)
		{
			numberkey();
			console.log("This is a number key");
			document.getElementById("d1").innerHTML = "This is a number key"
		}
		if(keyPressed >= 37 && keyPressed <= 40)
		{
			arrowkey();
			console.log("This is a arrow key");
			document.getElementById("d1").innerHTML = "This is a arrow key"
		}

		if((keyPressed == 17) || (keyPressed == 18)|| (keyPressed == 27))
		{
			specialkey();
			console.log("This is a special key");
			document.getElementById("d1").innerHTML = "This is a special key"
		}

		if((keyPressed == 8 && keyPressed == 9 && keyPressed == 13 && keyPressed == 16 && keyPressed == 19 && keyPressed == 20 && keyPressed == 45 && keyPressed == 46) || (keyPressed >= 33 && keyPressed <= 36) || (keyPressed >= 91 && keyPressed <= 93) || (keyPressed >= 106 && keyPressed <= 222))
		{
			otherkey();
			console.log("This is a other key");
			document.getElementById("d1").innerHTML = "This an other key"
		}

	   
	
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add(); 

}
function numberkey()
{
	img_image="numkey.png";
	add(); 
}
function arrowkey()
{
	img_image="Arrkey.png";
	add(); 
}
function specialkey()
{
	img_image="spkey.png";
	add(); 
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
