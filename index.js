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

function render(str){
    outputText(str)
}





let gameRunning = true
let roomList = [];

class GameObject {
    constructor(){

    }
}

class Room {
    constructor(location=[], narrate='', surroundings='', sleep=''){
        this.location = location
        this.narrate = narrate
        this.surroundings = surroundings
        this.sleep = sleep
        this.items = []
    }

    prompt(str) {
        return promptInput(this.narrate)
    }

    lookAround() {
        outputText(this.surroundings)
        if(this.items.length > 0) {
            this.items.forEach( (item) => {
                render(`You see a ${item.type}: ${item.description}`)
            })
        }
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
    addItem(door){
        this.items.push(door)
    }
}

class Door extends GameObject {
    constructor(){
        super()
        this.type = 'Door'
        this.descriptionStr = ''
    }

    set description(str){
        this.descriptionStr = str
    }

    get description(){
        return this.descriptionStr;
    }

}
let room = new Room([0,0], 'you wake up. What now? (a = LOOK AROUND, b = TRY TO REST)')
room.setSurroundingsText('The room is empty. However, there is a part of the wall that rotates inward on the left vertice of some empty space, commonly known as a DOOR.')
room.setSleepText('You try to REST, but find yourself too restless. What now? (a = LOOK AROUND, b = TRY TO REST)')

let door = new Door();
door.description = 'It is red and doesn\'t appear to be locked';
room.addItem(door)

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
    let el = document.createElement('div')
    el.innerText = str
    outputElement[0].append(el)
    // $(`<div>${str}</div>`).insertAfter(outputElement);
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

