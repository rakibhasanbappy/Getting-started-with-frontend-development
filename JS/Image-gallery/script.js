const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pic_names = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt_names = {
    "pic1.jpg": "pic1",
    "pic2.jpg": "pic2",
    "pic3.jpg": "pic3",
    "pic4.jpg": "pic4",
    "pic5.jpg": "pic5"
}

/* Looping through images */
for(const name of pic_names){
    const img_name = "images\\" + name;
    const alt_name = alt_names[name];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', img_name);
    newImage.setAttribute('alt', alt_name);
    thumbBar.appendChild(newImage);
}

/* Focus every image to show it bigger */
function displayImage(e){
    const name = e.target.src;
    const alt = e.target.alt;
    console.log(name);
    displayedImage.setAttribute('src', name);
    displayedImage.setAttribute('alt', alt);
}

thumbBar.addEventListener("click", displayImage);


/* Wiring up the Darken/Lighten button */
function changeStatus(e){
    const status = e.target.className;

    if(status === "dark"){
        e.target.textContent = "Lighten";
        e.target.className = "light";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }else{
        e.target.textContent = "Darken";
        e.target.className = "dark";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

btn.addEventListener("click", changeStatus);

