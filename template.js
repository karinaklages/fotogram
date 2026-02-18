// Template for array images
function imageTemplate(index) {
    return  `<img src="${imagesArray[index].url}" 
        title="${imagesArray[index].title}" 
        alt="${imagesArray[index].alt}"
        onclick="openDialog(${index})"  
        class="imageStyle"
        tabindex="0"> 
    `;
}

// Template for pop-up window
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
                    <img src="./img/arrow-left.png" alt="Left Arrow Icon" height="32px" aria-label="Backward button" onclick="prevImage()">
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