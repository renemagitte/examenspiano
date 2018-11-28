// (function() {

  var playing = false;
  var playheadAt = 0;

  var noteLayer = 0;

  var noteNames = [];


  var myVar;

    var keyY = [
    { code: 65, y: 250},  // 0, 65, A, c
    { code: 87, y: 240},  // 1, 87, W, c#
    {code: 83, y: 230},  // 2, 83, S, d
    {code: 69, y: 220},  // 3, 69, S, d#
    {code: 68, y: 210},  // 4, 68, D, e
    {code: 70, y: 200},  // 5, 70, F, f
    {code: 84, y: 190},  // 6, 84, T, f#
    {code: 71, y: 180},  // 7, 71, T, g
    {code: 89, y: 170},  // 8, 89, Y, g#
    {code: 72, y: 160},  // 9, 72, H, a
    {code: 85, y: 150},  // 10, 85, U, b / a#
    {code: 74, y: 140},  // 11, 74, J, h
    {code: 75, y: 130},  // 12, 75, K, c (2)
    {code: 79, y: 120},  // 13, 79, O, c# (2)
    {code: 76, y: 110},  // 14, 78, L, d (2)
    {code: 80, y: 100},  // 15, 80, P, d# (2)
    {code: 186, y: 90}, // 16, 186, Ö, e (2)
    {code: 222, y: 80}, // 17, 222, Ä, f (2)
    {code: 221, y: 70}, // 18, 221, ^, f# (2)
    {code: 13, y: 60},  // 19, 13, enter, g (2)
    {code: 188, y: 50}, // 20, 188, ,, g# (2)
    {code: 93, y: 40},  // 21, 93, cmd right, a (2)
    {code: 190, y: 30}, // 22, 190, ., b / a# (2)
    {code: 18, y: 20},  // 23,18, alt right :--( , h (2)
    {code: 189, y: 10}, // 24, 189, -, c (3)
    {code: 16, y: 0}  // 25, 16, shift right, c# (3)
  ]



  var _stopButton = document.querySelector('.stopButton');
  _stopButton.addEventListener('click', stop);

  var _playPauseButton = document.querySelector('.playPauseButton');
  _playPauseButton.addEventListener('click', setPlayPause);



    function updateCanvas(x){


      var canvas = document.getElementById('noteCanvas1');
      var c = canvas.getContext('2d');

      /* Clear canvas */
      c.clearRect(0, 0, 860, 400);

      /* Clear canvas */
      c.beginPath();
      c.moveTo(x, 0);
      c.lineTo(x, 400);
      c.lineWidth = 1;
      c.strokeStyle = '#000000'
      c.stroke();
    }



    function setPlayPause(){
      playing = playing ? false : true;
      playing ? _playPauseButton.innerText='Pause' : _playPauseButton.innerText='Play';

      if(playing){
        myVar = setInterval(play, 100);
      }

      if(!playing){
        clearInterval(myVar);
      }

    }



    function stop(){

      clearInterval(myVar);
      playing = playing ? false : true;
      playheadAt = 0;

      updateCanvas(playheadAt);
    }


    function updatePlayhead(){
      updateCanvas(playheadAt);
    }


    function play(){
      playheadAt = playheadAt + 1;
      updateCanvas(playheadAt);
    }

    function drawNote(code){

      // noteLayer++
      // var newNote = 'note' + noteLayer;


      // Works one note:
      // var newNote;
      // newNote2Y = getY(code);
      // var canvas2 = document.getElementById('noteCanvas2');
      // newNote = canvas2.getContext('2d');
      // newNote.fillStyle = "black";
      // newNote.fillRect(playheadAt, newNote2Y, 5, 10);

    
      newNote2Y = getY(code);
      noteLayer++
      let note = 'note' + noteLayer;
      noteNames.push(note);
      var canvas2 = document.getElementById('noteCanvas2');

      console.log(noteNames);
      console.log(noteLayer);
      console.log(noteNames[0]);
      noteNames[noteLayer] = canvas2.getContext('2d');
      noteNames[noteLayer].fillStyle = "black";
      noteNames[noteLayer].fillRect(playheadAt, newNote2Y, 5, 10);



    }


    function getY(code){

      var obj = findObjectByKey(keyY, 'code', code);

      return(obj.y);

    }

    function findObjectByKey(array, key, value) {
      for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
  }



    updateCanvas(playheadAt);
 

  // })();
