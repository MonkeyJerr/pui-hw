const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".header-graphic");
var imageId = document.getElementById('logo');

const sectionOneOptions = {
  rootMargin: "-15% 0px 0px 0px"
};


const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        console.log(nav);
      nav.classList.add("nav-scrolled");
      imageId.src = "img/GlassesIconBlack.png";
    } else {
      nav.classList.remove("nav-scrolled");
      imageId.src = "img/GlassesIcon.png";
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);