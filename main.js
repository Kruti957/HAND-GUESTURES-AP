prediction_1="";
prediction_2="";

Webcam.set
({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="cptured_image" src="'+ data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);

classsifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4_b2p1SKB//model.json',model_loded);

function model_loded()
{
    console.log('model is loaded');
}

