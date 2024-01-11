let example = document.querySelector(".example");
let imgFat = example.querySelector(".example__picture--fat");
let imgSkinny = example.querySelector(".example__picture--skinny");
let btnFat = document.querySelector("#btn-fat");
let btnSkinny = example.querySelector("#btn-skinny");

btnFat.addEventListener('click', function () {
if(!btnFat.classList.contains("example__button--current"))
  btnFat.classList.add("example__button--current");
  btnSkinny.classList.remove("example__button--current");
imgFat.classList.remove("example__picture--hide");
imgSkinny.classList.add("example__picture--hide");
})

btnSkinny.addEventListener('click', function () {
  btnSkinny.classList.add("example__button--current");
  btnFat.classList.remove("example__button--current");
  imgFat.classList.add("example__picture--hide");
  imgSkinny.classList.remove("example__picture--hide");
})
