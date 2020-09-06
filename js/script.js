let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "Garden veggie",
        price: 1050,
        tag:"pestoamore",
        incart:0
    },
    {
        name: "veggie",
        price: 50,
        tag:"pestoamore",
        incart:0
    },
    {
        name: "Garden",
        price: 100,
        tag:"pestoamore",
        incart:0
    },{
        name: "Garden veggie",
        price: 1050,
        tag:"garden veggie",
        incart:0
    },
    {
        name: "Garden veggie",
        price: 1050,
        tag:"pestoamore",
        incart:0
    },
    {
        name: "Garden veggie",
        price: 1050,
        tag:"pestoamore",
        incart:0
    },
];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumber = localStorage.getItem(".cartNumbers");

    if(productNumber){
        document.querySelector(".card button span").textContent = productNumber;
    }
}

function cartNumbers(product) {
    console.log("this", product);
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
    let cartItems = localStorage.getItem("productsInCart");
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
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product){

    let cartCost = localStorage.getItem("totalCost");

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart () {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");

    console.log(cartItems);

    if(cartItems && productContainer) {
        productContainer.innerHTML = ``;
        Object.values(cartItems).map(data => {
            productContainer.innerHTML += `
            <div class="product">
            <ion-icon name="trash-outline"></ion-icon>
            <img src="images/${data.tag}.jpg">
            <span>${data.name}</span>
            </div>

            <div class="price">${item.price},00</div>
            <div class="quantity">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <span>${item.incart}</span>
            <ion-icon name="add-circle-outline"></ion-icon>
            </div>`;
        })
    }
}
onLoadCartNumbers();
displayCart ();

