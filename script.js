let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let contain = document.querySelector('.contain')
let items = contain.querySelectorAll('.list.item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('.ul li')

nextButton.onclick = () => {
    console.log("Botão next")
}

prevButton.onclick = () => {
    console.log('Botão prev')
}
