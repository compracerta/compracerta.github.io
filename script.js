/*
I want to thank Paul Rudnitskiy for his idea.
If you need full work version you can download it here  https://github.com/BlackStar1991/CardProduct
*/

window.onload = function () {

    //// SLIDER
    var slider = document.getElementsByClassName("sliderBlock_items");
    var slides = document.getElementsByClassName("sliderBlock_items__itemPhoto");
    var next = document.getElementsByClassName("sliderBlock_controls__arrowForward")[0];
    var previous = document.getElementsByClassName("sliderBlock_controls__arrowBackward")[0];
    var items = document.getElementsByClassName("sliderBlock_positionControls")[0];
    var currentSlideItem = document.getElementsByClassName("sliderBlock_positionControls__paginatorItem");

    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);  /// Delay time of slides

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }


    function goToSlide(n) {
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
    }


    next.onclick = function () {
        nextSlide();
    };
    previous.onclick = function () {
        previousSlide();
    };


    function goToSlideAfterPushTheMiniBlock() {
        for (var i = 0; i < currentSlideItem.length; i++) {
            currentSlideItem[i].onclick = function (i) {
                var index = Array.prototype.indexOf.call(currentSlideItem, this);
                goToSlide(index);
            }
        }
    }

    goToSlideAfterPushTheMiniBlock();


/////////////////////////////////////////////////////////

///// Specification Field


    var buttonFullSpecification = document.getElementsByClassName("block_specification")[0];
    var buttonSpecification = document.getElementsByClassName("block_specification__specificationShow")[0];
    var buttonInformation = document.getElementsByClassName("block_specification__informationShow")[0];

    var blockCharacteristiic = document.querySelector(".block_descriptionCharacteristic");
    var activeCharacteristic = document.querySelector(".block_descriptionCharacteristic__active");


    buttonFullSpecification.onclick = function () {
        console.log("OK");
        buttonSpecification.classList.toggle("hide");
        buttonInformation.classList.toggle("hide");
        blockCharacteristiic.classList.toggle("block_descriptionCharacteristic__active");
    };
};


function toggleMedia(button) {
    var mediaContainer = document.getElementById("media-container");
    var mediaVideo = document.getElementById("media-video");
    var mediaImage = document.getElementById("media-image");
    var mediaSrc = button.getAttribute("data-media-src");
    
    if (mediaContainer.style.display === "none") {
        if (mediaSrc.endsWith(".mp4")) {
        mediaVideo.src = mediaSrc;
        mediaImage.style.display = "none";
        mediaVideo.style.display = "block";
        mediaVideo.play(); // Reproduz o vídeo automaticamente
        } else {
        mediaImage.src = mediaSrc;
        mediaVideo.style.display = "none";
        mediaImage.style.display = "block";
        }
    
        mediaContainer.style.display = "block";
    } else {
        mediaContainer.style.display = "none";
        mediaVideo.pause();
        mediaVideo.currentTime = 0;
        mediaImage.src = "";
    }
    }
    
    function closeMedia() {
    var mediaContainer = document.getElementById("media-container");
    var mediaVideo = document.getElementById("media-video");
    var mediaImage = document.getElementById("media-image");
    
    mediaContainer.style.display = "none";
    mediaVideo.pause();
    mediaVideo.src = "";
    mediaImage.src = "";
}


