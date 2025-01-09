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



// Nav menu interactions
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('main-nav-button');
    const links = document.getElementById('main-nav-list');
    const buttonSVG = document.getElementById('button-svg');
    const header = document.querySelector('.site-header');
    const contact = document.querySelector('.contact');

    function updateMenu() {
        const clientWidth = header.clientWidth;
        if (clientWidth >= 810) {
            links.innerHTML = `
                <li id='water-hover'>
                    <a href="#">
                        Water
                        <img src="images/chevron-down-1.svg" alt="arrow down to access drop down menu" class="chevron">
                    </a>
                    <ul class='water-dropdown' id='water-dropdown'>
                        <li class='water-li' id='water-li'>
                            <a href="#">
                                <div class="call-to-action-2">
                                    <div class="bottle-img-container">
                                        <img src="./images/hero-img.jpg" alt="A glass bottle of Balbin water against a rock-like background" class="bottle-img">
                                    </div>
                                    <div class="call-to-action-2-text hover">
                                        <p>Still</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class='water-li'>
                            <a href="#">
                                <div class="call-to-action-2">
                                    <div class="bottle-img-container">
                                        <img src="./images/sparkling-water.jpg" alt="A glass bottle of Balbin water against a rock-like background" class="bottle-img">
                                    </div>
                                    <div class="call-to-action-2-text hover">
                                        <p>Sparkling</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                </li>
                <li><a href="#">Story</a></li>
                <li><a href="#">Partners</a></li>`;
            // Ensure the menu is set to its default state for desktop
            if (links.classList.contains('open')) {
                links.classList.remove('open');
                links.classList.add('close');
            }

            attachHoverListeners();

        } else {
            links.innerHTML = `
                <li><a href="#">Still Water</a></li>
                <li><a href="#">Sparkling Water</a></li>
                <li><a href="#">Story</a></li>
                <li><a href="#">Partners</a></li>`;
            // Ensure the menu is set to its default state for mobile
            if (links.classList.contains('open')) {
                links.classList.remove('open');
                links.classList.add('close');
            }
        }
    }

    function toggleMenu() {
        if (links.classList.contains('close')) {
            links.classList.remove('close');
            links.classList.add('open');
            contact.classList.remove('close');
            contact.classList.add('open');
            header.classList.remove('close');
            header.classList.add('open');
            buttonSVG.src = 'images/close.svg';
            buttonSVG.style.width = '26px';
            buttonSVG.style.height = '26px';

        } else if (links.classList.contains('open')) {
            links.classList.remove('open');
            links.classList.add('close');
            contact.classList.remove('open');
            contact.classList.add('close');
            header.classList.remove('open');
            header.classList.add('close');
            buttonSVG.src = 'images/menu.svg';
            buttonSVG.style.width = '34px';
            buttonSVG.style.height = '34px';
        }
    }

    // Menu button click
    button.addEventListener('click', toggleMenu);

    // Window resize
    window.addEventListener('resize', updateMenu);

    // Initialize the menu based on the current window size
    updateMenu();
});


// Call to Action 2 Hover Effect
const cta2 = document.querySelector('.call-to-action-2-anchor')
const bottleImg = document.querySelector('.bottle-img')

cta2.addEventListener('mouseover', function (){
    bottleImg.src = "./images/hero-img-hover.png"
})

cta2.addEventListener('mouseout', function (){
    bottleImg.src = "./images/hero-img.jpg"
})

// Water drop down hover

function attachHoverListeners (){
    const waterHover = document.querySelector('#water-hover')
    const waterDropdown = document.querySelector('#water-dropdown')
    const waterLi = document.querySelector('#water-li')
    
    waterHover.addEventListener('mouseover', function (){
        waterDropdown.style.display = 'flex'
    })
    
    waterDropdown.addEventListener('mouseout', function (){
        waterDropdown.style.display = 'none'
    })
}

