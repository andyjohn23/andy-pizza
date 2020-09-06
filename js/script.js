window.onload = function(){

    let offer = document.querySelector(".offer");
    offer.addEventListener("click", function(){
        swal("COMING SOON...!!!");
    });

    const cartContainer = document.querySelector(".container");

    const addToCart = document.getElementsByClassName("add-cart");
    let items = [];
    for(let i=0; i < addToCart.length; i++){
        addToCart[i].addEventListener("click", function(event){
            if(typeof (Storage) !== "undefined"){
               let item = {
                   id: i+1,
                   name:event.target.parentElement.children[0].textContent,
                   price:event.target.parentElement.children[2].children[0].textContent,
                   number:1
               };
               if(JSON.parse(localStorage.getItem("items")) === null){
                items.push(item);
                localStorage.setItem("items", JSON.stringify(items));
                window.location.reload();
               }else{
                  const localItems = JSON.parse(localStorage.getItem("items"));
                  localItems.map(data=>{
                      if(item.id == data.id){
                          item.number = data.number + 1;
                          console.log(item);
                      }else{
                          items.push(data);
                      }
                  });
                  items.push(item);
                  localStorage.setItem("items", JSON.stringify(items));
                  window.location.reload();
               }
            }else{
                console.log("Sorry not working!!!");
            }
        });
    }
   
    const cart = document.querySelector(".cart span");
    let number = 0;
    JSON.parse(localStorage.getItem("items")).map(data=>{
        number = number + data.number;
    });
    cart.innerHTML = number;

    const productContainer = document.querySelector(".product-container table")
    let cartData = ``;

    cartData += 
    `<tr>
    <th scope="col">INDEX</th>
    <th scope="col">ITEM NAME</th>
    <th scope="col">QUANTITY</th>
    <th scope="col">PRICE</th>
    <th scope="col">TOTAL</th>
    <th scope="col">REMOVE</th>
     </tr>`;
     
    if(JSON.parse(localStorage.getItem("items")) === null){
        cartData += `<tr><td colspan="5">No items</td></tr>`
    }else{
        JSON.parse(localStorage.getItem("items")).map(data=>{
           cartData += 
           `<td>`+data.id+`</td>
            <td>`+data.name+`</td>
            <td>`+data.number+`</td>
            <td>`+data.price+`</td>
            <td></td>
            <td><a href="#" onclick=Delete(this);>Delete</a></td>`;
        });
    }


    productContainer.innerHTML = cartData;
}