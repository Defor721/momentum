const images = [ 
    "(1).JPG",
    "(2).JPG",
    "(3).JPG",
    "(4).JPG",
    "(5).JPG",
    "(6).JPG",
    "(7).JPG",
    "(8).JPG",
    "(9).JPG",
    "(10).JPG",
    "(11).JPG",
    "(12).JPG",
    "(13).JPG",
    "(14).JPG",
    "(15).JPG",
    "(16).JPG",
    "(17).JPG",
    "(18).JPG",
    "(19).JPG",
    "(20).JPG"
]


const chosenImage = images[Math.floor(Math.random() * images.length)];


const body = document.querySelector("body");

body.background = `/img/${chosenImage}`;




// const bgImage = document.createElement("img");

// bgImage.src=`img/${chosenImage}`

// document.body.appendChild(bgImage);

// //appendChild( = 

