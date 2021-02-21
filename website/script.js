var wordList = ["kind", "amusing", "loyal", "thoughtful", "creative", "compassionate", "gentle", "helpful", "funny", "intelligent", "smart", "honest", "careful", "crafty", "animated", "lively", "naive", "generous", "curious"];
// Needs to be a list from API**

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_syn=';


// Selecting page elements
//const inputField = document.querySelector('#input');
//const submit = document.querySelector('#submit');
//const responseField = document.querySelector('#responseField');
//
//const wordQuery = inputField.value;
//const endpoint = url + queryParams + wordQuery;


// delete this comment
var currList = [];

function randomizeWords() {
    currList = [];
    while (currList.length < 9) {
        var currIndex = Math.floor(Math.random() * wordList.length);
        // returns a random integer from list of wordList
        var currWord = wordList[currIndex];
        //console.log(wordList[currIndex]);
        if (!(currList.includes(currWord) || savedWords.includes(currWord))) {
            currList.push(currWord);
        }
    }
    console.log(currList);
    for (var i = 0; i < 9; i++) {
        assignWordToGrid(i);

    }
    console.log(currList);
    //    notStartingSet(0);
}

var returnList = [];

function notStartingSet(j) {
    console.log("j", j)
    var mid = currList[j];
    console.log(mid);
    console.log(currList)
    returnList = [];
    $.getJSON(
        url + queryParams + mid,
        function (data, status) {
            console.log("data: " + data[0], "\nStatus: " + status + "\nCenter: " + mid)
            for (i = 0; i < 9; i++) {
                if (i != 4) {
                    $.each(data[i], function (key, val) {
                        returnList[i] = val
                        console.log(returnList)
                        console.log(key + "\t" + val + "\n");
                        return false
                    });
                } else {
                    returnList[4] = mid;
                }

            }
        }
    );
    console.log("Hello", returnList)
    synomynsWords = returnList;
    return returnList;
    //    currList = returnList;
    //    console.log(currList);
}

function assignWordToGrid(i) { // change to list parameter
    // for loop goes here
    // assign using the list from notStartingList
    document.getElementById(i.toString()).innerHTML = currList[i];
    return currList[i];
}

var savedWords = [];

function saveCenterWord() {

    var prevLength = savedWords.length
    if (!(savedWords.includes(currList[4]))) {
        savedWords.push(currList[4]);
    }
    var i = savedWords.length
    console.log(prevLength)
    console.log(i)
    if (!(prevLength == i)) {
        var wordBox = document.createElement("h5");
        var node = document.createTextNode(savedWords[i - 1]);
        wordBox.appendChild(node);
        wordBox.setAttribute("id", "savedWord" + (i - 1).toString());
        wordBox.setAttribute("onclick", "deleteWord(" + (i - 1).toString() + ")");
        wordBox.setAttribute("class", "tooltip");

        //        <h5 onclick="deleteWord", class="tooltip", id="savedWord"> Loyal <span class="tooltiptext"> click to delete </span> </h5>
        var toolTipText = document.createElement("span");
        var tttext = document.createTextNode("click to delete");
        toolTipText.setAttribute("class", "tooltiptext");
        toolTipText.appendChild(tttext);
        wordBox.appendChild(toolTipText);

        var element = document.getElementById("savedWords");
        element.appendChild(wordBox);
    }

    //    document.getElementById("savedWords").innerHTML = savedWords.join(" • ");
    console.log(savedWords);
}

function deleteWord(i) {
    savedWords.splice(i, 1);
    document.getElementById("savedWord" + (i).toString()).remove();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function clicked(j) {
    var clickWord = currList[j];

    console.log("j", j)
    var mid = currList[j];
    console.log(mid);
    console.log(currList)
    returnList = [];
    $.getJSON(
        url + queryParams + mid,
        function (data, status) {
            console.log("data: " + data[0], "\nStatus: " + status + "\nCenter: " + mid)
            for (i = 0; i < 9; i++) {
                if (i != 4) {
                    $.each(data[i], function (key, val) {
                        returnList[i] = val
                        console.log(returnList)
                        console.log(key + "\t" + val + "\n");
                        return false
                    });
                } else {
                    returnList[4] = mid;
                }

            }
            console.log("Hello", returnList)
            synomynsWords = returnList;

            //    return returnList;
            //    currList = returnList;
            //    console.log(currList);

            //console.log("Clicked!");
            //console.log(currList);

            //console.log(clickWord);


            //    var help = notStartingSet(i) ;
            sleep(1000);
            //    await notStartingSet(i);
            var synomyns = returnList;
            console.log("synomyns", JSON.stringify(synomyns), synomyns)

            currList = []

            console.log("synomyns.length", synomyns.length, Object.keys(synomyns))

            var numSynomyns = Math.min(synomyns.length, 6)
            console.log(numSynomyns, "help", synomyns.length)

            while (currList.length < 9) {
                if (currList.length == 4) {
                    currList.push(clickWord);
                } else {
                    var currIndex = 0;
                    var currWord = "";
                    if (currList.length < numSynomyns) {
                        console.log("currList.length")
                        currIndex = Math.floor(Math.random() * synomyns.length);
                        currWord = synomyns[currIndex];

                    } else {
                        currIndex = Math.floor(Math.random() * wordList.length);
                        currWord = wordList[currIndex];
                    }

                    if (!(currList.includes(currWord) || currWord == clickWord || savedWords.includes(currWord))) {
                        currList.push(currWord);
                    }
                }
            }
            console.log(currList);

            // Generated list goes here?

            for (i = 0; i < 9; i++) {
                assignWordToGrid(i);
            }

            return currList;
        }
    );

}

//function getSynWords(i){
//    mid = currList[i]
//    var request = new XMLHttpRequest()
//
//// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://api.datamuse.com/words?rel_syn='+mid, true)
//
//var synWords = []
//request.onload = function () {
//    // Begin accessing JSON data here
//    var data = JSON.parse(this.response)
//    console.log("hello", data)
//    console.log(data.length)
//    for (var i=0; i < data.length; i++){
//        console.log(data[[i]].word)
//        synWords.push(data[[i]].word)
//    }
//    
//    console.log(synWords)
//    
//}
//
//// Send request
//request.send();
//return synWords
//}
