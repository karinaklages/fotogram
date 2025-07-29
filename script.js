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


let imageNamesArray = [
"Clownfish",
"Coral",
"Fighting Fish",
"Colorful Fish",
"Turtle",
"Fighting Fish",
"Coral",
"Octopus",
"Jellyfish",
"Colorful Fish",
"Reef Tank",
"Penguin",
];


let countNumbersArray = [
"1 / 12",
"2 / 12",
"3 / 12",
"4 / 12",
"5 / 12",
"6 / 12",
"7 / 12",
"8 / 12",
"9 / 12",
"10 / 12",
"11 / 12",
"12 / 12",
];


// Renders the images out of the array
function render() {

    let placeImages = document.getElementById("displayImageContainer")
    placeImages.innerHTML = ""; 

    for (let index = 0; index < imagesArray.length; index++) {
        placeImages.innerHTML += imageTemplate(index);
    }
}

function imageTemplate(index) {
    return  `<img src="${imagesArray[index]}" 
            onclick="openDialog(${index})"  
            class="imageStyle"
            tabindex="0"> 
            `;
}

render() 


// Opens and closes the image dialog
const dialogRef = document.getElementById("imageDialog")
const overlayRef = document.getElementById("dialogOverlay");

function openDialog() {
    overlayRef.style.display = "block";
    dialogRef.classList.remove("dNone");
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.add("dNone");
    overlayRef.style.display = "none";
}