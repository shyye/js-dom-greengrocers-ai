const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

// Questions asked/conversation with Copilot (in the Chat) to generate the code below:
// Note I first tried to just provide Copilot with all instructions, but it removed the CSS and didn't get the code to work.


// -------------------- Conversation 1 --------------------
/**
1.
Store items should look like this:

<li> <div class="store--item-icon"> <img src="assets/icons/001-beetroot.svg" alt="beetroot" /> </div> <button>Add to cart</button> </li>
Provide code for adding this with javascript.

It should be inserted into the <ul class="item-list store--item-list"></ul> in index.html with javascript.

2.
All items should be added, not just one

3.
don't create new items, use the ones in state.items

4.
When clicking on the addButton, the item should be added to state.cart
*/
// Function to add items to the list
// function addItemsToList(items) {
//   // Select the <ul> element
//   const itemList = document.querySelector('.item-list.store--item-list');

//   items.forEach(item => {
//     // Create a new <li> element
//     const listItem = document.createElement('li');

//     // Create a <div> element with the class 'store--item-icon'
//     const itemIconDiv = document.createElement('div');
//     itemIconDiv.classList.add('store--item-icon');

//     // Create an <img> element
//     const itemImage = document.createElement('img');
//     itemImage.src = `assets/icons/${item.id}.svg`;
//     itemImage.alt = item.name;

//     // Append the <img> element to the <div> element
//     itemIconDiv.appendChild(itemImage);

//     // Create a <button> element with the text 'Add to cart'
//     const addButton = document.createElement('button');
//     addButton.textContent = 'Add to cart';

//     // Add event listener to the button to add item to cart
//     addButton.addEventListener('click', () => {
//       state.cart.push(item);
//       console.log(state.cart);
//     });

//     // Append the <div> and <button> elements to the <li> element
//     listItem.appendChild(itemIconDiv);
//     listItem.appendChild(addButton);

//     // Append the <li> element to the <ul> element
//     itemList.appendChild(listItem);
//   });
// }

// // Call the function to add items to the list using state.items
// addItemsToList(state.items);

// ----------------------------------------


// -------------------- Conversation 2 --------------------
// Questions asked/conversation with Copilot to generate the code below:
// Note I first tried to just provide Copilot with all instructions, but it removed the CSS and didn't get the code to work.
/**
1.
The template for cart items looks like this:

<li> <img class="cart--item-icon" src="assets/icons/001-beetroot.svg" alt="beetroot" /> <p>beetroot</p> <button class="quantity-btn remove-btn center">-</button> <span class="quantity-text center">1</span> <button class="quantity-btn add-btn center">+</button> </li>
It should be generated with javascript in index.js From the cart, a user can view and adjust the number of items in their cart If an item's quantity equals zero it is removed from the cart A user can view the current total in their cart

The cart item should be inserted into this ul tag in index.html:

<main id="cart"> <h2>Your Cart</h2>
  <div class="cart--item-list-container">
    <ul class="item-list cart--item-list">
      <!-- Take a look at cart-item.html -->
    </ul>
  </div>

  <div class="total-section">
    <div>
      <h3>Total</h3>
    </div>

    <div>
      <span class="total-number">£0.00</span>
    </div>
  </div>
</main>
<div>
with help of javascript.

2.
I don't see anything get added in the cart via the UI but I see that the state.cart array have items, you need to add the items from state.cart into the cart items list

NOTE: After this question, Copilot remade the code for both store and cart items.
*/
// // Function to render cart items
// function renderCartItems() {
//   // Select the <ul> element
//   const cartItemList = document.querySelector('.item-list.cart--item-list');
//   cartItemList.innerHTML = ''; // Clear existing items

//   state.cart.forEach(item => {
//     // Create a new <li> element
//     const listItem = document.createElement('li');

//     // Create an <img> element
//     const itemImage = document.createElement('img');
//     itemImage.classList.add('cart--item-icon');
//     itemImage.src = `assets/icons/${item.id}.svg`;
//     itemImage.alt = item.name;

//     // Create a <p> element
//     const itemName = document.createElement('p');
//     itemName.textContent = item.name;

//     // Create a <button> element for removing quantity
//     const removeButton = document.createElement('button');
//     removeButton.classList.add('quantity-btn', 'remove-btn', 'center');
//     removeButton.textContent = '-';
//     removeButton.addEventListener('click', () => {
//       item.quantity--;
//       if (item.quantity === 0) {
//         state.cart = state.cart.filter(cartItem => cartItem.id !== item.id);
//       }
//       renderCartItems();
//       updateTotal();
//     });

