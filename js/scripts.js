$(function(){

  // Navbar cambia color al hacer scroll + animación reveal
  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }

    // Animación reveal
    $(".reveal").each(function(){
      let windowHeight = $(window).height();
      let elementTop = $(this).offset().top;
      let scrollTop = $(window).scrollTop();
      if(scrollTop + windowHeight - 100 > elementTop){
        $(this).addClass("active");
      }
    });
  });

  // Scroll suave en enlaces internos
  $(".nav-link").click(function(e){
    let target = $(this).attr("href");
    if(target.startsWith("#") && $(target).length){
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $(target).offset().top - 70
      }, 700);
    }
  });

});

// Activar dark mode guardado
$(document).ready(function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    $("body").addClass("dark-mode");
    $("#darkMode i").removeClass("bi-moon").addClass("bi-sun");
  }
});

// Botón Dark Mode
$("#darkMode").click(function () {
  $("body").toggleClass("dark-mode");

  let icon = $(this).find("i");

  if ($("body").hasClass("dark-mode")) {
    icon.removeClass("bi-moon").addClass("bi-sun");
    localStorage.setItem("darkMode", "enabled");
  } else {
    icon.removeClass("bi-sun").addClass("bi-moon");
    localStorage.setItem("darkMode", "disabled");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones con clase project-btn
  const projectButtons = document.querySelectorAll(".project-btn");
  projectButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });

  // Selecciona todas las imágenes con clase project-img
  const projectImages = document.querySelectorAll(".project-img");
  projectImages.forEach(img => {
    img.addEventListener("click", function () {
      const url = img.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
