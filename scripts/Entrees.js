import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

const currentEntree = setEntree()

document.addEventListener(
    "change", 
    (event) => {
        if (event.target.name === "entree")
            setEntree(parseInt(event.target.value))

})

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
export const Entrees = () => {
    let html = "<ul>"

    // This line converts objects to <li> elements
    for (const entree of entrees) {
        html += `<li>
            <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
        </li>`
    }

    html += "</ul>"

    return html
}