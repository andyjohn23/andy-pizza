window.onload = function() {

let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "Garden veggie",
        price: "khs 1050",
        tag:"garden veggie",
        incart:0
    },
    {
        name: "veggie",
        price: "khs 1050",
        tag:"veggie",
        incart:0
    },
    {
        name: "Garden",
        price: "khs 1050",
        tag:"garden",
        incart:0
    }
];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumber = localStorage.getItem(".cartNumbers");

    if(productNumber){
        document.querySelector(".card button span").textContent = productNumber;
    }
}

function cartNumbers(product) {
    let productNumber = localStorage.getItem("cartNumbers");
    productNumber = parseInt(productNumber);

    if(productNumber) {
        localStorage.setItem("cartNumbers", productNumber + 1);
        document.querySelector(".cart button span").textContent = productNumber + 1;
    }else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart button span").textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem("productsincart");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }

        }
        cartItems[product.tag].incart +=1;
    }else{
        product.incart = 1;
         cartItems = {
          [product.tag]: product
        }
    }
    localStorage.setItem("productsincart", JSON.stringify(cartItems));

}

onLoadCartNumbers();
}