var wordList = ["Kind", "Amusing", "Loyal", "Thoughtful", "Creative", "Compassionate", "Gentle", "Helpful", "Funny"];
// Needs to be a list from API**

function randomizeWords(){
    var currList = [];

    while(currList.length < 10){
        var currIndex = Math.floor(Math.random() * wordList.length);
        // returns a random integer from list of wordList
        var currWord = wordList[currIndex];
        //console.log(wordList[currIndex]);
        if(!(currList.includes(currWord))){
            currList.push(currWord);
        }


    }
    console.log(currList);
    return currList;
}
