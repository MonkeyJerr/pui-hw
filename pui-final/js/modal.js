
const images = document.querySelectorAll(".gallery__item img");
let picSrc;

// get the images
images.forEach((pic, index) => {
    pic.addEventListener("click", (e) => {
        picSrc = e.target.src;
        imgModal(picSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const imageModal = document.createElement("div");
    imageModal.setAttribute("class", "modal");
    //add modal
    document.querySelector(".main").append(imageModal);
    //put image in the modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //close button code
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //take out modal after you press X
    closeBtn.onclick = () => {
        imageModal.remove();
    };

imageModal.append(newImage, closeBtn);
};
