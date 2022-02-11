import { getSides, setSide } from "./database.js"

const sideDishes = getSides()

const currentSide = setSide()

document.addEventListener(
    "change", 
    (event) => {
        if (event.target.name === "sideDish") {
            setSide(parseInt(event.target.value))
        }
    }
)

// Requirement: The radio input elements that this component function renders must all have a name of "sideDish"
export const Sides = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sideDishes.map(
        (sideDish) => {
            return `<li>
                <input type="radio" name="sideDish" value="${sideDish.id}" /> ${sideDish.title}
            </li>`
        }
    )
    
    // Join all of the strings in the array into a single string
    html += listItems.join("")
    html += "</ul>"

    return html
}

