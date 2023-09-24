// alert("tjugtughtguhthtuhht")
// let person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//     document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
// }

function promptInput(string) {
    // let input = prompt(string)
    // return input
    // return textInput[0].value;
    outputText(string)
}
function getCurrentRoom() {
    // return roomList.filter( room => {
    //     return room.location == usersCurrentRoom;
    // })
    return roomList[0]
}





let gameRunning = true
let roomList = []
class Room {
    constructor(location=[], narrate='', surroundings='', sleep=''){
        this.location = location
        this.narrate = narrate
        this.surroundings = surroundings
        this.sleep = sleep
    }

    prompt(str) {
        return promptInput(this.narrate)
    }
    lookAround() {
        outputText(this.surroundings)
    }
    attemptRest() {
        outputText(this.sleep)
    }
    setSurroundingsText(str) {
        this.surroundings = str
    }
    setSleepText(str) {
        this.sleep = str
    }
}
let room = new Room([0,0], 'you wake up. What now? (a = LOOK AROUND, b = TRY TO REST)')
room.setSurroundingsText('The room is empty. However, there is a part of the wall that rotates inward on the left vertice of some empty space, commonly known as a DOOR.')
room.setSleepText('You try to REST, but find yourself too restless. What now? (a = LOOK AROUND, b = TRY TO REST)')
roomList.push(room)
let usersCurrentRoom = [0,0];
let userInput = ''

const ENTER = 'Enter';
const textInput = $("input");
$("input").keydown(function(event){
    $("input").css("background-color", "yellow");
    let key = event.originalEvent.key
    if(key == ENTER){
        handleEnterPress()
    }
  });

  function handleEnterPress(){
    userInput = textInput[0].value;
    textInput[0].value = ''
    main();

  }

function outputText(str){
    let outputElement = $("#output");
    outputElement[0].innerText = str
}


function main(){
        console.log('running game')
    if(userInput == "end") {
        gameRunning = false
    }

    else {
        // outputText(userInput)
        var currentRoom = getCurrentRoom();
        currentRoom.prompt();
    }
    if(userInput.toLowerCase() == "a") {
        currentRoom.lookAround()
    }
    if(userInput.toLowerCase() == "b") {
        currentRoom.attemptRest()
    }
}



main();

