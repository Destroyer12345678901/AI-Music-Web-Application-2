iphonealarm= "";
iphone6 = ""; 
function preload(){
 //iPhone_alarm = loadSound('iPhoneAlarm.mp3');
 //iPhone_6 = loadSound('DefaultRingtone.mp3');
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
        image(video, 0, 0, 500, 500);
}