(function() {
 
    /* Keycodes in order of appearance in piano. Starting with note C = letter A/keycode 65.  */
    var keyCodes = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 59, 222, 221, 13 ]

    var piano = document.getElementById("piano");

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
            var additionalClass = blackKeyClass(i);
            key = `<div class="key ${additionalClass}" data-key="${keyCodes[i]}"></div>`;

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

    function blackKeyClass(index){
        switch (index) {
            case 1:
            case 3:
            case 6:
            case 8:
            case 10:
            case 13:
            case 15:
            case 18:
            case 20:
            case 22:
            case 25:
                return 'black';
                break; 
            default: 
                return '';
        }
    }



    function pressKey(e){
        e.preventDefault();
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






    



})();
