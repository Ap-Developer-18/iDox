$(".slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: "linear",
});

$(".slick-slider2").slick({
  slidesToScroll: 1,
  slidesToShow: 1,
  infinite: true,
  centerMode: true,
  dots: true,
});

const preloader = document.querySelector(".preloader");

setTimeout(() => {
  preloader.classList.add("d-none");
}, 2000);

const item = document.querySelector(".navbar-items");
const menu = document.querySelector(".toggle");

menu.addEventListener("click", () => {
  item.classList.toggle("show");
  let contain = document.querySelector(".all-content");
  if (item.classList.contains("show")) {
    contain.style.position = "fixed";
    contain.style.top = "0";
    contain.style.left = "0";
    contain.style.width = "100%";
  } else {
    contain.style.position = "unset";
  }
});
