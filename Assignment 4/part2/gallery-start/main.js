  /*
 * Name - harsh Patel
 * Assignment - 4 part 2
 * JS file
 * Date 29 March 2024
 * */ 
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];

/* Declaring the alternative text for each image file */


/* Looping through images */

const imagesData = [
    { src: 'images/pic1.jpg', alt: 'eye image' },
    { src: 'images/pic2.jpg', alt: 'design' },
    { src: 'images/pic3.jpg', alt: 'flowers' },
    { src: 'images/pic4.jpg', alt: 'old image' },
    { src: 'images/pic5.jpg', alt: 'butterfly' }
];
imagesData.forEach(data => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', data.src);
    newImage.setAttribute('alt', data.alt);
    thumbBar.appendChild(newImage);
});


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function(){
    const currentClass = btn.getAttribute('class')

    if(currentClass === 'dark'){
        btn.setAttribute('class', 'white')

        btn.textContent = 'Lighten'

        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else{
        btn.setAttribute('class', 'dark');
        // Change the button text content back to "Darken"
        btn.textContent = "Darken";
        // Change the background-color of the overlay div to "rgb(0 0 0 / 0%)"
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});