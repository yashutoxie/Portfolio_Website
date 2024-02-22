// Create a script element
var script = document.createElement('script');

// Set the source attribute to the Typed.js library
script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
 
script.onload = function() { 
    var typed = new Typed('#element', {
      strings: ['Developer', 'Engineer','Learner','Explorer','Tech Enthusiast.'],
      typeSpeed: 50,
    });  
}

// Append the script element to the document's head
document.head.appendChild(script);
