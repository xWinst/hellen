!function(){var e={openMenuBtn:document.querySelector(".menu-open-btn"),closeMenuBtn:document.querySelector(".menu-close-btn"),closeMenu:document.querySelectorAll(".mobile-menu-link"),menu:document.querySelector(".mobile-menu"),body:document.querySelector("body")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.closeMenu.forEach((function(e){return e.addEventListener("click",n)}))}();
//# sourceMappingURL=index.b7ad940c.js.map