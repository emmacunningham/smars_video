var video = document.getElementById('video');
var audio = document.getElementById('audio');

var isVideoLoaded = 0;
var isAudioLoaded = 0;

video.loop = true;
audio.loop = true;

var progressHandler = function(e) {
  if( video.duration ) {
    var percent = (video.buffered.end(0)/video.duration) * 100;
    console.log( percent );
    if( percent >= 100 ) {
      console.log("loaded!");
    }
    video.currentTime++;
  }
};

var loaddata = function(str) {

  console.log('load');
  console.log(str);
  if (isVideoLoaded > 0 && isAudioLoaded > 0) {
    video.play();
    audio.play();
  }
};

video.addEventListener('canplaythrough', function() {
  isVideoLoaded++;
  loaddata('vid');
}, false);

audio.addEventListener('canplaythrough', function() {
  isAudioLoaded++;
  loaddata('aud');
}, false);

var resizeVideo = function() {

  var headerOffset = 0;
  var footerOffset = 0;
  var pageHeightOffset = headerOffset + footerOffset;
  var bodyHeight = $(window).height() - pageHeightOffset;
  var video = $('#video');
  var ratio = $(window).width()/bodyHeight;
  var vidDim = 1920/1080;

  if (ratio > vidDim) {
    video.height('auto');
    video.width('100%');
  }
  else {
    video.width('auto');
    video.height('100%');
  }
};

$(window).resize(function(e) {
  resizeVideo();
});

resizeVideo();

