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
    displayProducts(data);  // Show the products on the page
  } catch (error) {
    // If there's any error, handle it with the custom error handler
    handleError(error);
  }
}

// Call the function to fetch and display products
fetchProductsAsync();
