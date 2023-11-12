// jquery shorthand for making sure document is fully loaded
$(function () {
    // Access Art Institute of Chicago API
    fetch("https://api.artic.edu/api/v1/artworks")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);
            console.log(data.data[0].color.h);
            console.log(data.data[0].color.l);
            console.log(data.data[0].color.s);
            $("main").append(`<p>${data.data[0].color.h}<p>`)
            $("main").append(`<p>${data.data[0].color.l}<p>`)
            $("main").append(`<p>${data.data[0].color.s}<p>`)
        })
        .catch(function (error) {
            $("main").html("There's been an error!");
        })
})


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