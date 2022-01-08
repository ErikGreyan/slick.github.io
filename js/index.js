"use strict";

window.addEventListener("load", () => {
    const link = document.querySelectorAll("a[href='#']");
    link.forEach((elem) => {
        elem.addEventListener("click", (i) => {
            i.preventDefault();
        });
    });

    const menuButton = document.querySelector(".menu_btn");
    const menu = document.querySelector(".menu");
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("menu_open");
        menu.classList.toggle("ul_open");
    });

    scrollActive(".home", "#home");
    scrollActive(".about", "#about");
    scrollActive(".services", "#services");
    scrollActive(".showcase", "#showcase");
    scrollActive(".pricing", "#pricing");
    scrollActive(".team", "#team");
    scrollActive(".blog", "#blog");
    scrollActive(".btnUp", "#home");
    function scrollActive(btn, element) {
        const link = document.querySelector(btn);
        const nav = document.querySelector("nav");
        link.addEventListener("click", () => {
            const elem = document.querySelector(element).offsetTop - nav.offsetHeight;
            window.scrollTo(0, elem);
            menu.classList.remove("ul_open");
            menuButton.classList.remove("menu_open");
        });
    }

    scroll(".home", "#home");
    scroll(".about", "#about");
    scroll(".services", "#services");
    scroll(".showcase", "#showcase");
    scroll(".pricing", "#pricing");
    scroll(".team", "#team");
    scroll(".blog", "#blog");
    function scroll(link, element) {
        const slink = document.querySelector(link);
        const elem = document.querySelector(element);
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= elem.offsetTop - 100 && window.pageYOffset <= elem.offsetTop + elem.offsetHeight) {
                const x = document.querySelector(".active");
                if (x) {
                    x.classList.remove("active");
                }
                slink.classList.add("active");
            }
            else {
                slink.classList.remove("active");
            }
        })
    };

    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        window.scrollY >= 100 ? nav.classList.add("active_menu") : nav.classList.remove("active_menu");
    });


    const btnUp = document.querySelector(".btnUp");
    window.addEventListener("scroll", () => {
        window.scrollY >= 300 ? btnUp.classList.add("btnShow") : btnUp.classList.remove("btnShow");
    });
});