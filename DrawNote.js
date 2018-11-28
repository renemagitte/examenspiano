function DrawNote(elem, x, y){

  var _instance = this;
  var _note;

  var _y;
  var _x;
	
	function init() {
    _y = y;
    _x = x;
    _note = elem;
    console.log(_x);
    console.log(_y);

  
  }

  this.draw = function() {

    console.log(_note);


    
    _note.fillStyle = "black";
    _note.fillRect(_x, _y, 5, 10);
    
  }




	
	init();
	return _instance;

}