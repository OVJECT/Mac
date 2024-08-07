// 비디오 스트림에 대한 제약 조건 설정
var constraints = { video: { facingMode: "environment" }, audio: false };
// 상수 정의
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);


//라인
function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
};
var LINES = $(window).height() / $('.LINE').outerHeight(true);
multiplyNode(document.querySelector('.LINE'), LINES, true);

//방향센서
window.addEventListener('deviceorientation', function(event) {
  document.getElementById('MPP').style.webkitTransform =
  document.getElementById('MPP').style.transform =
         'rotateX(' + event.beta + 'deg) ' +
         'rotateY(' + event.gamma + 'deg) ' +
         'rotateZ(' + event.alpha + 'deg)';
});
