// -------------------------------------------------------------------------------------------------------------------------------------
// RECUPERATION DES OBJETS
// -------------------------------------------------------------------------------------------------------------------------------------

const items = [
    {
        "name": "mains sur les côtés",
        "number": 1,
        "id": "mains"
    },
    {
        "name": "double à gauche",
        "number": 2,
        "id": "double"
    },
    {
        "name": "menace du doigt",
        "number": 3,
        "id": "menace"
    },
    {
        "name": "ruade",
        "number": 4,
        "id": "ruade"
    },
    {
        "name": "bruit des lavandières",
        "number": 5,
        "id": "bruit"
    },
    {
        "name": "trois sauts en tournant",
        "number": 6,
        "id": "trois"
    },
    {
        "name": "simple à droite",
        "number": 7,
        "id": "simple"
    }
]


const chosenName = document.getElementById("chosenName");
const chosenNumber = document.getElementById("chosenNumber");
const testButton = document.getElementById("testButton");
const resetButton = document.getElementById("resetButton");
let selectedNameIndex;
let selectedNumberIndex;
let selectedNameElement;
let selectedNumberElement;

// function compareRandom() {
//     return Math.random() - 0.5;
// }

const namesAndNumbersList = document.querySelector(".namesAndNumbers");

const nameLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const numberNumbers = ['1', '2', '3', '4', '5', '6', '7'];

// items.sort(compareRandom);
items.map(function(item, index) {
    
    const name = document.createElement("li");
    name.classList.add("name", "nameDisplayOn", `${item.id}`, "transparent");
    name.classList.remove("plenty");
    name.textContent = item.name;
    name.addEventListener("click", function(event) {
        if (chosenName.classList.contains("chosenNameDisplayOn")) {
            chosenName.textContent = null;
            chosenName.classList.add("chosenNameDisplayOff");
            chosenName.classList.remove("chosenNameDisplayOn");
            selectedNameElement.classList.remove("nameDisplayOff", "filteredName");
            selectedNameElement.classList.add("nameDisplayOn");
        };
        selectedNameElement = event.currentTarget;
        selectedNameIndex = selectedNameElement.getAttribute("data-index");
        chosenName.textContent = item.name
        chosenName.setAttribute("data-index", selectedNameIndex);
        chosenName.classList.remove("chosenNameDisplayOff", "transparent", "mains", "double", "menace", "ruade", "bruit", "trois", "simple");
        chosenName.classList.add("chosenNameDisplayOn", `${item.id}`, "plenty");
        selectedNameElement.classList.add("nameDisplayOff");
        selectedNameElement.classList.remove("nameDisplayOn");

    });
    name.setAttribute("data-index", index);
    namesAndNumbersList.appendChild(name);

    const number = document.createElement("li");
    const numberImage = document.createElement("img");
    number.classList.add("number", "numberDisplayOn");
    number.addEventListener("click", function(event) {
        if (chosenNumber.classList.contains("chosenNumberDisplayOn")) {
            chosenNumber.textContent = null;
            
            chosenNumber.classList.add("chosenNumberDisplayOff");
            chosenNumber.classList.remove("chosenNumberDisplayOn");
            selectedNumberElement.classList.remove("numberDisplayOff", "filteredNumber");
            selectedNumberElement.classList.add("numberDisplayOn");
        };
        selectedNumberElement = event.currentTarget;
        selectedNumberIndex = selectedNumberElement.getAttribute("data-index");
        chosenNumber.textContent = item.number;
        chosenNumber.setAttribute("src", `assets/${item.number}.jpg`);
        chosenNumber.setAttribute("data-index", selectedNumberIndex);
        chosenNumber.classList.add("chosenNumberDisplayOn", `${item.id}`);
        chosenNumber.classList.remove("chosenNumberDisplayOff");
        selectedNumberElement.classList.add("numberDisplayOff");
        selectedNumberElement.classList.remove("numberDisplayOn");
        console.log(selectedNumberElement);
    });
    number.setAttribute("data-index", index);
    namesAndNumbersList.appendChild(number);
    number.appendChild(numberImage);
    numberImage.setAttribute("src", `assets/${item.number}.jpg`);
    numberImage.setAttribute("class", "numberImage");
    

    document.addEventListener("keydown", function(event) {

        if (event.key.toUpperCase() === nameLetters[index]) {
            
            name.click();
        }
        if (event.key.toUpperCase() === numberNumbers[index]) {

            number.click();
        }
        if (event.key.toUpperCase() === 'ENTER') {

            testButton.click();
        }
        if (event.key === 'Delete' || event.key === 'Backspace') {

            resetButton.click();
        }
    });
});


testButton.addEventListener("click", function() {
    doesItMatch();
});

resetButton.addEventListener("click", function() { 
    reset ()
});

function reset () {
    chosenNumber.textContent = null;
    chosenName.textContent = null;

    chosenName.classList.add("chosenNameDisplayOff");
    chosenName.classList.remove("chosenNameDisplayOn");

    selectedNameElement.classList.remove("nameDisplayOff", "filteredName");
    selectedNameElement.classList.add("nameDisplayOn");

    chosenNumber.classList.add("chosenNumberDisplayOff");
    chosenNumber.classList.remove("chosenNumberDisplayOn");

    selectedNumberElement.classList.remove("numberDisplayOff", "filteredNumber");
    selectedNumberElement.classList.add("numberDisplayOn");
}

function doesItMatch () {

    const selectedNameIndex = parseInt(chosenName.getAttribute("data-index"));
    const selectedNumberIndex = parseInt(chosenNumber.getAttribute("data-index"));

    const chosenNameText = chosenName.textContent;
    const chosenNumberText = chosenNumber.textContent;
    
    const foundItemByName = items.find(item => item.name === chosenNameText);
    const foundItemByNumber = items.find(item => item.number === parseInt(chosenNumberText));

    const selectedNameElement = document.querySelector(`.name[data-index="${selectedNameIndex}"]`);
    const selectedNumberElement = document.querySelector(`.number[data-index="${selectedNumberIndex}"]`);
  
    if (chosenNameText && chosenNumberText) {

        if (foundItemByName.id===foundItemByNumber.id) {

            
            selectedNameElement.classList.remove("nameDisplayOff");
            selectedNameElement.classList.add("filteredName", "nameDisplayOn");
            
            chosenName.classList.add("chosenNameDisplayOff");
            chosenName.classList.remove("chosenNameDisplayOn");
            
            selectedNumberElement.classList.add("filteredNumber", "numberDisplayOn" );
            selectedNumberElement.classList.remove("numberDisplayOff");

            chosenNumber.classList.add("chosenNumberDisplayOff");
            chosenNumber.classList.remove("chosenNumberDisplayOn");

            chosenNumber.textContent = null;
            chosenName.textContent = null;
            

        } else {

            chosenName.classList.add("chosenNameDisplayOff");
            chosenName.classList.remove("chosenNameDisplayOn");
            console.log("Before:", selectedNameElement.classList);
            selectedNameElement.classList.remove("nameDisplayOff");
            selectedNameElement.classList.add("nameDisplayOn");
            console.log("After:", selectedNameElement.classList);
            
            chosenNumber.classList.add("chosenNumberDisplayOff");
            chosenNumber.classList.remove("chosenNumberDisplayOn");
            selectedNumberElement.classList.remove("numberDisplayOff");
            selectedNumberElement.classList.add("numberDisplayOn");
            
            chosenNumber.textContent = null;
            chosenName.textContent = null;
        }
    }
};