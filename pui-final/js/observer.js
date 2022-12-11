const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".header-graphic");
var imageId = document.getElementById('logo');

// set the point of intersection
const sectionOneOptions = {
  rootMargin: "-15% 0px 0px 0px"
};

// create the intersection observer

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        // the navbar has been scrolled
      nav.classList.add("nav-scrolled");
      imageId.src = "img/GlassesIconBlack.png";
    } else {
                // the navbar hasn't been scrolled
      nav.classList.remove("nav-scrolled");
      imageId.src = "img/GlassesIcon.png";
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);