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
        if (checked_inpust_count === 0 || checked_inpust_count === filter_inputs.length) {
            all_filter_input.checked = true
            filter_inputs.forEach((element) => {
                element.checked = false
                checked_inpust_count = 0
            })
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
    product_card_btn.classList.add("assortment_product_card_btn")
    product_card_title.textContent = `${product[0]} :`
    product_card_price.textContent = `$${product[1]}`
    product_card_btn.textContent = 'buy'
    product_card_container.append(product_card_title, product_card_price)
    product_card.append(product_card_img, product_card_container, product_card_btn)
    product_card.classList.add("assortment_product_card")
    assortment_products.appendChild(product_card)
})

const product_card_buy_btns = document.querySelectorAll(".assortment_product_card_btn")
    , header_nav_basket_btn_span = document.getElementById("header_nav_basket_btn_span")
let products_in_basket_count = 0

function backet_checking() {
    if (products_in_basket_count === 0) {
        header_nav_basket_btn_span.classList.add("basket_empty")
    } else if (products_in_basket_count !== 0) {
        header_nav_basket_btn_span.classList.remove("basket_empty")
        header_nav_basket_btn_span.textContent = `${products_in_basket_count}`
    }
}

if (product_card_buy_btns) {
    product_card_buy_btns.forEach(element => {
        element.addEventListener("click", () => {
            products_in_basket_count++
            const basket_JSON = JSON.stringify(products_in_basket_count)
            localStorage.setItem("products_basket_count", basket_JSON)
            backet_checking()
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const basket_storage = localStorage.getItem("products_basket_count")
    if (basket_storage) {
        const basket_data = JSON.parse(basket_storage)
        products_in_basket_count = basket_data
    }
    backet_checking()
});

