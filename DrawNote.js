function DrawNote(layer, x, y){

  var _instance = this;
  var _canvas;
  var _thisNote;

  var _noteY = y;
  var _noteX = x;
	
	function init() {
    _canvas = document.getElementById('noteCanvas2');
    _thisNote = 'note' + layer;
    _thisNote = _canvas.getContext('2d');


  
  }

  this.draw = function() {

    _canvas = document.getElementById('noteCanvas2');
    _thisNote = 'note' + layer;
    _thisNote = _canvas.getContext('2d');


    _thisNote.fillStyle = "black";
    _thisNote.fillRect(_noteX, _noteY, 5, 10);

    console.log("hej");

    return _thisNote;


  }




	
	init();
	return _instance;

}