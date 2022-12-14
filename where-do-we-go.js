import { places } from "./where-do-we-go.data.js"

export function explore() {
    for (let i = 0; i < places.length; i++) {

        let section = document.createElement("section")
        section.style.backgroundImage = "url(./images/" + places[i].name.split(',')[0].toLowerCase().split(' ').join('-') + ".jpg)"
        section.style.backgroundSize = "100%"
        let link = document.createElement('a')
        link.innerHTML = places[i].name + places[i].coordinates
        link.style.color = places[i].color
        link.className = "location"
        section.appendChild(link)
        document.body.appendChild(section)
    }
    console.log(places[2].name.split(',')[0].toLowerCase().split(' ').join('-'))
}
