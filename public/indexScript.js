const workArrow = document.querySelector(".work-link-arrow");
const workLinkBlock = document.querySelector(".work-link-block");
const eventArrow = document.querySelector(".event-link-arrow");
const eventLinkBlock = document.querySelector(".event-link-block");


workArrow.addEventListener("click", () => {
  workLinkBlock.classList.toggle("link-block-display");
});

eventArrow.addEventListener("click", () => {
  eventLinkBlock.classList.toggle("link-block-display");
});