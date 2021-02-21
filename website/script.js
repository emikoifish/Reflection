var wordList = ["Kind", "Amusing", "Loyal", "Thoughtful", "Creative", "Compassionate", "Gentle", "Helpful", "Funny"];
// Needs to be a list from API**

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_syn=';


// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

const wordQuery = inputField.value;
const endpoint = url + queryParams + wordQuery;


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
    notStartingSet(); 
}

function notStartingSet(){
    var mid = currList[4]
    var returnList = []
    $.getJSON(
        url+queryParams+currList[4], function(data, status){
            console.log("data: "+ data[0], "\nStatus: "+ status+ "\nCenter: " + currList[4])
            for(i=0;i<9;i++){
                if(i!=4){
                    $.each(data[i], function(key, val){
                        returnList[i] = val
                        console.log(key + "\t" + val + "\n");
                        return false
                    });
                }
                else{
                    returnList[4] = mid;
                }
                
            }
        }
      );
    currList = returnList;
    console.log(currList);
}

function assignWordToGrid(i){   // change to list parameter
    // for loop goes here
    // assign using the list from notStartingList
    document.getElementById(i.toString()).innerHTML = currList[i];
    return currList[i];
}

var savedWords = [];
function saveCenterWord(){
    if (!(savedWords.includes(currList[4]))) {
        savedWords.push(currList[4]);
    }
    document.getElementById("savedWords").innerHTML = savedWords.join(" • ");
    console.log(savedWords);
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
    
    // Generated list goes here?

    for(i=0; i<9; i++){
        assignWordToGrid(i);
    }     

    return currList;
}


