let index = 0;
displayImages();
function displayImages() {
    let i;
    const images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
images[i].style.display = "none";
}
index++;
if (index > images.length) {
index = 1;
}
images[index-1].style.display = "block";
setTimeout(displayImages, 3000); 
}

function classic_1() {
window.location.href='./Classic-pizza-files/classicPizza.html';
}

function classic_2() {
window.location.href='./Standard-pizza-files/StandardPizza.html';
}

function classic_3() {
window.location.href='./Premium-pizza-files/PremiumPizza.html';
}