// Підключення основного файлу стилів
import "../scss/style.scss";
// ================================================
import * as flsFunctions from "./files/functions.js";

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
import "./files/scroll/lazyload.js";

// Функції роботи скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
flsScroll.pageNavigation();

/* Підключаємо файли зі своїм кодом */
import "./files/script.js";
