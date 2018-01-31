var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var organizeFlag = 1
var mouse ={
	x:undefined,
	y:undefined
};


var coding = 11;
var framework = 6;
var utilities = 5;
var methods = 6;
var other = 14;

var maxRadius = 40;
var characterArray =[
	'CSS',
	'HTML',
	'JavaScript',
	'php',
	'C#',
	'Java',
	'MySQL',
	'Python',
	'C++',
	'C',
	'Fortran',
	
	'ASP.NET',
	'AJAX',
	'Three.JS',
	'Laravel',
	'Bootstrap',
	'Django',
	
	'git',
	'Unity3d',
	'Wordpress',
	'Android Studio',
	'Visual Studio',
	
	'Agile',
	'Networking',
	'Waterfall',
	'OOP Design',
	'Game Development',
	'RESTful API',
	
	'Windows Servers',
	'SharePoint',
	'Backup Solutions',
	'Network Security',
	'Microsoft Products',
	'Barracuda Products',
	'WatchGuard Firewalls',
	'VPN Solutions',
	'FreeNAS',
	'VMWare',
	'OpenVPN',
	'Plex Cloud',
	'Azure',
	'AWS',
]
var colorArray = [
	'#4286f4',
	'#f44250',
	'#88af79',
	'#d87824',
	'#f418c1',
];
window.addEventListener('mouseup', function(event){
	organizeFlag = -organizeFlag
	
})
window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
	
})
window.addEventListener('resize', function(event){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	
})

	function Circle(x, y, dx, dy, radius,content,setx,sety){
		this.x = x;
		this.y = y;
		this.dx= dx;
		this.dy= dy;
		this.radius = radius;
		this.minRadius = radius;
		this.content = content;
		this.setx = setx
		this.sety = sety
		this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
		
	this.draw = function(){
		c.beginPath();
		//c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
		c.fillStyle = this.color
		//c.fill();
		c.font = "20px Arial";
		c.fillText(content,this.x,this.y);
	}
		this.update = function(){
			if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
				this.dx = -this.dx
			}if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
				this.dy = -this.dy
			}
			
			
			this.x += this.dx
			this.y += this.dy
			
			this.draw();
		}
		this.display = function(){
			this.x = this.setx;
			this.y = this.sety;
			
			this.draw();
			
			
		}

	
	}
	
var circleArray = [];
for(var i = 0; i <characterArray.length; i++){
	var radius =(Math.random() *3 +1);
	var y = Math.random() * (innerHeight - radius *2) + radius ;    
	var x = Math.random() * (innerWidth - radius *2) + radius;
	var dy = (Math.random() -0.5) * 5;
	var dx = (Math.random() -0.5) * 5;
	console.log(setx, sety)
	if(i < coding){
	var setx = (innerWidth/3.7);
	var sety = 50 * i;
	}
	else if(i < coding + framework){
		var setx = (innerWidth/2);
		var sety = 50 * (i - coding);
	}
	else if(i <coding + framework + utilities)
		{
		var setx = (innerWidth/1.5);
		var sety = 50 * (i - (coding + framework)+1);
	}
	else if (i < coding + framework + utilities + methods)
	{
		var setx = (innerWidth/1.2);
		var sety = 50 * (i - (coding + framework + utilities)+1);
	}
	else if(i < characterArray.length - 5){
		var setx = innerWidth/2;
		var sety = 50 * (i - (coding + framework + utilities)+3);
	}
	else if(i < characterArray.length)
	{
		var setx = innerWidth/1.5;
		var sety = 50 * (i - (coding + framework + utilities)- 6);
	}

	
	circleArray.push(new Circle(x,y,dx,dy,radius,characterArray[i],setx,sety));

}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,	innerHeight);
	if (organizeFlag == 1){
	c.font = "30px Courier";
	c.fillStyle = "Cyan";
	c.textAlign = "center";
	c.fillText("CLICK TO ORGANIZE", canvas.width/2, canvas.height/2); 
	for(var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}
	}else{
	c.font = "30px Courier";
	c.fillStyle = "Cyan";
	c.textAlign = "center";
	c.fillText("Others:", canvas.width/3 +150, canvas.height/2.2); 
	c.fillText("Coding:",  canvas.width/10 +150, canvas.height/25);
	c.fillText("Frameworks:",  canvas.width/3 +150, canvas.height/25);
	c.fillText("Utilities:",  canvas.width/1.9 +150, canvas.height/25);
	c.fillText("Methods:",  canvas.width/1.5 +150, canvas.height/25);
	
	for(var i = 0; i < circleArray.length; i++){
		
		circleArray[i].display();
		
	}
	}
	
	
	
}
	
animate();
