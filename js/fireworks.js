var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse ={
	x:undefined,
	y:undefined
};
var circleArray = [];
window.addEventListener('mousedown', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse.x, mouse.y);
	
})
function Circle(x,y){
	
	this.draw() = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
		c.fillStyle = this.color
		c.fill();
		
		
	}
	this.update() = function(){
		
		this.draw()
	}
	
}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,	innerHeight);
	for(var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}
	
}
animate();