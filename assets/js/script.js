const hamburgerIconEl = document.querySelector(".hamburger")
const modalEl = document.querySelector(".modal")

const closeIconEl = document.querySelector(".close-icon")


const showMenu = () => {    
    
  modalEl.classList.remove("hidden")
}
// Add hidden class to modal when the close icon in the modal is clicked
$(".close-icon").on("click", () => {
    $(".modal").addClass("hidden")
})

// Add hidden class to modal when one of the modal links is clicked
$(".modal-anchor").on("click", () => {
    $(".modal").addClass("hidden")

})

hamburgerIconEl.addEventListener("click", showMenu)

