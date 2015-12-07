function BoxAnimation() {
	var box = [];
	var noOfBoxes = 12;

	//create the main holder div
    var body = document.getElementsByTagName("body")[0];
    var mainDiv = document.createElement('DIV');
    mainDiv.setAttribute("class","mainDiv");
    mainDiv.style.width = '1000px';
    mainDiv.style.height = '600px';
    mainDiv.style.border = '1px solid red';
    body.appendChild(mainDiv);


    var mainWidth = parseInt(window.getComputedStyle(mainDiv).getPropertyValue('width'));
    var mainHeight = parseInt(window.getComputedStyle(mainDiv).getPropertyValue('height'));


	this.init = function() {
		for (var i=0; i<noOfBoxes; i++) {
			box[i] = new Box();
      if (i % 2 == 0) {
        box[i].element.setAttribute("class","box green");
      }
      else{
        box[i].element.setAttribute("class","box");
      }
      
      box[i].appendTo(document.getElementsByClassName("mainDiv")[0]);
      box[i].initBoxPos( 70*(i + 1),(i * 40 ));
      box[i].initSpeed(1,-1);
		}
	}

  this.boxAnimate = function(){
    function move(){
      for (var i = 0; i < noOfBoxes; i++) {
        box[i].detectWall(mainWidth,mainHeight,50,50);
        box[i].moveBox();
      };
      for (var i = 0; i < noOfBoxes; i++) {
          for (var j = i+1; j < noOfBoxes; j++) {
            if (box[i].hitTest(box[j],50,50) == true) {
              box[i].reverseDir();
              box[j].reverseDir();
              box[i].moveBox();
              box[j].moveBox();
            };
          };
      };
    }
    setInterval(move,20);
  }
}