$(document).ready(function () {
    
    $(window).scroll(function () {
    // Scroll navbar start
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
    // Scroll navbar end
  
    // Scroll Button start
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    // Scroll Button end
    });
  
    // Scroll up Button start
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    // Scroll up Button end
  
    // Typing start
    var typed = new Typed(".typing", {
        strings: ["diseñador gráfico", "desarrollador web", "diseñador web"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing1", {
        strings: ["diseñador gráfico", "desarrollador web", "diseñador web"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    // Typing end

  
    // Toggle start
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    // Toggle end
});
