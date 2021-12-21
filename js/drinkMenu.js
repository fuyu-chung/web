const openDrinkMButtons = document.querySelectorAll('[data-drinkM-target]')
const closeDrinkMButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openDrinkMButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const drinkM = document.querySelector(button.dataset.drinkMTarget)
        openDrinkM(drinkM)
    })
})

overlay.addEventListener('click', ()=>{
    const drinkM = document.querySelectorAll('.drinkM.active')
    drinkM.forEach(drinkM =>{
        closeDrinkM(drinkM)
    })
})

closeDrinkMButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const drinkM = button.closest('.drinkM')
        openDrinkM(drinkM)
    })
})

function openDrinkM(drinkM){
    if(drinkM == null) return
    drinkM.classList.add('active')
    overlay.classList.add('active')

}

function closeDrinkM(drinkM){
    if(drinkM == null) return
    drinkM.classList.add('active')
    overlay.classList.add('active')
}