// Task 1: Create an Inventory Array of Product Objects

let inventory = [
    {name: 'Camera Strap', price: 500, quantity: 5, lowStockLevel: 2 },
    {name: 'Camera Lens', price: 1000, quantity: 10, lowStockLevel: 4 },
    {name: 'Camera Bag', price: 1500, quantity: 15, lowStockLevel: 6 },
    {name: 'Camera Film', price: 2000, quantity: 20, lowStockLevel: 8 },
    {name: 'Camera', price: 2500, quantity: 25, lowStockLevel: 10 },
]; 

// Array contains product: name, price, quanity, and lowstock level of the 5 example products listed. 

// Task 2: Create a Function to Display Product Details

function displayProductDetails(inventory) {
    const stockStatus = inventory.quantity <= inventory.lowStockLevel ? "Low Stock" : "In Stock" // Use ternary operator to check stock status.
    return `${inventory.name} is ${stockStatus}` // Use return function to display if the product is in stock or not. 
        
} 
console.log(displayProductDetails(inventory[0])); // Used to display which product is in stock. 
 console.log(inventory[0]); // Used to display the product's: name, price, quanity, and lowstocklevel.

