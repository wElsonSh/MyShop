// filters logic

const filter_inputs = document.querySelectorAll(".filter_input")
    , all_filter_input = document.getElementById("sideBar_nav_filter_all_input")
let checked_inpust_count = 0


filter_inputs.forEach(element => {
    element.addEventListener("click", () => {
        if (element.checked) {
            all_filter_input.checked = false
            checked_inpust_count++
        } else if (element.checked === false && checked_inpust_count >= 0) {
            checked_inpust_count--
        } else {
            alert("Error")
        }
        if (checked_inpust_count === 0) {
            all_filter_input.checked = true
        }
    })
})
all_filter_input.addEventListener("click", () => {
    if (all_filter_input.checked === true) {
        filter_inputs.forEach((element) => {
            element.checked = false
            checked_inpust_count = 0
        })
    } else if (all_filter_input.checked === false && checked_inpust_count === 0) {
        all_filter_input.checked = true
    }
})


document.addEventListener("DOMContentLoaded", () => {
    checked_inpust_count
    filter_inputs.forEach(element => {
        element.checked = false
    })
    all_filter_input.checked = true
});

// filters logic

const products = [['apple', 10], ['banana', 20], ['alksdmklasmlk', 20], ['slslslslsl', 20], ['bananvavavavaa', 20], [';aspjasnjk', 20], ['apple', 10], ['banana', 20], ['alksdmklasmlk', 20], ['slslslslsl', 20], ['bananvavavavaa', 20], [';aspjasnjk', 20]]
    , assortment_products = document.getElementById("assortment_products")
products.forEach((product) => {
    let product_card = document.createElement("li")
        , product_card_container = document.createElement("div")
        , product_card_title = document.createElement("h3")
        , product_card_price = document.createElement("p")
        , product_card_img = document.createElement("span")
        , product_card_btn = document.createElement("button")
    product_card_container.classList.add("assortment_product_card_container")
    product_card_img.classList.add("assortment_product_card_img")
    product_card_title.textContent = `${product[0]} :`
    product_card_price.textContent = `$${product[1]}`
    product_card_btn.textContent = 'buy'
    product_card_container.append(product_card_title, product_card_price)
    product_card.append(product_card_img, product_card_container, product_card_btn)
    product_card.classList.add("assortment_product_card")
    assortment_products.appendChild(product_card)
})

