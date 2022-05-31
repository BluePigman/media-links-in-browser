var thisSite = "https://bluepigman.github.io/media-links-in-browser/";
var regex = thisSite + '\\??';

var inputField = document.getElementById("url");
var video = document.getElementById("video");

inputField.addEventListener("keyup", function(event) {
    if (event.code === "Enter"){
        startFromInput();
    }
});


function startFromUrl() {
    let url = window.location.href.replace(new RegExp(regex,"g"), '');
    inputField.value = url;
    if (url.endsWith(".jpg")){
        image.src = url;
        console.log(url);
    }
    if (url.endsWith(".mp4")){
        video.src = url;
        console.log(url);
    }
}
    

function startFromInput(){
    window.location.href = thisSite + "?" + inputField.value;
}


startFromUrl();
