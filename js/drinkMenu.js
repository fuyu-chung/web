const openDrinkmButtons = document.querySelectorAll('[data-drinkm-target]')
const closeDrinkmButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openDrinkmButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector("#drinkm > div.drinkm-header > div").innerHTML = button.querySelector('div.drink-name').innerText
    const drinkm = document.querySelector(button.dataset.drinkmTarget)
    openDrinkm(drinkm)
  })
})

overlay.addEventListener('click', () => {
  const drinkms = document.querySelectorAll('.drinkm.active')
  drinkms.forEach(drinkm => {
    closeDrinkm(drinkm)
  })
})

closeDrinkmButtons.forEach(button => {
  button.addEventListener('click', () => {
    const drinkm = button.closest('.drinkm')
    closeDrinkm(drinkm)
  })
})

function openDrinkm(drinkm) {
  if (drinkm == null) return
  drinkm.classList.add('active')
  overlay.classList.add('active')
}

function closeDrinkm(drinkm) {
  if (drinkm == null) return
  drinkm.classList.remove('active')
  overlay.classList.remove('active')
}


/*首頁*/
function openSort(sortName) {
  var i;
  var x = document.getElementsByClassName("sort");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(sortName).style.display = "block";
}