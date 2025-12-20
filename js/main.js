// filters logic

const filter_inputs = document.querySelectorAll(".filter_input")
    , all_filter_input = document.getElementById("sideBar_nav_filter_all_input")
let checked_inpust_count = 0

function check_inputs(element) {
    if (element.checked) {
        checked_inpust_count++;
        console.log(checked_inpust_count);

        if (checked_inpust_count == filter_inputs.length) {
            checked_inpust_count = 0
            all_filter_input.checked = true;
            filter_inputs.forEach(item => {
                item.checked = false;
            })
        } else {
            all_filter_input.checked = false
        }
    }
}

filter_inputs.forEach(element => {
    element.addEventListener("click", () => {
        check_inputs(element)
    })
})

all_filter_input.addEventListener("click", () => {
    if (all_filter_input.checked) {
        filter_inputs.forEach(element => {
            element.checked = false;
            checked_inpust_count = 0
        })
        if (checked_inpust_count == 0) {
            all_filter_input.checked = true
            all_filter_input.classList.add('only_all')
            filter_inputs.forEach(element => {
                element.checked = false;
            })
        }
    }
})

document.addEventListener("DOMContentLoaded", () => {
    filter_inputs.forEach(element => {
        check_inputs(element)
    })
});

// filters logic