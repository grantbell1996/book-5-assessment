import { getVeggies, addPurchase, getEntrees, getSides } from "./database.js"

const veggies = getVeggies()
const entrees = getEntrees()
const sides = getSides()

const buildOrderListItem = (order) => {
    const foundVeggie = veggies.find(
        (veggie) => {
            //return the value of veggie id if it is equal to the id of the customers order veggie id
            return veggie.id === order.veggieId
        }
    ) 

    const foundEntree = entrees.find(
        (entree) => {
            return entree.id === order.entreeId
        }
    )
    
    const foundSide = sides.find(
        (side) => {
            return side.id === order.sideId
        }
    ) 

    const totalCost = foundVeggie.price + foundEntree.price + foundSide.price

    const receiptString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Receipt #${order.id} = ${receiptString}
    </li>`
}

export const Sales = () => {
    const sales = addPurchase()
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
    
}

