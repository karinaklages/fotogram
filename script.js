"use strict";


let imagesArray = [
"./img/clownfish-3030148.jpg",
"./img/coral-2694453.jpg",
"./img/fighting-fish-2009972.jpg",
"./img/fish-7383981.jpg",
"./img/animal-1866808.jpg",
"./img/fighting-fish-2009971.jpg",
"./img/coral-4749104.jpg",
"./img/octopus-7113989.jpg",
"./img/jellyfish-6653502.jpg",
"./img/fish-8250928.jpg",
"./img/reef-tank-3624204.jpg",
"./img/penguin-2203693.jpg",
];


// Renders the images out of the array
function render() {

    let placeImages = document.getElementById("displayImageContainer")
    placeImages.innerHTML = ""; 

    for (let index = 0; index < imagesArray.length; index++) {
        let img = document.createElement("img");
        img.src = imagesArray[index];
        img.alt = "Image" + " " + (index + 1);
        img.classList.add("imageStyle");

        placeImages.appendChild(img);
    }
}

render()


// Opens and closes the image dialog
const dialogRef = document.getElementById("imageDialog")

function openDialog() {
    dialogRef.classList.remove("dNone");
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.add("dNone");
}
