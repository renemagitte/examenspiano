// (function() {
 
    /* Keycodes in order of appearance in piano. Starting with note C = letter A/keycode 65.  */
    var keyCodes = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222, 221, 13, 188, 93, 190, 18, 189, 16 ]

    // var _stopButton = document.querySelector('.stopButton');
    // _stopButton.addEventListener('click', noteCanvas.stop);
  
    // var _playPauseButton = document.querySelector('.playPauseButton');
    // _playPauseButton.addEventListener('click', noteCanvas.setPlayPause);
    
    
    
    
    
    var piano = document.getElementById('piano');

    var keys;
    var numberOfKeys = 26;
    var allKeyElements;

    window.addEventListener('keydown', pressKey);
    window.addEventListener('keyup', unpressKey);

    function buildKeyboard(){
        keys = document.createElement('div');
        keys.classList.add('keys');
        piano.appendChild(keys);

        for(var i = 0; i < numberOfKeys; i++){
            var key;
            var keyClass = getKeyClass(keyCodes[i])
            key = `<div class="key ${keyClass}" data-key="${keyCodes[i]}"></div>`;

            keys.insertAdjacentHTML('beforeend', key);

        }

        // addKeyEventListeners();
        allKeyElements = keys.querySelectorAll('.key');
    }

    buildKeyboard();


    // function addKeyEventListeners(){
    //     var allKeys;
    //     allKeys = keys.querySelectorAll('.key');
    //     console.log(allKeys);
    // }

    function getKeyClass(code){
        switch (code) {
            case 87:
            case 69:
            case 84:
            case 89:
            case 85:
            case 79:
            case 80:
            case 221:
            case 188:
            case 190:
            case 16:
                return 'black';
                break; 
            default: 
                return '';
        }
    }



    function pressKey(e){
        e.preventDefault();

        drawNote(e.keyCode);



            for(var i = 0; i < allKeyElements.length; i++){
                if(e.keyCode == allKeyElements[i].dataset.key){
                allKeyElements[i].classList.add('pressed');
            }
        }
    }

    function unpressKey(e){
        e.preventDefault();
            for(var i = 0; i < allKeyElements.length; i++){
                if(e.keyCode == allKeyElements[i].dataset.key){
                allKeyElements[i].classList.remove('pressed');
            }
        }
    }






    



// })();
