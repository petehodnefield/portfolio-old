const hamburgerIconEl = document.querySelector(".hamburger")
const modalEl = document.querySelector(".modal")
const closeIconEl = document.querySelector(".close-icon")

const frontEndProjectsContainerEl = $(".front-end-projects-container")
const backeEndProjectsContainerEl = $(".back-end-projects-container")
const musicProjectsContainerEl = $(".music-projects-container")

const frontEndGridEl = document.querySelector('.front-end-grid')
const backEndGridEl = document.querySelector('.back-end-grid')

const body = document.querySelector('body')

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
        image_alt: 'My project NBA Songs of the Year',
        tech_used: ['HTML', "CSS", "Bulma", "JavaScript", "YouTube API", "Ball Don't Lie API"]
    },
    {
        title: 'Weather Dashboard',
        description: `Users can enter a city and be shown the current-day forecast, as
        well as a 5-day forecast for that city.`,
        github: "https://github.com/petehodnefield/weather-dashboard",
        live_deployment: "https://petehodnefield.github.io/weather-dashboard/",
        image: './assets/images/weather-img.jpg',
        image_alt: 'My project Weather Dashboard',
        tech_used: ['HTML', "CSS", "JavaScript", "Open Weather API"]


    },
    {
        title: 'Producer Store',
        description: `The hub for producers to contact me for custom guitar work.`,
        github: "https://github.com/petehodnefield/beat-store",
        live_deployment: "https://petehodnefield.github.io/beat-store/",
        image: './assets/images/beat-store.jpg',
        image_alt: 'My project Producer Store',
        tech_used: ['HTML', "CSS", "JavaScript"]


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
        image_alt: 'My project Unleashed Pets Finder',
        tech_used: ['HTML', "CSS", "JavaScript", "AWS S3", "REST API", "Node.js", "Express.js", "Heroku"]

    },
    {
        title: 'All About Monger',
        description: `A blog site where users can share relevant articles about Monger Honcho, as well as leave comments on other's posts`,
        github: "https://github.com/petehodnefield/all-about-monger",
        live_deployment: "https://all-about-monger.herokuapp.com/",
        image: './assets/images/about-monger.jpg',
        image_alt: 'My project All About Monger',
        tech_used: ['HTML', "CSS", "JavaScript", "Node.js", "Express.js", "Heroku"]


    },
    {
        title: 'Monga Note Taker',
        description: `A simple note taking app that saves your important notes for later reference.`,
        github: "https://github.com/petehodnefield/note-taker",
        live_deployment: "https://monga-note-taker.herokuapp.com/",
        image: './assets/images/note-taker.jpg',
        image_alt: 'My project Monga Note Taker',
        tech_used: ['HTML', "CSS", "JavaScript", "Node.js", "Express.js", "Heroku"]


    },
]

function createModal(project) {
  // Create the modal container
  const projectModal = document.createElement('div')
  projectModal.classList.add('project-modal')

  const closeIcon = document.createElement('ion-icon')
  closeIcon.setAttribute('name', 'close-outline')
  closeIcon.classList.add('icon-general', 'close-icon')

  projectModal.appendChild(closeIcon)
  // Create modal contents
  const modalHeader = document.createElement('h2')
  modalHeader.classList.add('section-header')
  modalHeader.textContent = project.title
  projectModal.appendChild(modalHeader)

  // Create project image
  const modalImg = document.createElement('img')
  modalImg.setAttribute('src', project.image)

  projectModal.appendChild(modalImg)

  // Create ul to hold the tech items
  const modalUl = document.createElement('ul')
  const ulTitle = document.createElement('h2')
  ulTitle.textContent = "Tech Used"
  modalUl.appendChild(ulTitle)

  // Loop over all tech used and append to a <ul>
  project.tech_used.forEach((technology) => {
    let techListItem = document.createElement('li')
    techListItem.classList.add('modal-list-item')
    techListItem.textContent = technology
    modalUl.appendChild(techListItem)
  })

  // Create link buttons
  const gitHubBtn = document.createElement('a')
  gitHubBtn.classList.add('card-links', 'a-btn')
  gitHubBtn.textContent = 'GitHub'
  gitHubBtn.setAttribute('href', project.github)

  projectModal.appendChild(gitHubBtn)

  projectModal.appendChild(modalUl)
  body.append(projectModal)
  closeIcon.addEventListener('click', () => {
    body.removeChild(projectModal)
  })
}

function generateFrontEndProjects() {
    // loop through the elements, creating elements as necessary
    frontEndProjects.forEach((project) => {

        let gridItem = document.createElement('div')
        gridItem.classList.add("grid-item")

        let card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = (`

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
        `
        )
        card.addEventListener('mouseover', () => {
          createModal(project)
        })
        gridItem.appendChild(card)
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