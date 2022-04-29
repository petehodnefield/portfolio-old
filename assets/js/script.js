const hamburgerIconEl = document.querySelector(".hamburger")
const modalEl = document.querySelector(".modal")
const closeIconEl = document.querySelector(".close-icon")

const frontEndProjectsContainerEl = $(".front-end-projects-container")
const backeEndProjectsContainerEl = $(".back-end-projects-container")
const musicProjectsContainerEl = $(".music-projects-container")
const projectModalHeaderEl = $(".project-modal-header")
const imageContainerEl = document.querySelector(".img-container")
const frontEndContainer = document.querySelector(".front-end-projects-container")

const projectModalEl = $(".project-modal")


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

$(".back-end").on("click", () => {
    frontEndProjectsContainerEl.addClass("hidden")
    frontEndProjectsContainerEl.removeClass("grid-container")

    musicProjectsContainerEl.addClass("hidden")
    musicProjectsContainerEl.removeClass("grid-container")

    backeEndProjectsContainerEl.removeClass("hidden")
    backeEndProjectsContainerEl.addClass("grid-container")

})
$(".front-end").on("click", () => {
    backeEndProjectsContainerEl.addClass("hidden")
    backeEndProjectsContainerEl.removeClass("grid-container")

    musicProjectsContainerEl.addClass("hidden")
    musicProjectsContainerEl.removeClass("grid-container")

    frontEndProjectsContainerEl.removeClass("hidden")
    frontEndProjectsContainerEl.addClass("grid-container")
})
$(".music-projects").on("click", () => {
    backeEndProjectsContainerEl.addClass("hidden")
    backeEndProjectsContainerEl.removeClass("grid-container")

    frontEndProjectsContainerEl.addClass("hidden")
    frontEndProjectsContainerEl.removeClass("grid-container")

    musicProjectsContainerEl.removeClass("hidden")
    musicProjectsContainerEl.addClass("grid-container")
})

const appendProjectModal = (e) => {
    alert("img was clicked")
}

hamburgerIconEl.addEventListener("click", showMenu)

frontEndContainer.addEventListener("click", (e) => {

    const chosenApp = e.target
    const yaya = chosenApp.parentElement.parentElement.children[1].innerHTML
    projectModalEl.removeClass("hidden")
    const modalHeaderText = document.createElement("h2")
    modalHeaderText.innerHTML = yaya

    projectModalEl.append(modalHeaderText)

   
})

$(".project-close-icon").on("click", () => {
    projectModalEl.addClass("hidden")
})