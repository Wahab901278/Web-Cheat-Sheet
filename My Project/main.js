window.addEventListener("scroll", function () {
    const header = document.querySelector(".js-header");
    const jumbotron = document.querySelector(".jumbotron text-center js-jumbotron");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add("shrink");
        jumbotron.classList.add("shrink"); // Add the shrink class to the jumbotron
    } else {
        header.classList.remove("shrink");
        jumbotron.classList.remove("shrink"); // Remove the shrink class from the jumbotron
    }
});
const elements = document.querySelectorAll('.fade-on-scroll');
let prevScrollPos = window.pageYOffset;

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


document.addEventListener("DOMContentLoaded", function() {
    const menuLink = document.querySelector(".page-scroll");

    menuLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = menuLink.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top;
            const headerHeight = document.querySelector("header").offsetHeight; // Adjust this value if you have a fixed header

            window.scrollBy({
                top: offsetTop - headerHeight,
                behavior: "smooth"
            });
        }
    });
});

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  const scrollUp = currentScrollPos < prevScrollPos;

  elements.forEach((element) => {
    if (isVisible(element)) {
      if (scrollUp) {
        // When scrolling up, make the text more visible
        element.style.opacity = "1";
      } else {
        // When scrolling down, decrease the visibility of the text
        element.style.opacity = "0.5"; // You can adjust the opacity value as desired
      }
    }
  });

  prevScrollPos = currentScrollPos;
}

// Initial check when the page loads
// handleScroll();

// Event listener to detect scroll and trigger the handleScroll function
window.addEventListener('scroll', handleScroll);



//---smooth scrolling behaviour


$(document).ready(function() {
  // Smooth scrolling for "Contact" link in the navbar
  $("a[href='#footer']").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#footer").offset().top
      },
      1000 // Adjust the scrolling speed (in milliseconds) as needed
    );
    return false; // Prevent default link behavior
  });
});




$(document).ready(function () {
  // On scroll, update the width of the top line based on scroll position
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(this).height();
    var scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    var lineWidth = Math.min(scrollPercentage, 100) + "%";
    $(".top-line").css("width", lineWidth);
  });
});
