function Box() {
  var that = this;
	this.element = document.createElement("div");
  //speed and current position for the element
  this.element.speedX = 2;
  this.element.speedY = 2;
  this.element.curPosX = 0;
  this.element.curPosY = 0;
  
  //console.log("Width:",this.element.boxWidth,"Height:",this.element.boxHeight);

  //console.log("Initially--","speedX:",this.element.speedX,"speedY",this.element.speedY);

  //function to append to the parent
	this.appendTo = function(parentElement) {
	 parentElement.appendChild(this.element);
	}

  //function to add class to the element
	this.addClass = function(className){
    //add the class property to the existing class
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
  }


  //here is the function to initialize the  initial Box
  this.initBoxPos = function(posLeft,posTop){
    that.element.style.left = posLeft + 'px';
    that.element.style.top = posTop + 'px';
  }

  //function to initialize the speed of the box
  this.initSpeed = function(speedX,speedY){
    that.element.speedX = speedX;
    that.element.speedY = speedY;
  }

  //function to move the Box
  this.moveBox = function(){
    that.element.curPosX += that.element.speedX;
    that.element.curPosY += that.element.speedY;
    that.element.style.left = that.element.curPosX + 'px';
    that.element.style.top = that.element.curPosY + 'px';
    //console.log("speedX:",that.element.speedX,"speedY",that.element.speedY);
  }

  //function to detect the wall collision
  this.detectWall = function(hSep,ySep,boxW,boxH){
    that.element.curPosX = parseInt(window.getComputedStyle(that.element).getPropertyValue('left')); 
    that.element.curPosY = parseInt(window.getComputedStyle(that.element).getPropertyValue('top'));
    if ((that.element.curPosX <= 0) || (that.element.curPosX >= hSep - boxW)) that.element.speedX = -that.element.speedX;
    if ((that.element.curPosY <= 0) || (that.element.curPosY >= ySep - boxH)) that.element.speedY = -that.element.speedY;
  }

  //function to remove the class 
	this.removeClass = function(className) {
		
	}

  //function hitTest to test collision with other boxes
	this.hitTest = function(box,boxW,boxH) {
    if ((box.element.curPosY + boxH) <= that.element.curPosY) return false;
    else if (box.element.curPosX >= (that.element.curPosX + boxW)) return false;
    else if (box.element.curPosY >= (that.element.curPosY + boxH)) return false;
    else if ((box.element.curPosX + boxW) <= that.element.curPosX) return false;
    return true;   
	}
  //function to reverse the direction
  this.reverseDir = function(){
    that.element.speedX = -that.element.speedX;
    that.element.speedY = -that.element.speedY;
  }

}