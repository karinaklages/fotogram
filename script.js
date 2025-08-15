// VARIABLES 

// === data ===
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

// === state ===
let index = 0;
let currentImageIndex = 0; // dialog navigation

// === DOM manipulation ===
const dialogRef = document.getElementById("imageDialog");
const overlayRef = document.getElementById("dialogOverlay");



// FUNCTIONS

// renders the images out of the array with onload="render()" in index.html
function render() {

    let placeImages = document.getElementById("displayImageContainer")
    placeImages.innerHTML = ""; 

    for (let index = 0; index < imagesArray.length; index++) {
        placeImages.innerHTML += imageTemplate(index);
    }
}

function imageTemplate(index) {
    return  `<img src="${imagesArray[index].url}" 
            title="${imagesArray[index].title}" 
            alt="${imagesArray[index].alt}"
            onclick="openDialog(${index})"  
            class="imageStyle"
            tabindex="0"> 
            `;
}

// opens and closes the dialog
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

// event-bubbling closes overlay with onclick
function overlayClick(event) {
    event.stopPropagation();
}

// renders the dialog with all its html elements
function renderDialog(index) {
    let placeDialog = document.getElementById("imageDialog")
    placeDialog.innerHTML = "";
    placeDialog.innerHTML += dialogTemplate(index);
}

function dialogTemplate(index) {
    return `   
        <header>
            <h2 id="dialogHeadline">Underwater World</h2>
            <div class="subheadline">
                <p id="dialogImageName">${imagesArray[index].title}</p>
                <p id="countImageNumber">${index + 1} / ${imagesArray.length}</p>
            </div>
        </header>

        <div id="dialogImages">
            <img src="${imagesArray[index].url}" title="${imagesArray[index].title}" alt="${imagesArray[index].alt}" class="showDialogImage">
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

// navigates the arrow buttons within the dialog 
function nextImage() {
    currentImageIndex = (currentImageIndex + 1 ) % imagesArray.length;
    renderDialog(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
    renderDialog(currentImageIndex);
}