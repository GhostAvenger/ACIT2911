var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function getUserMediaToPhoto(constraints,success,error) {
    navigator.getUserMedia_ = (navigator.mediaDevices.getUserMedia
        || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia
        || navigator.msGetUserMedia);
    if (!!navigator.getUserMedia_) {
        navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
    }
}
//successfully recall
function success(stream){
    //Video to media stream
    video.srcObject = stream;
    video.play();//play the stream
    //video to canvas
    postFace()
}

function error(error) {
    console.log('Can NOT open the webcam：',error.name,error.message);
}

function postFace() {
    setTimeout(function () {
        context.drawImage(video,0,0,480,320);
        img=canvas.toDataURL('image/jpg');
        img=img.split(',')[1];
        //use ajax to sent pic to the backstage
        $.post({
        url:'/getface',
        data:{
            message:img
        },
        success:function (callback) {
            if(callback=='no'){
                postFace()
            }else {
                window.location.href=callback
            }
        },
        error:function (callback) {
            postFace()
        }
    })
    },300)
}

function faceLogin() {
    if(navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia){
        getUserMediaToPhoto({video:{width:480,height:320}},success,error);
    }else{
        alert("Your brower doesn't support webcam");
    }
};