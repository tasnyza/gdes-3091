// jquery shorthand for making sure document is fully loaded
// $(function () {
//     // Access Art Institute of Chicago API
//     fetch("https://api.artic.edu/api/v1/artworks")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data.data);
//             console.log(data.data[0].color.h);
//             console.log(data.data[0].color.l);
//             console.log(data.data[0].color.s);
//             $("main").append(`<p>${data.data[0].color.h}<p>`)
//             $("main").append(`<p>${data.data[0].color.l}<p>`)
//             $("main").append(`<p>${data.data[0].color.s}<p>`)
//         })
//         .catch(function (error) {
//             $("main").html("There's been an error!");
//         })
// })

// $(function () {
//     // place kitten
//     fetch("https://placekitten.com/")
//         .then(function (response) {
//             return response.json();
//         })
        // .then(function (data) {
        //     console.log(data.data);
        //     console.log(data.data[0].color.h);
        //     console.log(data.data[0].color.l);
        //     console.log(data.data[0].color.s);
        //     $("main").append(`<p>${data.data[0].color.h}<p>`)
        //     $("main").append(`<p>${data.data[0].color.l}<p>`)
        //     $("main").append(`<p>${data.data[0].color.s}<p>`)
        // })
//         .catch(function (error) {
//             $("main").html("There's been an error!");
//         })
// })


// let chips = {
//     "description": "something tasty to eat",
//     "photo": "chips.jpg",
//     "name": "Lays Magic Masala"
// },
// {
//     "description": "it is something tasty to eat",
//     "photo": "zchips.jpg",
//     "name": "zLays Magic Masala"
// }

// console.log(chips.description)

// $(function () {

//     for (let i = 0, i < chips.length; i++) {
//         $("main").append('
//             <div>
//                 <img src="Github/Projects/json/${chips.photo}" width="50%">
//                 <h2>${chips.name}</h2>
//                 '); 
//     }
//     $("main").append("<h2>" + chips.name + "</h2>")
//     // $("main").append('<div><img src="Github/Projects/json/${chips.photo}" width="50%"><h2>${chips.name}</h2>'); 
// })



// took help from https://www.youtube.com/watch?v=uxf0--uiX0I&ab_channel=TheCodingTrain


const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'; // making the api link into a constant
async function getISS() { // fetching the data
    const response = await fetch(api_url);
    const data = await response.json(); //turning the data into json
    // console.log(data);
    const { latitude, longitude }  = data;
    console.log(latitude);
    console.log(longitude);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;

    console.log(latitude);
    console.log(longtitude);
}

getISS();

// const apiUrl = "https://random-d.uk/api/v2";

// function getRandomDuck() {
//     // Make a request to the /random endpoint
//     fetch(`${apiUrl}/random?type=JPG`)
//         .then(response => response.json())
//         .then(data => {
//             // Update the image source with the random duck image URL
//             document.getElementById("duckImage").src = data.url;
//         })
//         .catch(error => {
//             console.error("Error fetching random duck:", error);
//         });
// }

// function getCatFact() {
//     const api_url2 = 
// }
