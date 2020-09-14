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



//this is how you set up two functions in a eventListener
// document.querySelector('.pancakes').addEventListener('click', () => {
//     selectPancake();
//     selectTower();
// });

document.querySelector('.pancakes').addEventListener('click', selectTower)

function selectTower() {
    console.log("select tower")
    tower1.addEventListener('click', tower1Start);
    tower2.addEventListener('click', tower2Start);
    tower3.addEventListener('click', tower3Start);
}


function tower1Start() {
    startTower = tower1;
    startArray = array1;
    selectedPancake = startArray[startArray.length-1]

    selectPancake();

    console.log("starting tower " + tower + " located")
}
function tower2Start() {
    startTower = tower2;
    startArray = array2;
    console.log("starting tower " + tower + " located")
}
function tower3Start() {
    startTower = tower3;
    startArray = array3;
    console.log("starting tower " + tower + " located")
}


function selectPancake() {
    console.log("pancake " + selectedPancake + " selected");
    console.log("tower " + tower + " located!")
    console.log(startArray)

    document.querySelector('.pancakes').style.border = "6px solid black";
    


    
    tower1.removeEventListener('click', tower1Start);
    tower2.removeEventListener('click', tower2Start);
    tower3.removeEventListener('click', tower3Start);

    tower1.addEventListener('click', tower1End);
    tower2.addEventListener('click', tower2End);
    tower3.addEventListener('click', tower3End);

    // tower1.addEventListener('click', movePancake);
    // tower2.addEventListener('click', movePancake);
    // tower3.addEventListener('click', movePancake);
    //need to remove and append
    //movePancake();
}

function tower1End() {
    endTower = tower1;
    endArray = array1;
    selectedPancake = startArray[startArray.length-1]
    lowerPancake = endArray[endArray.length-1]

    console.log("ending tower " + tower + " located")
}
function tower2End() {
    endTower = tower2;
    endArray = array2;
    console.log("ending tower " + tower + " located")
    pancakeCheck()


}
function tower3End() {
    endTower = tower3;
    endArray = array3;
    console.log("ending tower " + tower + " located")
}


function pancakeCheck() {
    if (endArray.length === 0) {
        movePancake();
    } else if (selectedPancake < lowerPancake) {
        movePancake();
    } else {
        console.log("dont do anything")
    }
}


function movePancake() {
  
     // const towerName = document.querySelector('#pancake1').parentElement.id;
    // console.log(towerName)
    
    console.log("move function")
    console.log("move pancake " + selectedPancake + " to tower" + tower)

    startArray.pop();
    endArray.push(selectedPancake);
    console.log(endArray);



    const tempPancake = document.querySelector('.pancakes');
    document.querySelector('.pancakes').style.border = "none";
    // tower1.removeChild(tower1.childNodes[0]);
    // tower2.prepend(tempPancake);

    startTower.removeChild(startTower.childNodes[0]);
    endTower.prepend(tempPancake);

    

}




//below is how i could get the name of the towerid, showing where each pancake is
// const towerName = document.querySelector('#pancake1').parentElement.id;
// console.log(towerName)

// function determineTower() {
//     if (document.querySelector('#tower1.pancakes')) {
//         const selectedPancake = document.querySelector('#tower1.pancakes');
//         //console.log(selectedPancake);
//     } else {
//         //console.log("there is no child in tower")
//     }
// }




//console.log(document.querySelector('div.tower.pancakes'))