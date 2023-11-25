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
const testResults = document.getElementById("testResults");
const testButton = document.getElementById("testButton");
const resetButton = document.getElementById("resetButton");
let selectedNameIndex;
let selectedNumberIndex;
let selectedNameElement;
let selectedNumberElement;

function compareRandom() {
    return Math.random() - 0.5;
}

const namesAndNumbersList = document.querySelector(".namesAndNumbers");

items.sort(compareRandom);
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
        console.log(selectedNameElement);
    });
    name.setAttribute("data-index", index);
    namesAndNumbersList.appendChild(name);

    const number = document.createElement("li");
    number.classList.add("number", "numberDisplayOn");
    number.textContent = item.number;
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
        chosenNumber.setAttribute("data-index", selectedNumberIndex);
        chosenNumber.classList.add("chosenNumberDisplayOn", `${item.id}`);
        chosenNumber.classList.remove("chosenNumberDisplayOff");
        selectedNumberElement.classList.add("numberDisplayOff");
        selectedNumberElement.classList.remove("numberDisplayOn");
        console.log(selectedNumberElement);
    });
    number.setAttribute("data-index", index);
    namesAndNumbersList.appendChild(number);
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
    console.log (selectedNameIndex);
    console.log (selectedNumberIndex);

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

            testResults.textContent = 'BRAVO!';
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
            
            testResults.textContent = 'PERDU!';
            chosenNumber.textContent = null;
            chosenName.textContent = null;
        }
    }
};