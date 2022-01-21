const navSlide = () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".header");

  // ajoute une classe au click sur les element seletionner ci-dessus
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("active");
  });
};

// AU CAS OU ON A PLUSIEURS FONCTIONS
const app = () => {
  navSlide();
};

// APPEL DE LA FONCTION APP POUR EFFECTUER TOUTES NOS FONCTIONS
app();
