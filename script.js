let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let contain = document.querySelector(".contain");
let items = contain.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");

let active = 0;
let firsPosition = 0;
let lastPosition = items.length - 1;

nextButton.onclick = () => {
  let itemOld = contain.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  active = active + 1 > lastPosition ? 0 : active + 1;
  items[active].classList.add('active')

};

prevButton.onclick = () => {
  let itemOld = contain.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  active = active - 1 < lastPosition ? lastPosition : active - 1
  items[active].classList.add('active')
};
