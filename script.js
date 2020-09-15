//div with fixed dimensions with IDs so i can compare them
// remove child, append child
// if im doing with flex, you can prepend instead of append.

//each move consists of appending the pancake to the new tower
//and removing the pancake from the previous tower. 

//for sake of simplicity:
//event listener for click. 
    //where the top child is selected maybe highlighted?
//event listener for another click
    //checks if first child is larger than it. if true, move
    // if false, do nothing 
    // if click on same tower, will not count as move

const newGameButton = document.querySelector('#newGameButton');
newGameButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.location.reload(true);
    // document.querySelector('#suddenDeathButton').style.visibility = "visible";

});

const undoButton = document.querySelector('#undoButton');
undoButton.addEventListener('click', function(event) {
    document.querySelector('#undoImage').style.visibility = "visible";
    document.querySelector('#newGameButton').style.borderColor = "red";
    document.querySelector('#newGameButton').style.borderWidth = "thick";

});

const suddenDeathButton = document.querySelector('#suddenDeathButton');
suddenDeathButton.addEventListener('click', function() {
    let timeLeft = 10;
    suddenDeath = true;
    const timer = setInterval(function(){ 
        if(timeLeft >= 0){
            if(array3.length === 3 && suddenDeath){
                document.querySelector('.messages').innerText = "Sudden Death Mode DEFEATED"
                
            } else {
                document.querySelector(".timer").innerText = timeLeft;
            }
        } else if (timeLeft < 0 && array3.length !== 3 && suddenDeath){
            document.querySelector('.messages').innerText = "Sudden Death Mode FAILED";
            document.querySelector('body').style.background = "red";
            clearInterval(timer);
            
        }
        timeLeft -= 1;
    }, 1000);
 
});
// would like to have a different resetBoard function. But I want to spend more time styling. 
// function resetGameBoard() {
//     array1 = [3,2,1];
//     array2 = [];
//     array3 = [];

//     for(i = 3; i< endArray.length; i--){
//         const towerName = document.querySelector('#pancake1').parentElement.id;
        
//         tower1.removeChild(tower1.childNodes[0]);
//         startTower.removeChild(selection);
//         endTower.prepend(selection);
//     }
// }

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



//this is how you set up two functions in a eventListener
// document.querySelector('.pancakes').addEventListener('click', () => {
//     selectPancake();
//     selectTower();
// });

document.querySelector('#pancake1').addEventListener('click', selectTower)
document.querySelector('#pancake2').addEventListener('click', selectTower)
document.querySelector('#pancake3').addEventListener('click', selectTower)




function selectTower() {
    console.log("select tower")
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

    console.log("starting at tower 1")
}
function tower2Start() {
    startTower = tower2;
    startArray = array2;
    selectedPancake = startArray[startArray.length-1]
    console.log("starting at tower 2")
    selectPancake();
}
function tower3Start() {
    startTower = tower3;
    startArray = array3;
    selectedPancake = startArray[startArray.length-1]
    console.log("starting at tower 3")
    selectPancake();
}


function selectPancake() {
    console.log("pancake " + selectedPancake + " selected");
    console.log(startArray)

    document.querySelector(`#pancake${selectedPancake}`).style.border = "2px solid red";
    
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

    console.log("ending tower 1")
    pancakeCheck()
}
function tower2End() {
    endTower = tower2;
    endArray = array2;
    lowerPancake = endArray[endArray.length-1]
    console.log("ending tower 2")
    pancakeCheck()

}
function tower3End() {
    endTower = tower3;
    endArray = array3;
    lowerPancake = endArray[endArray.length-1]
    console.log("ending tower 3")
    pancakeCheck()
}


function pancakeCheck() {
    if (endArray.length === 0) {
        movePancake();
        console.log("if")
        tower1.removeEventListener('click', tower1End);
        tower2.removeEventListener('click', tower2End);
        tower3.removeEventListener('click', tower3End);
    } else if (endArray[0] === startArray[0]){
        console.log("same tower")
        count --;
        movePancake();
        tower1.removeEventListener('click', tower1End);
        tower2.removeEventListener('click', tower2End);
        tower3.removeEventListener('click', tower3End);
    } else if (selectedPancake <= lowerPancake) {
        movePancake();
        console.log("2nd")
        tower1.removeEventListener('click', tower1End);
        tower2.removeEventListener('click', tower2End);
        tower3.removeEventListener('click', tower3End);
    } else {
        console.log("dont do anything")
        document.querySelector(`#pancake${selectedPancake}`).style.border = "none";
        selectPancake();
        
    }
}


function movePancake() {
    count ++;
    document.querySelector('#count').innerText = count;
    console.log(count)
    const selection =document.querySelector(`#pancake${selectedPancake}`)
  
     // const towerName = document.querySelector('#pancake1').parentElement.id;
    // console.log(towerName)
    
    console.log("move function")
    console.log("move pancake " + selectedPancake + " to tower" + tower)

    startArray.pop();
    endArray.push(selectedPancake);
    console.log(endArray);
    console.log(startArray)



    //const tempPancake = document.querySelector('.pancakes');
    selection.style.border = "none";
    // tower1.removeChild(tower1.childNodes[0]);
    // tower2.prepend(tempPancake);

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

