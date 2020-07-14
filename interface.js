
	//init object globally
	var objImage= null;
	function init(){
		objImage=document.getElementById("moveit");				
		objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';
	}
	function getKeyAndMove(e){				
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				moveLeft();
				break;
			case 38: //Up arrow key
				moveUp();
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;						
		}
	}
	function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-12 +'px';
		objImage.style.transform = "rotate(180deg)";
 document.getElementById('location').innerHTML = '<font color="green">Leftwards</font>';
	}
	function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-12 +'px';
		objImage.style.transform = "rotate(270deg)"; 
		 document.getElementById('location').innerHTML = '<font color="green">Upwards</font>';
	}
	function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+12 +'px';
 
				objImage.style.transform = "rotate(360deg)";  
				 document.getElementById('location').innerHTML = '<font color="green">Rightwards</font>';
	}
	function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+12 +'px';
		objImage.style.transform = "rotate(90deg)"; 
		 document.getElementById('location').innerHTML = '<font color="green">Downwards</font>';

	}
	window.onload=init;
 