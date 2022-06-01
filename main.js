noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWrsitX = 0;




function setup(){
    canvas = createCanvas(500 , 400)
     
    canvas.position(560 , 100)
    
    video = createCapture(VIDEO)
    video.size(500 , 400)
    
    Posenet = ml5.poseNet(video,modelLoaded)
    
    Posenet.on('pose',gotPoses)
    }
    function modelLoaded(){
    console.log("modelLoaded")
    }
    function gotPoses(results){
    if (results.length>0) {
       console.log(results) 

       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
       console.log("noseX = " + noseX + "noseY = " + noseY);

       leftWrsitX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWrsitX - rightWristX);

    }
   
    }

    function modelLoaded() {
      console.log('Posenet Is Initialized');
  }
  
  function draw() {
      background('lightblue');
      fill('red');
      stroke('red');
      textSize(difference);
      text('🍊', noseX, noseY);
  }