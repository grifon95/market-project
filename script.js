const addBtns = document.querySelectorAll(".add-to-cart");
let productCount = 0;
let totalAmount = 0;

let totalAmountEl = document.querySelector(".price-p");
let productCountEl = document.querySelector(".product-count");
let price = document.querySelector(".product-price");
// addBtns.forEach((button) => {
//   button.addEventListener("click", () => {
//     document.querySelector(".empty-cart-p").remove();
//     const previewProductCart = document.createElement("div");
//     previewProductCart.style.display = "flex";
//     previewProductCart.style.justifyContent = "space-between";
//     previewProductCart.style.backgroundColor = "white";
//     previewProductCart.style.width = "90%";
//     previewProductCart.style.padding = "10px";
//     previewProductCart.innerHTML = `
//       <div class='left'>${
//         document.querySelector(".product-price").textContent
//       }</div>
//       <div class='middle'>Drugi</div>
//       <div class='right'>Treci</div>
//     `;
//     document.querySelector(".empty-cart-p-div").appendChild(previewProductCart);
//     productCount++;
//     productCountEl.textContent = productCount;
//     console.log(document.querySelector(".product-price").textContent);
//     totalAmountEl.textContent = price.textContent;
//   });
// });

// addBtns.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     productCount++;
//     productCountEl.textContent = productCount;
//     const buttonClicked = event.target;
//     const parentDiv = buttonClicked.closest(".left-side-product-box");
//     const productName = parentDiv.querySelector(
//       ".product-description"
//     ).textContent;
//     const productPrice = parentDiv.querySelector("p").textContent;
//     document.querySelector(".empty-cart-p-div").innerHTML = productName;
//     const priceDivPreview = document.createElement("div");
//     priceDivPreview.setAttribute("margin-right", "10px");
//     priceDivPreview.innerHTML = productPrice;
//     // priceDivPreview.setAttribute("padding-right", "10px");
//     document.querySelector(".empty-cart-p-div").appendChild(priceDivPreview);
//     console.log(`Button clicked on ${productName} with price ${productPrice}`);
//     totalAmountEl.innerHTML = productPrice;

//     // const previewProductCart = document.createElement("div");
//     // previewProductCart.innerHTML = `${productName}`;
//     // document.querySelector(".empty-cart-p").appendChild(previewProductCart);

//     // const productPic = document
//     //   .querySelector(".product-img")
//     //   .getAttribute("src");
//     // console.log(productPic);
//   });
// });

/* Dodavati divove */
//  const container = document.getElementById("container");
// const addDivBtn = document.getElementById("add-div-btn");

addBtns.forEach((button) => {
  button.addEventListener("click", () => {
    productCount++;
    productCountEl.textContent = productCount;
    const buttonClicked = event.target;
    const parentDiv = buttonClicked.closest(".left-side-product-box");
    const productName = parentDiv.querySelector(
      ".product-description"
    ).textContent;
    const productPrice = parentDiv.querySelector("p").textContent;
    // RAZMAK
    document.querySelector(".empty-cart-p").innerHTML = "";
    const containerRight = document.createElement("div");
    containerRight.classList.add("containerRight");
    document.querySelector(".empty-cart-p-div").appendChild(containerRight);
    const newDiv = document.createElement("div");
    newDiv.classList.add("my-div");
    newDiv.textContent = ` ${productName}`;
    newDiv.style.marginBottom = "10px";
    const priceDivPreview = document.createElement("div");
    priceDivPreview.classList.add("priceDivPreview");
    priceDivPreview.style.marginRight = "10px";
    priceDivPreview.innerHTML = productPrice;

    const priceNum = Number(productPrice);
    const numberDefaultPrice = parseInt(totalAmountEl.textContent);
    totalAmountEl.textContent = numberDefaultPrice;

    console.log(numberDefaultPrice, typeof numberDefaultPrice);
    console.log(priceNum, typeof priceNum);
    // priceDivPreview.setAttribute("padding-right", "10px");
    containerRight.appendChild(newDiv);
    containerRight.appendChild(priceDivPreview);

    totalAmount += priceNum;
    totalAmountEl.textContent = totalAmount;
  });
});

/* In this example, the querySelectorAll method selects all buttons with the class buy-button. Then, for each button, an event listener is added that logs information about the clicked button to the console.

Inside the event listener function, event.target is used to get the button element that was clicked. Then closest is used to find the closest ancestor of the button with the class .product, which is the parent div. querySelector is then used to find the child elements of the parent div with the tags h2 and p, which contain the product name and price respectively.

You can replace the console.log statement with code that handles the product information in any way you need.
 */

document.querySelector(".order-btn").addEventListener("click", function () {
  if (productCount > 0) {
    alert("Your order is recieved. Thank you ");
    productCount = 0;
    productCountEl.textContent = productCount;
    document.querySelector(".empty-cart-p-div").innerHTML =
      "Your cart is empty";
    document.querySelector(".price-p").textContent = "$0.00";
    window.location.href = "druga.html";
  } else {
    alert("You didnt select any product!");
  }
});
