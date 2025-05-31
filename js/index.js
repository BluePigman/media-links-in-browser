var thisSite = "https://bluepigman.github.io/media-links-in-browser/";
var regex = thisSite + "\\??";

var inputField = document.getElementById("url");
var video = document.getElementById("video");

inputField.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    startFromInput();
  }
});

function startFromUrl() {
  let url = window.location.href.replace(new RegExp(regex, "g"), "");
  inputField.value = url;
  
  if (/\.(mp4|mp3|webm|wav|ogg|mov)(\?.*)?$/i.test(url)) {
    video.src = url;
    console.log(url);
  }
  
  else {
    console.log(url);
    image.src = url;
  }
}

function startFromInput() {
  window.location.href = thisSite + "?" + inputField.value;
}

startFromUrl();
