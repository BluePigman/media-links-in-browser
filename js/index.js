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
  if (url.includes("cdn.discordapp.com/attachments/")) {
    if (/.mp4|.mp3|.webm|.wav|.ogg$/.test(url)) {
      video.src = url;
      console.log(url);
    } else if (/.jpg|.jpeg|.JPG|.JPEG|.png|.PNG$/.test(url)) {
      image.src = url;
      console.log(url);
    }
  }
  if (/.gif|.svg|.bmp|.webp$/.test(url)) {
    image.src = url;
    console.log(url);
  }
  if (url.endsWith(".mp4")) {
    video.src = url;
    console.log(url);
  }
  if (url.includes("i.vsco.co/")) {
    console.log(url);
    image.src = url;
  }
  if (url.includes("im.vsco.co/")) {
    console.log(url);
    image.src = url;
  }
  if (url.includes("image-aws-us-west-2.vsco.co/")) {
    console.log(url);
    image.src = url;
  }
  if (
    url.includes("cdn.betterttv.net/emote/") ||
    url.includes("cdn.frankerfacez.com/emote/") ||
    url.includes("cdn.7tv.app/emote/")
  ) {
    console.log(url);
    image.src = url;
  }
}

function startFromInput() {
  window.location.href = thisSite + "?" + inputField.value;
}

startFromUrl();
