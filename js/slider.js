//extracting thex property of the image numbers
	var imgWidth = 900;
	var active = 1;
	var slider = document.getElementsByClassName("sliderLong")[0];
	var sliderLong = slider.children[0];
	var slides = slider.children;

  //here is the left click function
  var leftclick = document.getElementById("leftArrow");
  leftclick.onclick = function() {leftClickFunction()};
  function leftClickFunction(){
    showPreviousImage();
    console.log("left clicked:");
  }

  //here is right click function
  var rightclick = document.getElementById("rightArrow");
  rightclick.onclick = function() {rightClickFunction()};
  function rightClickFunction(){
    showNextImage();
    console.log("right clicked:");
  }
  //navigation function here
  createNavBar(slides.length);

	function slide(){  
		active = active == slides.length ? active = 1 : ++active;
		var ml = (imgWidth * (active-1) * -1);
		var animator = new Animator(sliderLong);
		animator.animate("margin-left",ml,400);
    changeState(active, slides.length);
	}
  setInterval(slide,3000);


  //show next slide
  function showNextImage() { 
    if (active != 4) {
      active = active == slides.length ? active = 1 : ++active;
      var mar = parseInt(window.getComputedStyle(sliderLong).getPropertyValue('margin-left'));
      if(mar % (-900) < 20){
        var ml = (imgWidth * (active-1) * -1);
        var animator = new Animator(sliderLong);
        animator.animate("margin-left",ml,100);
        changeState(active, slides.length);
      }
    }
  }
  //function to show the previous image
  function showPreviousImage(){
    if (active != 1) {
      active--;
      var mar = parseInt(window.getComputedStyle(sliderLong).getPropertyValue('margin-left'));
      if(mar % (-900) < 20){
        var ml = (imgWidth * (active-1) * -1);
        var animator = new Animator(sliderLong);
        animator.animate("margin-left",ml,100);
        changeState(active, slides.length);
      }
    }
  }


//navigator generator
    function createNavBar(numberOfImg){
    var ul = document.createElement('UL');
    ul.style.width = '100%';
    ul.style.height = 'auto';
    ul.style['list-style'] ="none";
    for (var i = 0; i < numberOfImg; i++) {
      var li1 = document.createElement('li');
      li1.style.float = 'left';
      var div1 = document.createElement('DIV');
      div1.id=i;
      div1.addEventListener('click',function(){
        var mar = parseInt(window.getComputedStyle(sliderLong).getPropertyValue('margin-left'));
        if(mar % (-900) < 20){
          active = this.id;
          var ml = (imgWidth * (active) * -1);
          var animator = new Animator(sliderLong);
          animator.animate("margin-left",ml,100);
          console.log("val:",ml);
          changeState(active, slides.length);
        }
      });
      div1.style.width = '20px';
      div1.style.height = '20px';
      if (i == 0) {
        div1.style.background = 'red';
      }
      else{
        div1.style.background = 'blue';
      }
      div1.style['border-radius'] ='10px';
      div1.style['margin-left'] = '10px';
      li1.appendChild(div1);
      ul.appendChild(li1);
    }

    var myid = document.getElementById('navDiv');
    myid.style.top = '250px';
    myid.style.left = imgWidth/2 - (slides.length/2) * 30;
    myid.appendChild(ul);
  }


  //position navigator
  function changeState(pos,length){
    var navbar = document.getElementById("navDiv");
    var navul = navbar.children[0];
    var navlist = navul.children;
    for (var i = 0; i < length; i++) {
      if (i == pos -1 ) {
        navlist[i].children[0].style.background = 'red';
      }
      else{
         navlist[i].children[0].style.background = 'blue';
      }
    }
  }