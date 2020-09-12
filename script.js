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


const tower1 = document.querySelector('#tower1');
const tower2 = document.querySelector('#tower2');
const tower3 = document.querySelector('#tower3');
const newGameButton = document.querySelector('#newGameButton');
const towerWrapper = document.querySelector('.towerWrapper');

newGameButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.location.reload(true);
});

let select = false;
// tower1.addEventListener('click', selectPancake);

//need to do this 3 times so each tower has an event listener. 
tower1.addEventListener('click', selectPancake);
tower2.addEventListener('click', selectPancake);
tower3.addEventListener('click', selectPancake);


towerWrapper.onclick = function toggle() {
    if (select) {
        tower1.removeEventListener('click', movePancake);
        tower1.addEventListener('click', selectPancake);
        tower2.removeEventListener('click', movePancake);
        tower2.addEventListener('click', selectPancake);
        tower3.removeEventListener('click', movePancake);
        tower3.addEventListener('click', selectPancake);
        select = false;
        console.log("if")
    } else {
        tower1.removeEventListener('click', selectPancake);
        tower1.addEventListener('click', movePancake);
        tower2.removeEventListener('click', selectPancake);
        tower2.addEventListener('click', movePancake);
        tower3.removeEventListener('click', selectPancake);
        tower3.addEventListener('click', movePancake);
        select = true;
        console.log('else')
    }
}


//tower1.addEventListener('click', selectPancake);
//every click toggle true or false
//shift takes top of array out. might need to do an array in tandem with the queryselector
//


function selectPancake() {
    console.log("pancake selected");
    document.querySelector('.pancakes').style.border = "6px solid black";
    //need to remove and append
    //movePancake();
}

function movePancake() {
    console.log("move function")
    const tempPancake = document.querySelector('#pancake1');
    document.querySelector('.pancakes').style.border = "none";
    tower1.removeChild(tower1.childNodes[0]);
    tower2.prepend(tempPancake);
    

}

