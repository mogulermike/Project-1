//Tower of Hanoi code.


const newGameButton = document.querySelector('#newGameButton');
newGameButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.location.reload(true);
    // document.querySelector('#suddenDeathButton').style.visibility = "visible";

});

const undoButton = document.querySelector('#undoButton');
const undoImage = document.querySelector('#undoImage');
undoButton.addEventListener('click', function(event) {
    document.querySelector('#undoImage').style.visibility = "visible";
    undoImage.addEventListener('click', function(event) {
        document.querySelector('#undoImage').style.visibility = "hidden";
    });

});

let suddenDeath = false;
const suddenDeathButton = document.querySelector('#suddenDeathButton');
suddenDeathButton.addEventListener('click', function() {
    document.querySelector('body').style.background = "red";
    let timeLeft = 10;
    suddenDeath = true;
    const timer = setInterval(function(){ 
        if(timeLeft >= 0){
            if(array3.length === 3 && suddenDeath){
                document.querySelector('.messages').innerText = "PHEW!! Sudden Death Mode DEFEATED"
                document.querySelector('body').style.background = "lemonchiffon";
                
            } else {
                document.querySelector(".timer").innerText = timeLeft;
            }
        } else if (timeLeft < 0 && array3.length !== 3 && suddenDeath){
            document.querySelector('.messages').innerText = "Sudden Death Mode FAILED";
            document.querySelector('.messages').style.color = "white";
            document.querySelector('body').style.background = "black";
            clearInterval(timer);
            
        }
        timeLeft -= 1;
    }, 1000);
 
});


const towerWrapper = document.querySelector('.towerWrapper');

const pancake1 = document.querySelector('#pancake1');
const pancake2 = document.querySelector('#pancake2');
const pancake3 = document.querySelector('#pancake3');

array1 = [3,2,1];
array2 = [];
array3 = [];

let selectedPancake;
let lowerPancake;
let startArray;
let endArray;
let tower;
let count = 0;


document.querySelector('#pancake1').addEventListener('click', selectTower)
document.querySelector('#pancake2').addEventListener('click', selectTower)
document.querySelector('#pancake3').addEventListener('click', selectTower)




function selectTower() {
    tower1.addEventListener('click', tower1Start);
    tower2.addEventListener('click', tower2Start);
    tower3.addEventListener('click', tower3Start);
    document.querySelector('#pancake1').removeEventListener('click', selectTower)
    document.querySelector('#pancake2').removeEventListener('click', selectTower)
    document.querySelector('#pancake3').removeEventListener('click', selectTower)
}

function tower1Start() {
    startTower = tower1;
    startArray = array1;
    selectedPancake = startArray[startArray.length-1]
    selectPancake();
}
function tower2Start() {
    startTower = tower2;
    startArray = array2;
    selectedPancake = startArray[startArray.length-1]
    selectPancake();
}
function tower3Start() {
    startTower = tower3;
    startArray = array3;
    selectedPancake = startArray[startArray.length-1]
    selectPancake();
}


function selectPancake() {
    document.querySelector(`#pancake${selectedPancake}`).style.border = "2px solid black";
    
    tower1.removeEventListener('click', tower1Start);
    tower2.removeEventListener('click', tower2Start);
    tower3.removeEventListener('click', tower3Start);

    tower1.addEventListener('click', tower1End);
    tower2.addEventListener('click', tower2End);
    tower3.addEventListener('click', tower3End);
}

function tower1End() {
    endTower = tower1;
    endArray = array1;
    lowerPancake = endArray[endArray.length-1]
    pancakeCheck()
}
function tower2End() {
    endTower = tower2;
    endArray = array2;
    lowerPancake = endArray[endArray.length-1]
    pancakeCheck()

}
function tower3End() {
    endTower = tower3;
    endArray = array3;
    lowerPancake = endArray[endArray.length-1]
    pancakeCheck()
}


function pancakeCheck() {
    if (endArray.length === 0) {
        movePancake();
        tower1.removeEventListener('click', tower1End);
        tower2.removeEventListener('click', tower2End);
        tower3.removeEventListener('click', tower3End);
    } else if (endArray[0] === startArray[0]){
        count --;
        movePancake();
        tower1.removeEventListener('click', tower1End);
        tower2.removeEventListener('click', tower2End);
        tower3.removeEventListener('click', tower3End);
    } else if (selectedPancake <= lowerPancake) {
        movePancake();
        tower1.removeEventListener('click', tower1End);
        tower2.removeEventListener('click', tower2End);
        tower3.removeEventListener('click', tower3End);
    } else {
        document.querySelector(`#pancake${selectedPancake}`).style.border = "none";
        selectPancake();
        
    }
}


function movePancake() {
    count ++;
    document.querySelector('#count').innerText = count;
    const selection =document.querySelector(`#pancake${selectedPancake}`)
  

    startArray.pop();
    endArray.push(selectedPancake);

    selection.style.border = "none";


    startTower.removeChild(selection);
    endTower.prepend(selection);
    selection.addEventListener('click', selectTower)


    if (array3.length === 3 && count === 7 && !suddenDeath) {
        document.querySelector('.messages').innerText = "WOW!! You win!!!"
    } else if (array2.length === 3 && !suddenDeath) {
        document.querySelector('.messages').innerText = "oops!! wrong tower"
    } else if (array3.length === 3 && !suddenDeath) {
        document.querySelector('.messages').innerText = count + " moves?? You can do better than that..."
    }
    document.querySelector('#pancake1').addEventListener('click', selectTower)
    document.querySelector('#pancake2').addEventListener('click', selectTower)
    document.querySelector('#pancake3').addEventListener('click', selectTower)
}

