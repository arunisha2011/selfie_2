var speechRecognition=window.webkitSpeechRecognition
var recognition=new speechRecognition()
function Start(){
document.getElementById("textbox").innerHTML=" "
recognition.start()
}
recognition.onresult=function Run(event){
console.log(event)
var text_content=event.results[0][0].transcript
console.log(text_content)
document.getElementById("textbox").innerHTML=text_content
Speak()
}
function Speak(){
    var synth=window.speechSynthesis
    var speak_data=document.getElementById("textbox").value
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
    console.log("it is working")
    Webcam.attach(camera)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})
var camera=document.getElementById("camera")