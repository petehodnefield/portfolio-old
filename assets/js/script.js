const hamburgerIconEl = document.querySelector(".hamburger")
const modalEl = document.querySelector(".modal")
const closeIconEl = document.querySelector(".close-icon")

const frontEndProjectsContainerEl = $(".front-end-projects-container")
const backeEndProjectsContainerEl = $(".back-end-projects-container")
const musicProjectsContainerEl = $(".music-projects-container")

const frontEndGridEl = document.querySelector('.front-end-grid')
const backEndGridEl = document.querySelector('.back-end-grid')

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



const frontEndProjects = [
    {
        title: 'NBA Songs of the Year',
        description: `A fun application for music and basketball lovers that will show the most popular songs of an NBA player's draft year.`,
        github: "https://github.com/Undisputed06/nba-song-of-the-year",
        live_deployment: "https://undisputed06.github.io/nba-song-of-the-year/",
        image: './assets/images/nba-img.jpg',
        image_alt: 'My project NBA Songs of the Year'
    },
    {
        title: 'Weather Dashboard',
        description: `Users can enter a city and be shown the current-day forecast, as
        well as a 5-day forecast for that city.`,
        github: "https://github.com/petehodnefield/weather-dashboard",
        live_deployment: "https://petehodnefield.github.io/weather-dashboard/",
        image: './assets/images/weather-img.jpg',
        image_alt: 'My project Weather Dashboard'

    },
    {
        title: 'Producer Store',
        description: `The hub for producers to contact me for custom guitar work.`,
        github: "https://github.com/petehodnefield/beat-store",
        live_deployment: "https://petehodnefield.github.io/beat-store/",
        image: './assets/images/beat-store.jpg',
        image_alt: 'My project Producer Store'

    },
]
const backEndProjects = [
    {
        title: 'Unleashed',
        description: ` A lost pets finder where users can make posts about their pets
        if they go missing`,
        github: "https://github.com/MegGedde/Unleashed",
        live_deployment: "https://unleashed-pets-finder.herokuapp.com/",
        image: './assets/images/unleashed.jpg',
        image_alt: 'My project Unleashed Pets Finder'
    },
    {
        title: 'All About Monger',
        description: `A blog site where users can share relevant articles about Monger Honcho, as well as leave comments on other's posts`,
        github: "https://github.com/petehodnefield/all-about-monger",
        live_deployment: "https://all-about-monger.herokuapp.com/",
        image: './assets/images/about-monger.jpg',
        image_alt: 'My project All About Monger'

    },
    {
        title: 'Monga Note Taker',
        description: `A simple note taking app that saves your important notes for later reference.`,
        github: "https://github.com/petehodnefield/note-taker",
        live_deployment: "https://monga-note-taker.herokuapp.com/",
        image: './assets/images/note-taker.jpg',
        image_alt: 'My project Monga Note Taker'

    },
]


function generateFrontEndProjects() {
    // loop through the elements, creating elements as necessary
    frontEndProjects.forEach((project) => {
        let gridItem = document.createElement('div')
        gridItem.innerHTML = (`
        <div class="grid-item">
        <div class="card">
            <img
              src="${project.image}"
              alt="${project.image_alt}"
              class="card-img"
            />
            <div class="card-content">
              <h2 class="card-title">${project.title}</h2>
              <p class="card-text">
                ${project.description}
              </p>
              <div class="card-links-container">
                <a
                  href="${project.github}"
                  target="_blank"
                  class="card-links"
                  >GitHub</a
                >
                <a
                  href="${project.live_deployment}"
                  target="_blank"
                  class="card-links"
                  >Live Deployment</a
                >
              </div>
            </div>
          </div>
        </div>
        </div>
        `
        )

        frontEndGridEl.appendChild(gridItem)
    })
}
function generateBackEndProjects() {
    // loop through the elements, creating elements as necessary
    backEndProjects.forEach((project) => {
        let gridItem = document.createElement('div')
        gridItem.innerHTML = (`
        <div class="grid-item">
        <div class="card">
            <img
              src="${project.image}"
              alt="${project.image_alt}"
              class="card-img"
            />
            <div class="card-content">
              <h2 class="card-title">${project.title}</h2>
              <p class="card-text">
                ${project.description}
              </p>
              <div class="card-links-container">
                <a
                  href="${project.github}"
                  target="_blank"
                  class="card-links"
                  >GitHub</a
                >
                <a
                  href="${project.live_deployment}"
                  target="_blank"
                  class="card-links"
                  >Live Deployment</a
                >
              </div>
            </div>
          </div>
        </div>
        </div>
        `
        )

        backEndGridEl.appendChild(gridItem)
    })
}

window.addEventListener('load', (e) => {
    generateFrontEndProjects(),
    generateBackEndProjects()
})