function TestScript(){
    var that = this;
    this.Counter = 0;
    this.ParseImages = function(){
        var LocalSliderDiv = document.getElementById('SliderLong');
        that.SliderDiv = LocalSliderDiv; 
        that.SliderDiv.style.float="center";
        that.SliderDiv.style.position="relative";
        that.Images =  LocalSliderDiv.children;
        that.NumberOfImages = that.Images.length;
        //console.log(' I have set the total Images to '+that.NumberOfImages);
    }
    
    this.AddParagraph = function(ReceivedText) {
		var SliderDiv = document.getElementById("Slider");
		var TestParagraph = document.createElement("P");
		var Text = document.createTextNode(ReceivedText);
		TestParagraph.appendChild(Text);
		SliderDiv.appendChild(TestParagraph);
	}
	
	this.AddSlider = function(SliderID) {
        var SliderDiv = document.getElementById(SliderID);
        var NumberOfSlides = SliderDiv.children;
	}
    this.Animate = function(){
        var SliderDiv = document.getElementById('SliderLong');
        var Images = SliderDiv.children;
        var NumberOfImages = Images.length;
        Images[2].style.display="none";
        Images[0].alt="This is alternate text";
        for(var i = 0; i < NumberOfImages; i++){
            var CurrentImage = Images[i];
            CurrentImage.style.visible="none";
            console.log(CurrentImage);
        }
        //console.log('There are '+Images.length+' Images here');
        
    }
    this.FadeOver = function(ImageOne,ImageTwo) {
		var Op = 0;
		function OpAdjust(){
			ImageOne.style.opacity = 1-Op;
			ImageTwo.style.opacity = Op;
			Op += 0.01;
			if(Op >= 1){
				Op = 0;
				clearInterval(id);
			}
		}
		var id = setInterval(OpAdjust,20);
    }
    
    this.MakeVisible = function(ImageNumber){
        //console.log('I got current '+ImageNumber);
        var SliderDiv = document.getElementById('SliderLong');
        var Images = SliderDiv.children;
        var NumberOfImages = Images.length;
        for(var i = 0; i < NumberOfImages ; i++){
			
            var CurrentImage = Images[i];
            var NextIndex = ( (ImageNumber < NumberOfImages -1 ) ? ImageNumber+1 :0);
            var NextImage = Images[NextIndex]
            //console.log('Current Image is '+ ImageNumber+' and Next is '+NextIndex );
            if (i == ImageNumber || i == NextIndex){
                
                CurrentImage.style.position='absolute';
                NextImage.style.position='relative';
                
                if(NextIndex == 0){
					NextImage.style.position='absolute';
					CurrentImage.style.position = "relative";
				}
				CurrentImage.style.display = "block";
                NextImage.style.display = "block";
            }  else {
                CurrentImage.style.display="none";
            }
            that.FadeOver(CurrentImage,NextImage);
            //console.log(CurrentImage);
        }
    }
    
    
    this.Flip = function() {
        //console.log(' I have '+that.Counter+" value and have "+that.NumberOfImages+' intotal');
        if(that.Counter < that.NumberOfImages - 1)
            that.Counter = that.Counter + 1
        else
            that.Counter = 0;
        that.MakeVisible(that.Counter);
    }
    this.StartAnimate = function(){
        //that.Animate();
        that.ParseImages();
        that.Flip();
        setInterval(that.Flip,2500);
    }
    
}
