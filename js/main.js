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


document.addEventListener("DOMContentLoaded", () => {
    checked_inpust_count
    filter_inputs.forEach(element => {
        element.checked = false
    })
    all_filter_input.checked = true
});

// filters logic