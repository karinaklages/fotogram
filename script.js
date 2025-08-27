// Variables 
// Data
let imagesArray = [
    { url: "./img/clownfish-3030148.jpg", title: "Clownfish", alt: "Clownfish in the ocean" },
    { url: "./img/coral-2694453.jpg", title: "Coral", alt: "Coral in the ocean" },
    { url: "./img/fighting-fish-2009972.jpg", title: "Fighting Fish", alt: "Fighting fish in the ocean" },
    { url: "./img/fish-7383981.jpg", title: "Colorful Fish", alt: "Colorful fish in the ocean" },
    { url: "./img/animal-1866808.jpg", title: "Turtle",  alt: "Turtle in the ocean" },
    { url: "./img/fighting-fish-2009971.jpg", title: "Fighting Fish", alt: "Fighting fish in the ocean" },
    { url: "./img/coral-4749104.jpg", title: "Coral", alt: "Coral in the ocean" },
    { url: "./img/octopus-7113989.jpg", title: "Octopus", alt: "Octopus in the ocean" },
    { url: "./img/jellyfish-6653502.jpg", title: "Jellyfish", alt: "Jellyfish in the ocean" },
    { url: "./img/fish-8250928.jpg", title: "Colorful Fish", alt: "Colorful fish in the ocean" },
    { url: "./img/reef-tank-3624204.jpg", title: "Reef Tank", alt: "Reef tank in the ocean" },
    { url: "./img/penguin-2203693.jpg", title: "Penguin",  alt: "Penguin in the ocean" },
];

// State 
let index = 0;
let currentImageIndex = 0; // Dialog navigation

// DOM manipulation
const dialogRef = document.getElementById("imageDialog");
const overlayRef = document.getElementById("dialogOverlay");


// Functions
// Renders the images out of the array with onload="render()" in index.html
function render() {

    let placeImages = document.getElementById("displayImageContainer")
    placeImages.innerHTML = ""; 

    for (let index = 0; index < imagesArray.length; index++) {
        placeImages.innerHTML += imageTemplate(index);
    }
}

// Opens and closes the dialog
function openDialog(index) {
    currentImageIndex = index;
    document.body.style.overflow = "hidden";
    renderDialog(currentImageIndex);
    overlayRef.style.display = "flex";
}

function closeDialog() {
    overlayRef.style.display = "none";
    document.body.style.overflow = "auto";
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

// Navigates the arrow buttons within the dialog 
function nextImage() {
    currentImageIndex = (currentImageIndex + 1 ) % imagesArray.length;
    renderDialog(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
    renderDialog(currentImageIndex);
}