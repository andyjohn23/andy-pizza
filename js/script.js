let carts = document.querySelectorAll(".add-cart");
for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumber = localStorage.getItem("cartNumbers");
    productNumber = parseInt(productNumber);

    if(productNumber) {
        localStorage.setItem("cartNumbers", productNumber + 1);
        document.querySelector(".cart button span").textContent = productNumber + 1;
    }else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart button span").textContent = 1;
    }
}