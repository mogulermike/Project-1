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
array1 = [pancake3,pancake2,pancake1];
array2 = [];
array3 = [];





let select = false;
// tower1.addEventListener('click', selectPancake);

//need to do this 3 times so each tower has an event listener. 
//tower1.addEventListener('click', selectPancake);
// tower2.addEventListener('click', selectPancake);
// tower3.addEventListener('click', selectPancake);

//document.querySelector('.pancakes').addEventListener

// towerWrapper.onclick = function toggle() {
//     if (select) {
//         tower1.removeEventListener('click', movePancake);
//         tower1.addEventListener('click', selectPancake, determineTower);
//         tower2.removeEventListener('click', movePancake);
//         tower2.addEventListener('click', selectPancake);
//         tower3.removeEventListener('click', movePancake);
//         tower3.addEventListener('click', selectPancake);
//         select = false;
//     } else {
//         tower1.removeEventListener('click', selectPancake, determineTower);
//         tower1.addEventListener('click', movePancake);
//         tower2.removeEventListener('click', selectPancake);
//         tower2.addEventListener('click', movePancake);
//         tower3.removeEventListener('click', selectPancake);
//         tower3.addEventListener('click', movePancake);
//         select = true;
//     }
// }



//tower1.addEventListener('click', selectPancake);
//every click toggle true or false
//shift takes top of array out. might need to do an array in tandem with the queryselector


//this is how you set up two functions in a eventListener
// document.querySelector('.pancakes').addEventListener('click', () => {
//     selectPancake();
//     selectTower();
// });

document.querySelector('.pancakes').addEventListener('click', selectTower)

function selectTower() {
    console.log("select tower")
    tower1.addEventListener('click', tower1Locate);
    tower2.addEventListener('click', tower2Locate);
    tower3.addEventListener('click', tower3Locate);
}
let array;
let tower;
function tower1Locate() {
    tower = 1;
    array = array1;
    console.log("tower " + tower + " located!")
    selectPancake();
}
function tower2Locate() {
    tower = 2;
    array = array2;
}
function tower3Locate() {
    tower = 3;
    array = array3;
}


function selectPancake() {
    console.log("pancake selected");
    document.querySelector('.pancakes').style.border = "6px solid black";
    console.log(array)
    tower1.addEventListener('click', movePancake);
    tower2.addEventListener('click', movePancake);
    tower3.addEventListener('click', movePancake);
    //need to remove and append
    //movePancake();
}



function movePancake() {
  
     // const towerName = document.querySelector('#pancake1').parentElement.id;
    // console.log(towerName)
    
    console.log("move function")
    console.log("move pancake to tower" + tower)



    const tempPancake = document.querySelector('.pancakes');
    document.querySelector('.pancakes').style.border = "none";
    tower1.removeChild(tower1.childNodes[0]);
    array1.push();
    tower2.prepend(tempPancake);

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