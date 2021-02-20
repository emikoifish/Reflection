var wordList = ["Kind", "Amusing", "Loyal", "Thoughtful", "Creative", "Compassionate", "Gentle", "Helpful", "Funny"];
// Needs to be a list from API**

// delete this comment
var currList = [];
var centerWord;

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
        assignWordToGrid(i);
        
    }   
}

function assignWordToGrid(i){
    document.getElementById(i.toString()).innerHTML = currList[i];
    return currList[i];
}

var savedWords = [];
function saveCenterWord(){
    if (!(savedWords.includes(currList[4]))) {
        savedWords.push(currList[4]);
    }
    document.getElementById("savedWords").innerHTML = savedWords.join(" • ");
    //console.log(savedWords);
}

function clicked(i){
    //console.log("Clicked!");
    //console.log(currList);
    var clickWord = currList[i];
    //console.log(clickWord);

    currList = []
    while (currList.length < 9) {
        var currIndex = Math.floor(Math.random() * wordList.length);
        var currWord = wordList[currIndex];
            if(currList.length == 4){
                currList.push(clickWord);
            }
            if (!(currList.includes(currWord) || currWord == clickWord)) {
                currList.push(currWord);
            }
    }
    console.log(currList);
    
    for(i=0; i<9; i++){
        assignWordToGrid(i);
    }     

    return currList;
}


