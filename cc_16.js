//Task 2: Fetch Products with .then()

console.log("Task 2: Fetching products with .then() starts now...");

// This function uses .then() to get the products from the API
function fetchProductsThen() {
  // Using fetch to grab data from the API
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())  // Convert the response to JSON
    .then(data => {
      // Once we have the data, loop over it and just log the product names for now
      data.forEach(product => {
        console.log(product.name);
      });
    })
    .catch(error => {
      // If something goes wrong with the fetch, we'll log the error
      console.log("Whoops, there was an error fetching the products:", error);
    });
}

// Call the function to test it
fetchProductsThen();

// Task 3: Fetch Products with async/await

console.log("Task 3: Fetching products with async/await begins...");

async function fetchProductsAsync() {
  try {
    // Fetch the product data
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const data = await response.json();  // Get the data as JSON
    console.log(data);  // Log the API response to inspect the structure
    displayProducts(data);  // Show the products on the page
  } catch (error) {
    // If there's any error, handle it with the custom error handler
    handleError(error);
  }
}

// Call the function to fetch and display products
fetchProductsAsync();

// Task 4: Display the Products

function displayProducts(products) {
    console.log("Task 4: Displaying products in the DOM");
  
    const productContainer = document.getElementById('product-container');
    // We only want to show the first 5 products
    products.slice(0, 5).forEach(product => {
     // Use fallback values if product properties are undefined or missing
      const name = product.name || 'No name available';
      const price = product.price || 'No price available';
      const image = product.image || 'https://via.placeholder.com/150';  // Fallback image
      // Creating HTML to show each product's name, price, and image
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
      `;
      // Adding the product to the container on the page
      productContainer.appendChild(productDiv);
    });
  }
 
  // Task 5: Reusable Error Handler

function handleError(error) {
    console.log("Task 5: Something went wrong, here's the error: ", error.message);
  }

  // Task 6: Call Your Fetch Functions

console.log("Task 6: Running both fetch methods...");

// Call both fetch functions so we can see the results in the console and on the page
fetchProductsThen();  // Using .then()
fetchProductsAsync();  // Using async/await