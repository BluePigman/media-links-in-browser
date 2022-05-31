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
    if (url.includes("i.vsco.co/")){
        console.log(url);
        image.src = url;
        // (async () => {
        //     const res = await fetch(url)
        //     const blob = await res.blob()
        //     const img = new Image()
        //     img.src = URL.createObjectURL(blob)
          
        //     // newer promise based version of img.onload
        //     await img.decode()
            
        //     document.body.append(img)
          
        //     // Don't forget to revoke the blob url when 
        //     // you no longer need it (to release memory)
        //     URL.revokeObjectURL(img.src)
        //   })()
          
    }
}
    

function startFromInput(){
    window.location.href = thisSite + "?" + inputField.value;
}


startFromUrl();
