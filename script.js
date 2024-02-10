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


// const selectedName = document.getElementById("selectedName");
// const selectedNumber = document.getElementById("selectedNumber");
const testButton = document.getElementById("testButton");
const resetButton = document.getElementById("resetButton");
let selectedNameIndex;
let selectedNumberIndex;
// let selectedNameElement;
// let selectedNumberElement;

// function compareRandom() {
//     return Math.random() - 0.5;
// }

const numbersGridList = document.querySelector(".numbersGrid");
const namesColumnList = document.querySelector(".namesList");

const nameLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const numberNumbers = ['1', '2', '3', '4', '5', '6', '7'];

// items.sort(compareRandom);
items.map(function(item, index) {
    
    const name = document.createElement("li");
    name.classList.add("name", `${item.id}`, "selectedNameDisplayOff"
    // , "transparent"
    );
    name.classList.remove("selectedNameDisplayOn", "plenty");
    name.textContent = item.name;
    
    name.addEventListener("click", function(event) {
        const existingSelectedNameElement = document.querySelector('.selectedNameDisplayOn');
        if (existingSelectedNameElement) { 
            // existingSelectedNameElement.textContent = null;
            existingSelectedNameElement.classList.add("selectedNameDisplayOff");
            existingSelectedNameElement.classList.remove("selectedNameDisplayOn", "plenty");
        };

        selectedNameIndex = name.getAttribute("data-index");
        name.textContent = item.name
        name.setAttribute("data-index", selectedNameIndex);
        name.classList.remove("selectedNameDisplayOff", "transparent", "mains", "double", "menace", "ruade", "bruit", "trois", "simple");
        name.classList.add("selectedNameDisplayOn", `${item.id}`, "plenty");

    });
    name.setAttribute("data-index", index);
    namesColumnList.appendChild(name);

    const number = document.createElement("li");
    const numberImage = document.createElement("img");
    const numberText = document.createElement("p");
    number.classList.add("number", "selectedNumberDisplayOff");
    numberText.classList.add("numberText");
    numberText.textContent = item.number;
    number.addEventListener("click", function(event) {
        const existingSelectedNumberElement = document.querySelector('.selectedNumberDisplayOn');
        if (existingSelectedNumberElement) {
            existingSelectedNumberElement.classList.add("selectedNumberDisplayOff");
            existingSelectedNumberElement.classList.remove("selectedNumberDisplayOn");
        };
        selectedNumberIndex = number.getAttribute("data-index"); 
        number.setAttribute("data-index", selectedNumberIndex);
        number.classList.add("selectedNumberDisplayOn", `${item.id}`);
        number.classList.remove("selectedNumberDisplayOff");
    });
    number.setAttribute("data-index", index);
    numbersGridList.appendChild(number);
    number.appendChild(numberImage);
    number.appendChild(numberText);
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
    const numbers = document.querySelectorAll(".number");
    const names = document.querySelectorAll(".name");
    
    names.forEach(name => {
        // Vérifier si l'élément a la classe "selectedNumberDisplayOn"
        if (name.classList.contains("selectedNameDisplayOn")) {
            // Retirer la classe "selectedNumberDisplayOn" et ajouter la classe "selectedNumberDisplayOff"
            name.classList.remove("selectedNameDisplayOn");
            name.classList.add("selectedNameDisplayOff");
        }
        if (name.classList.contains("validatedName")) {
            // Retirer la classe "selectedNumberDisplayOn" et ajouter la classe "selectedNumberDisplayOff"
            name.classList.remove("validatedName");
        }
        if (name.textContent) {
            name.textContent = null;
            };
    });

    numbers.forEach(number => {
        // Vérifier si l'élément a la classe "selectedNumberDisplayOn"
        if (number.classList.contains("selectedNumberDisplayOn")) {
            // Retirer la classe "selectedNumberDisplayOn" et ajouter la classe "selectedNumberDisplayOff"
            number.classList.remove("selectedNumberDisplayOn");
            number.classList.add("selectedNumberDisplayOff");
        }
        if (number.classList.contains("validatedNumber")) {
            // Retirer la classe "selectedNumberDisplayOn" et ajouter la classe "selectedNumberDisplayOff"
            number.classList.remove("validatedNumber");
        }
        
    });
}

function doesItMatch () {

    
    const selectedNumber = document.querySelector(".selectedNumberDisplayOn");
    
    const selectedName = document.querySelector(".selectedNameDisplayOn");

    const selectedNameIndex = parseInt(selectedName.getAttribute("data-index"));
    const selectedNumberIndex = parseInt(selectedNumber.getAttribute("data-index"));

    const selectedNameText = selectedName.textContent;
    const selectedNumberText = selectedNumber.querySelector(".numberText");
 
    
    const foundItemByName = items.find(item => item.name === selectedNameText);
    const foundItemByNumber = items.find(item => item.number === parseInt(selectedNumberText.textContent));

    console.log(foundItemByName);
    console.log(foundItemByNumber);

    const selectedNameElement = document.querySelector(`.name[data-index="${selectedNameIndex}"]`);
    const selectedNumberElement = document.querySelector(`.number[data-index="${selectedNumberIndex}"]`);
  
    if (selectedNameText && selectedNumberText) {
        
        if (foundItemByName.id===foundItemByNumber.id) {

            console.log("yeah");

            selectedName.classList.add("selectedNameDisplayOff");
            selectedName.classList.remove("selectedNameDisplayOn");
            selectedName.classList.add("validatedName");

            selectedNumber.classList.add("selectedNumberDisplayOff");
            selectedNumber.classList.remove("selectedNumberDisplayOn");
            selectedNumber.classList.add("validatedNumber");

            
            // selectedName.textContent = null;
            
        } else {

            console.log("oups");

            selectedName.classList.add("selectedNameDisplayOff");
            selectedName.classList.remove("selectedNameDisplayOn", "plenty");

            
            selectedNumber.classList.add("selectedNumberDisplayOff");
            selectedNumber.classList.remove("selectedNumberDisplayOn");
    
            
            
            // selectedName.textContent = null;
        }
    }
};