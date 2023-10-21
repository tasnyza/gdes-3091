// changing color according to button - took help from chatgpt

function changeColor(color) {
    const interactionContainer = document.getElementById('interactionContainer');
    interactionContainer.style.backgroundColor = color;
  }

//   function addRepeatingText() {
//     const loopContainer = document.getElementById('loopContainer');
//     const repetitions = 5;
//     let text = 'Hello';

//     for (let i = 0; i < repetitions; i++) {
//       text += 'Repeating Text ';
//     }

//     // Append the repeating text to the existing content
//     const paragraph = loopContainer.querySelector('p');
//     paragraph.innerHTML = `${paragraph.innerHTML}<br>${text}`;
//   }


// for loop for constant text - help from peter


for (let step = 0; step < 100; step++) { // for loop
    let textBox = document.createElement("p"); // will create p element

    textBox.innerHTML = "Hello"; // 
    console.log(textBox);
    document.getElementById("loopContainer").appendChild(textBox);

}

// changing color based on condition - help from peter

// let color = 'blue';



// let name = "Anushka";

// if (name == "Tas")
// {
//     console.log('Hello');

// }

// else {
//     console.log('Bye');
//     document.getElementById("square").style.backgroundColor = color;

// }

// 

// font increase with help from peter - I tried to get it to stop later with clear interval but it isnt working :/

let size = 50;
let intervalID;

// document.getElementById("increaseText").style.fontSize = size + 'px';

function fontIncrease(){
    size++; // size increased by 1
    document.getElementById("increaseText").style.fontSize = size + 'px';
    // size++;
    console.log(size);


// setInterval(fontIncrease, 100);

    if (size < 100){
        clearInterval(intervalID);
        // fontIncrease = null;
    }
}

intervalId = setInterval(fontIncrease, 100);





// new changing color condition using hover :D

const square = document.querySelector('#square');

square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
});

square.addEventListener('mouseout', () => {
    square.style.backgroundColor = '';
});


function getVal() {
    const val = document.querySelector("form").value;
    console.log(val);
  }


let name = "Tas";

if (name == "Tas")
{
    console.log('Hello');
}

// input field - help from chatgpt

// Get references to the elements
const inputText = document.getElementById("inputText");
const textLength = document.getElementById("text-length");
const form = document.getElementById("form");

// Add an event listener to the input field
inputText.addEventListener("input", () => {
    textLength.textContent = inputText.value.length; // Update the text-length with the character count
});

// Prevent the form from submitting (optional)
form.addEventListener("submit", (e) => {
    e.preventDefault();
});