document.addEventListener('DOMContentLoaded', function() {


    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    var url = tabs[0].url;

    if(url.indexOf("youtube")>0){
        document.getElementById('err').style.display = "none";

        var n = url.indexOf("watch?v=") + 8;
        var source = url.slice(n);
        n = source.indexOf("&");
        if(n>0){
            source = source.substring(0,n)  
        }

        var source1 = 'https://www.download-mp3-youtube.com/api/?api_key=MzA5NjcxMTMz&format=mp3&video_id='+ source + '&button_color=009688&text_color=ffffff';
        document.getElementById('link').src = source1;

        var source1a = 'https://ytbapi.com/dl.php?link=https://www.youtube.com/watch?v='+ source + '&format=mp3&text=fff&color=009688';
        document.getElementById('link1').src = source1a;

        var source2 = 'https://ytbapi.com/dl.php?link=https://www.youtube.com/watch?v=' + source + '&format=mp4&text=fff&color=009688';
        document.getElementById('link2').src = source2;

        console.log(source2);       

    }else{
        document.getElementById('links').style.display = "none";
    }

    });









});

//     "content_security_policy": "script-src 'self' https://www.gstatic.com/; object-src 'self'"
