document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image'); // Get all images with the carousel-image class
    const nameSwitch = document.querySelector('.Name-switch'); // Get the paragraph element
    let currentIndex = 0;  // Set the initial image index

    // Function to show the image at the current index
    function showImage(index) {
        // Hide all images first
        images.forEach(image => {
            image.style.display = 'none';
        });

        // Display the image at the current index
        images[index].style.display = 'block';

        // Update the paragraph text based on the current index
        switch(index) {
            case 0:
                nameSwitch.textContent = "Four Season Prague";
                break;
            case 1:
                nameSwitch.textContent = "Zdenek's Oyster Bar";
                break;
            case 2:
                nameSwitch.textContent = "ZEM Prague";
                break;
            default:
                nameSwitch.textContent = ""; // Default to blank
                break;
        }
    }

    // Initialize the carousel by showing the first image
    showImage(currentIndex);

    // Function to go to the next image
    function nextImage() {
        // Increment the index, and loop back to the first image when it reaches the end
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Change images every 3 seconds
    setInterval(nextImage, 3000); // 3000 milliseconds = 3 seconds
});

const button = document.getElementById('main-nav-button')
const links = document.getElementById('main-nav-list')
const buttonSVG = document.getElementById('button-svg')
const header = document.querySelector('.site-header')
const contact = document.querySelector('.contact')


button.addEventListener('click', function(){
    if (links.classList.contains('close')){
        links.classList.remove('close')
        links.classList.add('open')

        contact.classList.contains('close')
        contact.classList.remove('close')
        contact.classList.add('open')

        header.classList.remove('site-header')
        header.classList.add('site-header-mobile')
        buttonSVG.src = 'images/close.svg'

    } else if (links.classList.contains('open')){
        links.classList.remove('open')
        links.classList.add('close')

        contact.classList.contains('open')
        contact.classList.remove('open')
        contact.classList.add('close')

        header.classList.remove('site-header-mobile')
        header.classList.add('site-header')
        buttonSVG.src = 'images/menu.svg'
        buttonSVG.style.width = '26px'
        buttonSVG.style.height = '26px'
    }

})
