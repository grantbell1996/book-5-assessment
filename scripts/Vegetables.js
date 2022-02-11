import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

const currentVeggie = setVeggie()

document.addEventListener(
    "change", 
    (event) => {
    if (event.target.name === "veggie") {
        setVeggie(parseInt(event.target.value))
    }
})

export const Veggies = () => {
    let html = "<ul>"

    for (const veggie  of veggies) {
        html += `<li>
            <input type="radio" name="veggie" value="${veggie.id}" /> ${veggie.type}
        </li>`
    }

    html += "</ul>"

    return html
}
