// https://www.linkedin.com/learning/jquery-essential-training-2/creating-and-modifying-page-content?autoSkip=true&resume=false&u=56972265

// learning about selectors

// $("document").ready(function() { 
//     // calling jquery library with dollar sign, document keyword indicated we'll work on the entire page, ready function sets up event listener when dom structure is ready, ready event allows us to operate on page earlier
//     $("#content").append("<p>The page just loaded</p>"); 
//     // pass a callback function to the ready function
//     //want to perform operattion on id content, css style syntax
//     // appends piece of content and passing it to the function
//     // $("p").css("border", "3px solid red"); puts border on all p elemtns
//     // $(".selectors") selects all with class name selector
// //     $("#intro") selects all with id name intro
// //     $("p:first") selects only first p element
// //     $("h2:not(.selectors)") selects all h2 tags without class name selector
// })

// learning about modifying page content

// $("document").ready(function () {
//     var newP = $("<p>");
//     newP.append("<em>Hello There</em>");
//     // appending an html line to the example div
//     $("#example").html(newP);
//     $("#creation").prepend("Watch this! ");
//     // prepends text before the id
// })


// $("document").ready(function () {
//     alert()
//     document.getElementById("create").addEventListener
// })

// $("document").ready(function () {
//     $("#example").on("mousemove", onMouseOver);
//     $("#example").on("click", onMouseClick);
//     $("#example").on("mouseleave", onMouseLeave);
// });

// function onMouseOver(evt) {
//     $("#example").text(evt.type + ": " + evt.pageX + ", " + evt.pageY + "\n + 
//         "Button: " + evt.which + " Key: " + evt.metaKey);
// }

// $("document").ready(function () {
//     $("#go").click(function() { // click handler to the result of the jquery selector, gets element go
//         $("#testDiv").animate({width: 400}, 300) // passing the width to 400 over 300 miliseconds
//         .animate ({height: 300}, 400) // height is animated to 300 over 400ms
//         .animate({left: 200}, 500) // moves 200 to the left
//         .animate({top: "+=100", borderWidth: 10}, "slow") // take to top position and move 100 width, increase border width 10 slowly (600ms in jq)
//         // 4 animate calls: example of jquery's statement chaining
//     });
// });

$(document).ready(function () {
    $(document).ready(function() { // calling jQuery library with the dollar sign, document keyword indicated we'll work on the entire page, ready function sets up an event listener when the DOM structure is ready, the ready event allows us to operate on the page earlier
        $("#content").append("<p>The page just loaded</p>"); // pass a callback function to the ready function
        // want to perform an operation on the id content, CSS style syntax
        // appends a piece of content and passes it to the function
        $("p").css("border", "3px solid red"); // puts a border on all p elements
        // $(".selectors") selects all with a class name selector
        // $("#intro") selects all with an id name intro
        // $("p:first") selects only the first p element
        // $("h2:not(.selectors)") selects all h2 tags without the class name selector

        var newP = $("<p>");
        newP.append("<em>Hello There</em>");
        // appending an HTML line to the example div
        $("#example").html(newP);
        $("#creation").prepend("Watch this! ");
        // prepends text before the id
    });

    // $("#go").click(function() { // click handler to the result of the jQuery selector, gets element go
    $("#testDiv").animate({ width: 400 }, 300) // passing the width to 400 over 300 milliseconds
        .animate({ height: 300 }, 400) // height is animated to 300 over 400 ms
        .animate({ left: 200 }, 500) // moves 200 to the left
        .animate({ top: "+=100", borderWidth: 10 }, "slow"); // take it to the top position and move 100 width, increase border width 10 slowly (600 ms in jQuery)
    // 4 animate calls: an example of jQuery's statement chaining
});


