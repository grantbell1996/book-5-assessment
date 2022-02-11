import { addComboChoice, addPurchase } from "./database.js"
import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"

document.addEventListener(
    "click", 
    (event) => {
    if (event.target.id === "purchase") {
        addComboChoice()
        }
    }
)

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section class="choices__base dishes options">
            <h2>Base Dishes</h2>
            ${Entrees()}
        </section>
        <section class="choices__vegetable options">
            <h2>Vegetables</h2>
            ${Veggies()}
        </section>
        <section class="choices__side dishes options">
            <h2>Sides</h2>
            ${Sides()}
        </section>


        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
