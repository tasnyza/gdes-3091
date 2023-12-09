// Creates the HTML and inserts it into the document
// function insertHTML() {
// 	return `
//         <div ID="div0">
//             <div id='mainbox'>
//                 <div id='spritebox'>
//                     <img src='female-character-fixed.png'>
//                 </div>
//                 <div id='namebox'>
//                     <span>Index</span>
//                 </div>
//                 <div id='textbox'>
//                     <p>Welcome to the dating show hosted by Tasnimah! Press your arrow keys to see what's next.</p>
//                     <!-- <div id="optionsbox"></div> -->
//         </div>
//         <div ID='div1'>
//         <div id='mainbox'>
//                 <div id='spritebox'>
//                     <img src='florian_skyblue_smile.png'>
//                 </div>
//                 <div id='namebox'>
//                     <span>Index</span>
//                 </div>
//                 <div id='textbox'>
//                     <p>Here are your four options! Who will you pick?</p>
//                     <div id="optionsbox"></div>
//                     <!-- <button onclick="window.location.href='second_page.html'">Go to Second Page</button> -->
//                 </div id='background'></div>
//             </div>
//             </div>
// 	`;
//   }

// const htmlData = insertHTML();
// document.getElementById('VisualNovelEngine').insertAdjacentHTML("beforebegin", htmlData);
// document.body.insertAdjacentHTML("beforeend", htmlData);

/* **SUPER IMPORTANT**  PUT THE URL OF THE JSON FILE WHERE YOU INSERTED ALL YOUR DATA HERE !! */
//const vnData= 'VNData.json'

// Creates constants based off of the HTML created
const $textbox = document.querySelector(".textbox p");
const $optionsbox = document.querySelector(".optionsbox");
const $namebox = document.querySelector(".namebox span");
const $spritebox = document.querySelector(".spritebox img");
const $mainbox = document.querySelector(".mainbox");

// Other variables we will be using later on

// let json, to;

// //Tracks what "Page Number" the user is on
// var pageNum = 0;
// var currentPage;

// // Initializes the data & also handles page turning
// async function initialize(data){

// 	//cleans it all
// 	$spritebox.src = '';
// 	$namebox.innerText = '';
// 	$textbox.innerText = '';

// 	//Changes appropriate HTML elements to the new attributes based on the data given when page turns/ program is initialized
// 	$spritebox.src = data.Characters[data.Scene1.PAGES[currentPage].Character][data.Scene1.PAGES[currentPage].Sprite];

// 	$namebox.innerText = data.Scene1.PAGES[currentPage].Character;

// 	$textbox.innerText = data.Scene1.PAGES[currentPage].PageText;

// 	$mainbox.style.backgroundImage = "url(dennis_blue_happylaugh.png" + data.Scene1.Background + ")";

// }

// function handleOptions(data) {
// 	// Cleans it out
// 	$optionsbox.innerHTML = "";

// 	if (data.Scene1.PAGES[currentPage].hasOwnProperty("Options")) {
// 	  const o = data.Scene1.PAGES[currentPage].Options;
// 	  Object.keys(o).forEach(k => {
// 		const row = document.createElement("div");
// 		row.innerHTML = `${k}`;
// 		$optionsbox.appendChild(row);
// 		row.addEventListener("click", () => {
// 		  currentPage = o[k];
// 		  pageNum = Object.keys(json.Scene1.PAGES).indexOf(currentPage);
// 		  initialize(json);
// 		  handleOptions(json);
// 		  $optionsbox.innerHTML = "";
// 		});
// 	  });
// 	}
//   }

//   async function grabData() {
// 	// Load the data

// 	/* Fetches the data from the server */
// 	const resp = await fetch(vnData);

// 	/* Putting the data into an array */
// 	json = await resp.json();

// 	currentPage = Object.keys(json.Scene1.PAGES)[pageNum];

// 	// Initialize the data
// 	initialize(json);
// 	handleOptions(json);

// }

// function checkPage(data){
// 	if(data.Scene1.PAGES[currentPage].hasOwnProperty('Options')) return false;
// 	if(data.Scene1.PAGES[currentPage].hasOwnProperty('NextPage')) {
// 		if(data.Scene1.PAGES[currentPage].NextPage == "End") return false;
// 	}

// 	return true;
// }

// //Handles page turning when right or left arrow key is pressed
// document.addEventListener("keydown", e => {
// 	if (!json) return;
// 	if (e.key == "ArrowRight" && checkPage(json)) {
// 	  if (json.Scene1.PAGES[currentPage].hasOwnProperty("NextPage")) {
// 		currentPage = json.Scene1.PAGES[currentPage].NextPage;
// 	  } else {
// 		pageNum++;
// 		currentPage = Object.keys(json.Scene1.PAGES)[pageNum];
// 	  }

// 	  initialize(json);
// 	  handleOptions(json);
// 	}
//   });

//   document.addEventListener('DOMContentLoaded', function () {
//     grabData();
// });

// showHideDiv();

// console.log(showHideDiv);

document.onkeydown = checkKey;

function checkKey(e) {
	e = e || window.event;

	if (e.keyCode == "37") {
		// left arrow
		console.log("Left arrow pressed");
		showHideElement("div0", "div1");
	} else if (e.keyCode == "39") {
		// right arrow
		console.log("Right arrow pressed");
		showHideElement("div1", "div0");
	}
}

function showHideElement(idToShow, idToHide) {
	let showElement = document.getElementById(idToShow);
	let hideElement = document.getElementById(idToHide);

	showElement.classList.remove("hide");
	hideElement.classList.add("hide");
}
