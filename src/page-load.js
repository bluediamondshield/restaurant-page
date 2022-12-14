import Food from "./assets/food.jpeg"

const container = document.querySelector("div#content")

export default function buildAboutPage() {
    const topBar = document.createElement("div")
    topBar.classList.add("top-bar")

    const aboutLink = document.createElement("a")
    aboutLink.classList.add("about-link")
    aboutLink.innerHTML = "About"
    topBar.appendChild(aboutLink)

    const menuLink = document.createElement("a")
    menuLink.classList.add("menu-link")
    menuLink.innerHTML = "Menu"
    topBar.appendChild(menuLink)

    const contactLink = document.createElement("a")
    contactLink.classList.add("contact-link")
    contactLink.innerHTML = "Contact Us"
    topBar.appendChild(contactLink)

    container.appendChild(topBar);

    const mainContent = document.createElement("div")
    mainContent.classList.add("main")
    container.appendChild(mainContent)

    buildAboutContent()
}

export function buildAboutContent() {
    const mainContent = document.querySelector("div.main")
    mainContent.innerHTML = ""

    const foodImage = new Image()
    foodImage.src = Food;
    mainContent.appendChild(foodImage)
    const description = document.createElement("div")
    description.innerHTML = "This is the best restaurant in the world. Please visit today!"
    mainContent.appendChild(description)
}