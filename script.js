"use strict";


let imagesArray = [
    { url: "./img/clownfish-3030148.jpg", title: "Clownfish", alt: "Clownfish in the ocean", counter: "1 / 12" },
    { url: "./img/coral-2694453.jpg", title: "Coral", alt: "Coral in the ocean", counter: "2 / 12" },
    { url: "./img/fighting-fish-2009972.jpg", title: "Fighting Fish", alt: "Fighting fish in the ocean", counter: "3 / 12" },
    { url: "./img/fish-7383981.jpg", title: "Colorful Fish", alt: "Colorful fish in the ocean", counter: "4 / 12" },
    { url: "./img/animal-1866808.jpg", title: "Turtle",  alt: "Turtle in the ocean",counter: "5 / 12" },
    { url: "./img/fighting-fish-2009971.jpg", title: "Fighting Fish", alt: "Fighting fish in the ocean", counter: "6 / 12" },
    { url: "./img/coral-4749104.jpg", title: "Coral", alt: "Coral in the ocean", counter: "7 / 12" },
    { url: "./img/octopus-7113989.jpg", title: "Octopus", alt: "Octopus in the ocean", counter: "8 / 12" },
    { url: "./img/jellyfish-6653502.jpg", title: "Jellyfish", alt: "Jellyfish in the ocean", counter: "9 / 12" },
    { url: "./img/fish-8250928.jpg", title: "Colorful Fish", alt: "Colorful fish in the ocean", counter: "10 / 12" },
    { url: "./img/reef-tank-3624204.jpg", title: "Reef Tank", alt: "Reef tank in the ocean",  counter: "11 / 12" },
    { url: "./img/penguin-2203693.jpg", title: "Penguin",  alt: "Penguin in the ocean", counter: "12 / 12" },
];


let index = 0;
let currentImageIndex = 0;


// Renders the images out of the array with onload="render()" in index.html
function render() {

    let placeImages = document.getElementById("displayImageContainer")
    placeImages.innerHTML = ""; 

    for (let index = 0; index < imagesArray.length; index++) {
        placeImages.innerHTML += imageTemplate(index);
    }
}

function imageTemplate(index) {
    const image = imagesArray[index];
    return  `<img src="${image.url}" 
            title="${image.title}" 
            alt="${image.alt}"
            onclick="openDialog(${index})"  
            class="imageStyle"
            tabindex="0"> 
            `;
}

render() 


// Opens and closes the dialog
const dialogRef = document.getElementById("imageDialog")
const overlayRef = document.getElementById("dialogOverlay");

function openDialog(index) { // Needs the index to show the current picture. 
    renderDialog(index);
    overlayRef.style.display = "block";
    dialogRef.classList.remove("dNone");
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.add("dNone");
    overlayRef.style.display = "none";
}


// Event-bubbling closes overlay with onclick
function overlayClick(event) {
    event.stopPropagation();
}


// Renders the dialog with all its html elements
function renderDialog(index) {
    let placeDialog = document.getElementById("imageDialog")
    placeDialog.innerHTML = "";
    placeDialog.innerHTML += dialogTemplate(index);
}

function dialogTemplate(index) {
    const image = imagesArray[index];
    return `   
        <header>
            <h2 id="dialogHeadline">Underwater World</h2>
            <div class="subheadline">
                <p id="dialogImageName">${image.title}</p>
                <p id="countImageNumber">${image.counter}</p>
            </div>
        </header>

        <div id="dialogImages">
            <img src="${image.url}" title="${image.title}" alt="${image.alt}" class="showDialogImage">
        </div>

        <footer class="dialogFooter">
            <div class="iconBarLeft">
                <div class="icon">
                    <img src="./img/arrow-left.png" alt="Left Arrow Icon" height="32px" aria-label="Back button" onclick="prevImage()">
                </div>
                <div class="icon">
                    <img src="./img/arrow-right.png" alt="Right Arrow Icon" height="32px" aria-label="Forward button" onclick="nextImage()">
                </div>
            </div>
            <div class="iconBarRight">
                <div class="icon">
                    <img src="./img/close-button.png" alt="Close Icon" height="32px" aria-label="Close dialog" onclick="closeDialog()">
                </div>
            </div>
        </footer>
    `;
}

renderDialog(index)


// Navigates the arrow buttons within the dialog 
function nextImage() {
    currentImageIndex = (currentImageIndex + 1 ) % imagesArray.length;
    renderDialog(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
    renderDialog(currentImageIndex);
}
