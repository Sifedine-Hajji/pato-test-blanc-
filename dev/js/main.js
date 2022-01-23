console.log("hello");
const navSlide = () => {
  const burger = document.querySelector(".menu-burger");
  const burgerSlide = document.querySelector(".burger-slide");

  // ajoute une classe au click sur les element seletionner ci-dessus
  burger.addEventListener("click", () => {
    burgerSlide.classList.toggle("active");
  });
};

const closeSlide = () => {
  const burgerSlide = document.querySelector(".burger-slide");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => {
    burgerSlide.classList.toggle("active");
  });
};

// AU CAS OU ON A PLUSIEURS FONCTIONS
const app = () => {
  navSlide();
  closeSlide();
};

// APPEL DE LA FONCTION APP POUR EFFECTUER TOUTES NOS FONCTIONS
app();
