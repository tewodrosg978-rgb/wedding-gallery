const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
];

const gallery = document.getElementById("gallery");

images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
});