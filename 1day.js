const panels = document.querySelectorAll('.panel')

panels.forEach((moeka) => {
  moeka.addEventListener('click',() =>{
    removeActiveClasses()
    moeka.classList.add('active')
   
console.log(panels.idx)
  })
})
function removeActiveClasses() {
  panels.forEach(moeka => {
    moeka.classList.remove('active')
  })
}