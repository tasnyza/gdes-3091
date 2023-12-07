// Creates the HTML and inserts it into the document 
function insertHTML(){
	return `
            <div id='mainbox'>
                <div id='spritebox'> 

                    <img src='florian_skyblue_smile.png'>
                    
                </div>
                <div id='namebox'>

                    <span>Loading...</span>
                    
                </div>
                <div id='textbox'>

                    <p>Loading...</p>

                    <div id="optionsbox"></div>
                    
                </div>
            </div>

    `
}


const htmlData = insertHTML();
document.getElementById('VisualNovelEngine').insertAdjacentHTML("beforebegin", htmlData);

/* **SUPER IMPORTANT**  PUT THE URL OF THE JSON FILE WHERE YOU INSERTED ALL YOUR DATA HERE !! */
const vnData = '/Users/tasnimahahmed/gdes/p4-attempt3/manifest.json';

// console.log(vnData);

// fetch('/Users/tasnimahahmed/gdes/p4-attempt3/manifest.json')
//    .then(response => response.json())
//    .then(data => console.log(data))
//    .catch(error => console.error('Error fetching JSON:', error));

// const vnData = 'manifest.json';
// console.log(vnData);


// Creates constants based off of the HTML created
const $textbox = document.querySelector("#textbox p");
const $optionsbox = document.querySelector('#optionsbox');
const $namebox = document.querySelector("#namebox span")
const $spritebox = document.querySelector("#spritebox img");
const $mainbox = document.querySelector('#mainbox');

// Other variables we will be using later on

let json, to;

//Tracks what "Page Number" the user is on
var pageNum = 0;
var currentPage;

async function grabData() {
	// Load the data
	
	/* Fetches the data from the server */
	const resp = await fetch(vnData)

	/* Putting the data into an array */
	json = await resp.json();
	
	currentPage = Object.keys(json.Scene1.PAGES)[pageNum];
	
	// Initialize the data 
	initialize(json);
	handleOptions(json);
	
}

// Initializes the data & also handles page turning 
async function initialize(data){
	
	//cleans it all
	$spritebox.src = '';
	$namebox.innerText = '';
	$textbox.innerText = ''; 
	
	//Changes appropriate HTML elements to the new attributes based on the data given when page turns/ program is initialized
	$spritebox.src = data.Characters[data.Scene1.PAGES[currentPage].Character][data.Scene1.PAGES[currentPage].Sprite];
	
	$namebox.innerText = data.Scene1.PAGES[currentPage].Character;
	
	$textbox.innerText = data.Scene1.PAGES[currentPage].PageText; 
	
	$mainbox.style.backgroundImage = "url(" + data.Scene1.Background + ")"; 
	
}

function handleOptions(data){
	
	//Cleans it out
	$optionsbox.innerHTML = "";

	if(data.Scene1.PAGES[currentPage].hasOwnProperty('Options')){
		var o = data.Scene1.PAGES[currentPage].Options;
		var str = Object.keys(o).forEach(k => {
			const row = document.createElement('div');
			row.innerHTML = `${k}`
			$optionsbox.appendChild(row);
			row.addEventListener('click', () => { 
				currentPage = (o[k]);
				pageNum = Object.keys(json.Scene1.PAGES).indexOf(currentPage);
				initialize(json); 
				$optionsbox.innerHTML = "";
			})
			
		})
	}
	
	
}

function checkPage(data){
	if(data.Scene1.PAGES[currentPage].hasOwnProperty('Options')) return false;
	if(data.Scene1.PAGES[currentPage].hasOwnProperty('NextPage')) {
		if(data.Scene1.PAGES[currentPage].NextPage == "End") return false;
	}
	
	return true;
}

//Handles page turning when right or left arrow key is pressed 
document.addEventListener('keydown', (e) => {
	if(!json) return;
	if(e.key == "ArrowRight" && checkPage(json)){
		
		if(json.Scene1.PAGES[currentPage].hasOwnProperty('NextPage')){
			currentPage = json.Scene1.PAGES[currentPage].NextPage;
		}
		else {
			pageNum++;
			currentPage = Object.keys(json.Scene1.PAGES)[pageNum];
		}
		
		initialize(json);
		handleOptions(json);
	}
	else return;
	
})

//Grabs the json data from the server
grabData();