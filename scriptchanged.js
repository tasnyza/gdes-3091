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
const $optionsbox = document.querySelector('.optionsbox');
const $namebox = document.querySelector(".namebox span")
const $spritebox = document.querySelector(".spritebox img");
const $mainbox = document.querySelector('.mainbox');

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


function showHideDiv(direction) {
    console.log('showHideDiv called with direction:', direction);
    
    let div0 = document.querySelector('#div0');
    let div1 = document.querySelector('#div1');
    let div2 = document.querySelector('#div2');


    if (direction === 'right') {
        console.log('Switching from div0 to div1');
        // div0.classList.add('fade-out'); // Add a class for fading out div0
        setTimeout(() => {
            div0.style.display = 'none';
            div1.style.display = 'block';
            // div1.classList.remove('fade-out'); // Remove fade-out class for div1
        }, 500); // 500ms delay to match the transition duration
    } else {
        console.log('Switching from div1 to div0');
        // div1.classList.add('fade-out'); // Add a class for fading out div1
        setTimeout(() => {
            div1.style.display = 'none';
            div0.style.display = 'block';
            // div0.classList.remove('fade-out'); // Remove fade-out class for div0
        }, 500); // 500ms delay to match the transition duration

    } 
}

// showHideDiv();



console.log(showHideDiv);

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        // left arrow
        console.log('Left arrow pressed');
        showHideDiv('left');
    }
    else if (e.keyCode == '39') {
        // right arrow
        console.log('Right arrow pressed');
        showHideDiv('right');
    }
}

function projectsShow() {

    console.log('img has been pressed')
    var div2 = document.getElementById('div2');

    if (div2.style.display === "none" || div2.style.display === "") {
        div2.style.display = "block";
        div1.style.display = "none";
    } else {
        div2.style.display = "none";
    }
}

function showHideElement(idToShow, idToHide) {
    let showElement = document.getElementById(idToShow);
    let hideElement = document.getElementById(idToHide);

    hideElement.classList.add("hide");
    showElement.classList.remove("hide");
}


