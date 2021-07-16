noseX = 0;
noseY = 0;

right_wristX = 0;
left_wristX = 0;

difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(700,200);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#b7ff00');
    fill('#00ffe5');
    stroke('#000000');
    square(noseX, noseY, difference);
    document.getElementById("sqr_side").innerHTML="Side of Square Will Be:" + difference + "px";
}

function modelloaded(){
    console.log("PoseNet is initialised by Bob The Penguin.")
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY + "I dont think anyone is even gonna see this.");

        right_wristX = results[0].pose.rightWrist.x;
        left_wristX = results[0].pose.leftWrist.x;
        difference = floor(left_wristX - right_wristX);
        console.log("Right Wrist X = " + right_wristX + "Left Wrist X = " + left_wristX + "Difference = " + difference + "I think evryone knows what i want to say here.")

    }
    else{
        console.log("Cause Bob the Penguin was on leave he couldnt fix the problem pls fix the problem on ur own,bye.")
    }
}
