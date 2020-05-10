SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});



//song 1
$(document).ready(function() {
  SC.stream('/tracks/165512532', function(sound) {
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 2

$(document).ready(function() {
  SC.stream('/tracks/56842482', function(sound) {
    $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});

//song 3

$(document).ready(function() {
  SC.stream('/tracks/3599578', function(sound) {
    $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});

//song 4

$(document).ready(function() {
  SC.stream('/tracks/113736293', function(sound) {
    $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
  
//song 5

$(document).ready(function() {
  SC.stream('/tracks/184324900', function(sound) {
    $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});