//     // Create a <span> element for quantity
//     const quantityText = document.createElement('span');
//     quantityText.classList.add('quantity-text', 'center');
//     quantityText.textContent = item.quantity;

//     // Create a <button> element for adding quantity
//     const addButton = document.createElement('button');
//     addButton.classList.add('quantity-btn', 'add-btn', 'center');
//     addButton.textContent = '+';
//     addButton.addEventListener('click', () => {
//       item.quantity++;
//       renderCartItems();
//       updateTotal();
//     });

//     // Append elements to the <li> element
//     listItem.appendChild(itemImage);
//     listItem.appendChild(itemName);
//     listItem.appendChild(removeButton);
//     listItem.appendChild(quantityText);
//     listItem.appendChild(addButton);

//     // Append the <li> element to the <ul> element
//     cartItemList.appendChild(listItem);
//   });
// }

// // Function to update the total price
// function updateTotal() {
//   const totalNumber = document.querySelector('.total-number');
//   const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   totalNumber.textContent = `£${total.toFixed(2)}`;
// }

// // Call the function to render cart items initially
// renderCartItems();
// updateTotal();
// ----------------------------------------


// -------------------- Conversation 3 --------------------
/**
1.
From conversation 2, last question:
"I don't see anything get added in the cart via the UI but I see that the state.cart array have items, you need to add the items from state.cart into the cart items list"

This code seems to work.
NOTE: Just the core part is implemented, not the Extensions.
*/
// Function to render cart items
function renderCartItems() {
  // Select the <ul> element
  const cartItemList = document.querySelector('.item-list.cart--item-list');
  cartItemList.innerHTML = ''; // Clear existing items

  state.cart.forEach(item => {
    // Create a new <li> element
    const listItem = document.createElement('li');

    // Create an <img> element
    const itemImage = document.createElement('img');
    itemImage.classList.add('cart--item-icon');
    itemImage.src = `assets/icons/${item.id}.svg`;
    itemImage.alt = item.name;

    // Create a <p> element
    const itemName = document.createElement('p');
    itemName.textContent = item.name;

    // Create a <button> element for removing quantity
    const removeButton = document.createElement('button');
    removeButton.classList.add('quantity-btn', 'remove-btn', 'center');
    removeButton.textContent = '-';
    removeButton.addEventListener('click', () => {
      item.quantity--;
      if (item.quantity === 0) {
        state.cart = state.cart.filter(cartItem => cartItem.id !== item.id);
      }
      renderCartItems();
      updateTotal();
    });

    // Create a <span> element for quantity
    const quantityText = document.createElement('span');
    quantityText.classList.add('quantity-text', 'center');
    quantityText.textContent = item.quantity;

    // Create a <button> element for adding quantity
    const addButton = document.createElement('button');
    addButton.classList.add('quantity-btn', 'add-btn', 'center');
    addButton.textContent = '+';
    addButton.addEventListener('click', () => {
      item.quantity++;
      renderCartItems();
      updateTotal();
    });

    // Append elements to the <li> element
    listItem.appendChild(itemImage);
    listItem.appendChild(itemName);
    listItem.appendChild(removeButton);
    listItem.appendChild(quantityText);
    listItem.appendChild(addButton);

    // Append the <li> element to the <ul> element
    cartItemList.appendChild(listItem);
  });
}

// Function to update the total price
function updateTotal() {
  const totalNumber = document.querySelector('.total-number');
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalNumber.textContent = `£${total.toFixed(2)}`;
}

// Function to add items to the list
function addItemsToList(items) {
  // Select the <ul> element
  const itemList = document.querySelector('.item-list.store--item-list');

  items.forEach(item => {
    // Create a new <li> element
    const listItem = document.createElement('li');

    // Create a <div> element with the class 'store--item-icon'
    const itemIconDiv = document.createElement('div');
    itemIconDiv.classList.add('store--item-icon');

    // Create an <img> element
    const itemImage = document.createElement('img');
    itemImage.src = `assets/icons/${item.id}.svg`;
    itemImage.alt = item.name;

    // Append the <img> element to the <div> element
    itemIconDiv.appendChild(itemImage);

    // Create a <button> element with the text 'Add to cart'
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';

    // Add event listener to the button to add item to cart
    addButton.addEventListener('click', () => {
      const cartItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      renderCartItems();
      updateTotal();
    });

    // Append the <div> and <button> elements to the <li> element
    listItem.appendChild(itemIconDiv);
    listItem.appendChild(addButton);

    // Append the <li> element to the <ul> element
    itemList.appendChild(listItem);
  });
}

// Call the function to add items to the list using state.items
addItemsToList(state.items);
renderCartItems();
updateTotal();

// ----------------------------------------