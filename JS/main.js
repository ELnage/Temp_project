   let slide = Array.from(document.querySelectorAll("#home .slide"));
   let slidesCount = slide.length;
   let currentSlide = 3;
   let left = document.getElementById("left");
   let right = document.getElementById("right");
   let bullets = Array.from(document.querySelectorAll("#home .bullets li"));

   right.onclick = pervSlide;
   left.onclick = nextSlide;
   function nextSlide() {
   removeActive();
   if (currentSlide < slidesCount) {
      currentSlide++;
   } else {
      currentSlide = 1;
   }
   cheker();
   }
   function pervSlide() {
   removeActive();
   if (currentSlide > 1) {
      currentSlide--;
   } else {
      currentSlide = slidesCount;
   }
   cheker();
   }

   function removeActive() {
   slide.forEach((e) => {
      e.classList.remove("active");
   });

   bullets.forEach((e) => {
      e.classList.remove("active");
   });
   }
   function cheker() {
   slide[currentSlide - 1].classList.add("active");
   bullets[currentSlide - 1].classList.add("active");
   }
   bullets.forEach((e) => {
   e.onclick = function () {
      currentSlide = e.getAttribute("data-index");
      removeActive();
      cheker();
   };
   });

   setInterval(() => {
   if (currentSlide > 1) {
      currentSlide--;
   } else {
      currentSlide = slidesCount;
   }
   removeActive();
   cheker();
   }, 6000);
   cheker();
