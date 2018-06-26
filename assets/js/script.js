$(document).ready(function(){
  // Start Clock
  startTime();	
  $("#volume").slider({
    min: 0,
    max: 100,
    value: 0,
    range: "min",
    slide: function(event, ui) {
      setVolume(ui.value / 100);
    }
  });
  
  var myMedia = document.createElement('audio');
  $('#player').append(myMedia);
  myMedia.id = "myMedia";

  // Play Audio
  playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);
  
  function playAudio(fileName, myVolume) {
          myMedia.src = fileName;
          myMedia.setAttribute('loop', 'loop');
      setVolume(myVolume);
      myMedia.play();
  }
  
  function setVolume(myVolume) {
  var myMedia = document.getElementById('myMedia');
  myMedia.volume = myVolume;
  }

  // Language Select Card
  $("#lanSelector").click(function(event) {
    event.preventDefault();
    $("#languageSlider").toggle( "slide" );
  });

  // Clock
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
});