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
const navLogo = document.querySelector(".logo");
const logo1 = document.createElement("img");
logo1.className = "logo1";
logo1.src = "./assets/img/logo.png";
navLogo.appendChild(logo1);

const logo2 = document.createElement("img");
logo2.className = "logo2";
logo2.src = "./assets/img/logo2.png";
logo2.style = "display:none";
navLogo.appendChild(logo2);

const navColorChanging = () => {
  let posScrollPre = window.pageYOffset;

  window.onscroll = function () {
    let posScrollNow = window.pageYOffset;
    let topPage = (window.scrollY = 0);
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav a");
    const menuBurger = document.querySelectorAll(".menu-burger div");
    const logo1 = document.querySelector(".logo1");
    const logo2 = document.querySelector(".logo2");

    if (posScrollPre < posScrollNow) {
      header.style = "background:rgba(255, 255, 255, 0.863);";
      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style = "color:black";
      }

      for (i = 0; i < menuBurger.length; i++) {
        menuBurger[i].style = "background:black";
      }
      logo1.style = "display:none";
      logo2.style.display = "flex";
    } else if (posScrollNow == topPage) {
      header.style.background = "transparent";
      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style = "color:white";
      }

      for (i = 0; i < menuBurger.length; i++) {
        menuBurger[i].style = "background:white";
      }
      logo2.style = "display:none";
      logo1.style.display = "flex";
    }

    posScrollPre = posScrollNow;
  };
};

// AU CAS OU ON A PLUSIEURS FONCTIONS
const app = () => {
  navSlide();
  closeSlide();
  navColorChanging();
};

// APPEL DE LA FONCTION APP POUR EFFECTUER TOUTES NOS FONCTIONS
app();
