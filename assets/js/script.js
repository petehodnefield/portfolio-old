const hamburgerIconEl = document.querySelector(".hamburger")
const modalEl = document.querySelector(".modal")
const closeIconEl = document.querySelector(".close-icon")

const landingPagesContainerEl = $(".landingpages-projects-container")
const musicProjectsContainerEl = $(".music-projects-container")
const javascriptProjectsContainerEl = $(".javascript-projects-container")


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

$(".music-projects").on("click", () => {
    landingPagesContainerEl.addClass("hidden")
    landingPagesContainerEl.removeClass("grid-container")

    javascriptProjectsContainerEl.addClass("hidden")
    javascriptProjectsContainerEl.removeClass("grid-container")

    musicProjectsContainerEl.removeClass("hidden")
    musicProjectsContainerEl.addClass("grid-container")

})
$(".landing-pages").on("click", () => {
    musicProjectsContainerEl.addClass("hidden")
    musicProjectsContainerEl.removeClass("grid-container")

    javascriptProjectsContainerEl.addClass("hidden")
    javascriptProjectsContainerEl.removeClass("grid-container")

    landingPagesContainerEl.removeClass("hidden")
    landingPagesContainerEl.addClass("grid-container")
})
$(".javascript-projects").on("click", () => {
    musicProjectsContainerEl.addClass("hidden")
    musicProjectsContainerEl.removeClass("grid-container")

    landingPagesContainerEl.addClass("hidden")
    landingPagesContainerEl.removeClass("grid-container")

    javascriptProjectsContainerEl.removeClass("hidden")
    javascriptProjectsContainerEl.addClass("grid-container")
})

hamburgerIconEl.addEventListener("click", showMenu)

