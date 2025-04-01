// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Скрипт для виділення жирним шрифтом
// потрібної категорії

function setActiveCategory() {
  const categoryList = document.querySelector(".products__category-list");

  categoryList &&
    categoryList.addEventListener("click", (e) => {
      const activeCategory = document.querySelector(".active");

      if (e.target === e.currentTarget) return;

      if (activeCategory) {
        activeCategory.classList.remove("active");
        e.target.classList.add("active");
      }
    });
}

// Скрипт плавної горизонтальної
// прокрутки при горизонтальному скроллі

function activateXScroll() {
  document.querySelectorAll(".scroll-container").forEach((scrollContainer) => {
    let isDown;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
      if (e.target.tagName == "P" || e.target.tagName == "H3") {
        return;
      }

      isDown = true;
      document.body.style.userSelect = "none";
      scrollContainer.classList.add("scroll-active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
      scrollContainer.classList.remove("scroll-active");
      document.body.style.userSelect = "";
    });

    scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
      scrollContainer.classList.remove("scroll-active");
      document.body.style.userSelect = "";
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 30; //  scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.style.scrollBehavior = "smooth";
  });
}

// Виклики потрібних скриптів
setActiveCategory();
activateXScroll();
