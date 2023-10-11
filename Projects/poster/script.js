// fade transitions that didnt work

// const elementsToFadeIn = document.querySelectorAll('.fade-in');

// function checkFadeIn() {
//   elementsToFadeIn.forEach(element => {
//     const elementTop = element.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if (elementTop < windowHeight - 20) {
//       element.classList.add('active');
//     }
//   });
// }

// // Listen for scroll events
// window.addEventListener('scroll', checkFadeIn);

// // Trigger the check when the page loads
// window.addEventListener('load', checkFadeIn);

// Function to check if an element is in viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   // Function to handle scroll events
//   function handleScroll() {
//     const textElements = document.querySelectorAll('.text-2, .text-3');
    
//     textElements.forEach((element) => {
//       if (isInViewport(element)) {
//         element.classList.add('fade-in');
//       }
//     });
//   }
  
//   // Listen for scroll events
//   window.addEventListener('scroll', handleScroll);
  
//   // Trigger the initial check in case elements are in view on page load
//   window.addEventListener('load', handleScroll);

// help from https://www.youtube.com/watch?v=T33NN_pPeNI&ab_channel=BeyondFireship

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         // } else {
//         //     entry.target.classList.remove('show');
//         }

//     });
// }); //handles multuple entries

// const fadeElements = document.querySelectorAll('.fade'); //grab all elements with fade class
// fadeElements.forEach((el) => observer.observe(el)); //observe each of the elements

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//       }
//     });
//   }, { threshold: 0.5 });  // Observe when 50% of the element is visible
  
//   const fadeElements = document.querySelectorAll('.fade'); // Grab all elements with fade class
//   fadeElements.forEach((el) => observer.observe(el)); // Observe each of the elements


//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('unhide');
//         } else {
//             entry.target.classList.remove('unhide');
//       }
//     });
//   }, { threshold: 0.5 });  // Observe when 50% of the element is visible
  
//   const blurElements = document.querySelectorAll('.blur'); // Grab all elements with fade class
//   blurElements.forEach((el) => observer.observe(el)); // Observe each of the elements

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.5 });  // Observe when 50% of the element is visible
  
  const fadeElements = document.querySelectorAll('.fade'); // Grab all elements with fade class
  fadeElements.forEach((el) => fadeObserver.observe(el)); // Observe each of the elements
  
  const blurObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('unhide');
      } else {
        entry.target.classList.remove('unhide');
      }
    });
  }, { threshold: 0.5 });  // Observe when 50% of the element is visible
  
  const blurElements = document.querySelectorAll('.blur'); // Grab all elements with blur class
  blurElements.forEach((el) => blurObserver.observe(el)); // Observe each of the elements
  