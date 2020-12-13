const ITEM = 'carrousel-item';
const VISIBLE = 'visible';
const NO_VISIBLE = 'no-visible';
const PREV = 'prev';
const NEXT = 'next';
const items = document.getElementsByClassName(ITEM);

document.getElementById('next').addEventListener('click', () => {
  const visible = document.getElementsByClassName("visible")[0];
  const prev = document.getElementsByClassName("prev")[0];
  const next = document.getElementsByClassName("next")[0];

  visible.classList.remove(VISIBLE);
  visible.classList.add(PREV);
  prev.classList.remove(PREV);
  prev.classList.add(NO_VISIBLE);
  next.classList.remove(NEXT);
  next.classList.add(VISIBLE);
  
  if (!next.nextElementSibling.classList.contains(ITEM)){
    items[0].classList.add(NEXT);
    items[0].classList.remove(NO_VISIBLE);
  } else {
    next.nextElementSibling.classList.add(NEXT);
    next.nextElementSibling.classList.remove(NO_VISIBLE);
  }
})

document.getElementById('prev').addEventListener('click', () => {
  const visible = document.getElementsByClassName("visible")[0];
  const prev = document.getElementsByClassName("prev")[0];
  const next = document.getElementsByClassName("next")[0];

  visible.classList.remove(VISIBLE);
  visible.classList.add(NEXT);
  if(!prev.previousElementSibling.classList.contains(ITEM)){
    items[items.length - 1].classList.add(PREV);
    items[items.length - 1].classList.remove(NO_VISIBLE);
  } else {
    prev.previousElementSibling.classList.add(PREV);
    prev.previousElementSibling.classList.remove(NO_VISIBLE);
  }
  prev.classList.remove(PREV);
  prev.classList.add(VISIBLE);
  next.classList.remove(NEXT);
  next.classList.add(NO_VISIBLE);
})

