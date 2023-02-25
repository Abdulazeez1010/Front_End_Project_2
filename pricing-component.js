var input = document.querySelector("input");
var price1 = document.querySelector("#price1")
var price2 = document.querySelector("#price2")
var price3 = document.querySelector("#price3")
var oddButton = document.getElementsByTagName("button")[0]
var evenButton = document.getElementsByTagName("button")[1]
var yearly = true



input.addEventListener("click", function () {
    if (yearly === true) {
        price1.textContent = "$199.99"
        price2.textContent = "$249.99"
        price3.textContent = "$399.99"
        yearly = false;
    } else {
        if (yearly === false) {
            price1.textContent = "$19.99"
            price2.textContent = "$24.99"
            price3.textContent = "$39.99"
            yearly = true;
        }
    }
})









// addEventListener("click", function () {
//     alert("Input clicked")
// })
