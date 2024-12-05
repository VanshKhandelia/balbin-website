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
