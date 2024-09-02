
// $(function() {
//     $(".navbar-toggler").on("click", function(e) {
//         $(".tm-header").toggleClass("show");
//         e.stopPropagation();
//       });
    
//       $("html").click(function(e) {
//         var header = document.getElementById("tm-header");
    
//         if (!header.contains(e.target)) {
//           $(".tm-header").removeClass("show");
//         }
//       });
    
//       $("#tm-nav .nav-link").click(function(e) {
//         $(".tm-header").removeClass("show");
//       });
// });

if (typeof window !== 'undefined') {

  document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the navbar toggler
    document.querySelector('.navbar-toggler').addEventListener('click', function(e) {
      document.querySelector('.tm-header').classList.toggle('show');
      e.stopPropagation();
    });

    // Add click event listener to the document
    document.addEventListener('click', function(e) {
      var header = document.getElementById('tm-header');
      
      if (!header.contains(e.target)) {
        document.querySelector('.tm-header').classList.remove('show');
      }
    });

    // Add click event listener to each navigation link
    document.querySelectorAll('#tm-nav .nav-link').forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        document.querySelector('.tm-header').classList.remove('show');
      });
    });
  });

}
