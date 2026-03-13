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
 
  
  // Abrir video en modal
  $(".ver-video").click(function(){

    let video = $(this).data("video");

    $("#videoFrame").attr("src", video + "?rel=0&autoplay=1");

    let modal = new bootstrap.Modal(document.getElementById("videoModal"));
    modal.show();

  });
  
  // Detener video al cerrar
  $("#videoModal").on("hidden.bs.modal", function () {
    $("#videoFrame").attr("src", "");
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

