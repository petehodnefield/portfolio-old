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

hamburgerIconEl.addEventListener("click", showMenu)

$(".app").on("click", () => {
    console.dir($(this))
})

const frontEndProjects = [
    {
        title: 'NBA Songs of the Year',
        description: `A fun application for music and basketball lovers that will show the most popular songs of an NBA player's draft year`,
        github: "https://github.com/Undisputed06/nba-song-of-the-year",
        live_deployment: "https://undisputed06.github.io/nba-song-of-the-year/",
        image: './assets/images/nba-img.jpg',
        image_alt: 'An image of our project NBA Songs of the Year'
    },
    {
        title: 'Weather Dashboard',
        description: `Users can enter a city and be shown the current-day forecast, as
        well as a 5-day forecast for that city`,
        github: "https://github.com/Undisputed06/nba-song-of-the-year",
        live_deployment: "https://undisputed06.github.io/nba-song-of-the-year/",
        image: './assets/images/weather-img.jpg',
        image_alt: 'An image of our project NBA Songs of the Year'

    },
    {
        title: 'Producer Store',
        description: `This is where I send people to download my loops`,
        github: "https://github.com/Undisputed06/nba-song-of-the-year",
        live_deployment: "https://undisputed06.github.io/nba-song-of-the-year/",
        image: './assets/images/beat-store.jpg',
        image_alt: 'An image of our project NBA Songs of the Year'

    },
]
const backEndProjects = [
    {
        title: 'Unleashed',
        description: ` A lost pets finder where users can make posts about their pets
        as they go missing`,
        github: "https://github.com/MegGedde/Unleashed",
        live_deployment: "https://unleashed-pets-finder.herokuapp.com/",
        image: './assets/images/unleashed.jpg',
        image_alt: 'An image of our project Unleashed Pets Finder'
    },
    {
        title: 'Weather Dashboard',
        description: `Users can enter a city and be shown the current-day forecast, as
        well as a 5-day forecast for that city`,
        github: "https://github.com/Undisputed06/nba-song-of-the-year",
        live_deployment: "https://undisputed06.github.io/nba-song-of-the-year/",
        image: './assets/images/weather-img.jpg',
        image_alt: 'An image of our project NBA Songs of the Year'

    },
    {
        title: 'Producer Store',
        description: `This is where I send people to download my loops`,
        github: "https://github.com/Undisputed06/nba-song-of-the-year",
        live_deployment: "https://undisputed06.github.io/nba-song-of-the-year/",
        image: './assets/images/beat-store.jpg',
        image_alt: 'An image of our project NBA Songs of the Year'

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