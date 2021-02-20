var wordList = ["Kind", "Amusing", "Loyal", "Thoughtful", "Creative", "Compassionate", "Gentle", "Helpful", "Funny"];
// Needs to be a list from API**


var currList = [];
function randomizeWords() {
    currList = [];
    while (currList.length < 9) {
        var currIndex = Math.floor(Math.random() * wordList.length);
        // returns a random integer from list of wordList
        var currWord = wordList[currIndex];
        //console.log(wordList[currIndex]);
        if (!(currList.includes(currWord))) {
            currList.push(currWord);
        }
    }
    console.log(currList);
    for(i=0; i<9; i++){
        assignWordToGrid(i)
    }
    
}


function assignWordToGrid(i){
    document.getElementById(i.toString()).innerHTML = currList[i];
    return currList[i];
}


