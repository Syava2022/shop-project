
// add to cart
const productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".btn-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent =
      +productsCountEl.textContent + +quantityInput[i].value;
    quantityInput[i].value = 1;
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

// ======================================= Slider Slick ============================================

$('.slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000
});

function showModalByScroll() {
  if (window.pageYOffset >= document.body.scrollHeight/2) {
    openModal();
    window.removeEventListener('scroll',showModalByScroll )
  }
}
window.addEventListener("scroll", showModalByScroll);

// ======================================= AOS Library ============================================

AOS.init();


// ======================================= Produck Quantity ============================================




// for (let i = 0; i < quantityInput.length; i++) {
//   let currentValue = +quantityInput[i].value;
//   toggleButtonState(currentValue, incrementBtns[i], decrementBtns[i]);
// }

// function toggleButtonState(count, incrementBtn, decrementBtn) {
//   decrementBtn.disabled = count <= minCount;
//   incrementBtn.disabled = count >= maxCount;
// }

// for (let i = 0; i < incrementBtns.length; i++) {
//   incrementBtns[i].addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue + 1;
//     quantityInput[i].value = nextValue;

//     toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//   });
// }

// for (let i = 0; i < decrementBtns.length; i++) {
//   decrementBtns[i].addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue - 1;
//     quantityInput[i].value = nextValue;

//     toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//   });
// }

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

// let minCount = 1;
// let maxCount = 5;

function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 5) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };

    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= minCount;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
    };

    this.toggleButtonState();

    this.increment = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
      };
      this.decrement = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
      };

    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));

    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

// function counterAll(incrementBtns,decrementBtns,quantityInput){
//   for(i=0;i<counter1.length;i++){
//   let counter1 = new Counter(incrementBtns,decrementBtns,quantityInput);
// }
// }
// let counter1 = new Counter(incrementBtns[0],decrementBtns[0],quantityInput[0]);
// console.log(counter1);

let counters = [];
for (let i = 0; i < quantityInput.length; i++) {
  counters[i] = new Counter(
    incrementBtns[i],
    decrementBtns[i],
    quantityInput[i]
  );
}

// quantityInput.forEach((item, i) => {
//   counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item);
// });