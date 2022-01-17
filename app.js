
// add to cart
const productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".btn-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      let prevProductCountEl = +productsCountEl.textContent;
      productsCountEl.textContent = prevProductCountEl + 1;
    });
  }

//change like status
const likeBtns = document.querySelectorAll(".picture-icon-second");

likeBtns.forEach(item => {
  item.addEventListener ("click", function() {
    if(item.classList.contains("liked")) {
      item.classList.remove("liked");
    } else {
      item.classList.add("liked");
    }
  });
})

//   const likeBtns = document.querySelectorAll(".like");
// likeBtns.forEach((item) => {
//   item.addEventListener("click", function () {
//     item.classList.toggle("liked");
//   });
// });

const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".btn-details");
const btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);


$('.slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000
});
