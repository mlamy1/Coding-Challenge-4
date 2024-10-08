// Task 1: Create an Inventory Array of Product Objects

const inventory = [
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

// Task 3: Create a Function to Update Product Stock After Sales

const unitsSold = [52, 100, 64, 88, 92]; // Example value used for function
function updateStock(product, unitsSold) {
    product.quantity -= unitsSold; // Calculates quantity after unitsSold

    let status; 
    if(product.quantity <= 0) {
        status = `${product.name} is out of stock`; // Message will display if quantity is less zero.
    } else if ( product.quantity <= product.lowStockLevel){
        status = `${product.name} is low on stock`; // Message will display if quantity is greater than zero. 
    } else {
        status = `${product.name} stock is sufficient. Current Quantity: ${product.quantity}`; // Message will display output is different than first two options. 
    }
    return status;
}
const message = updateStock(inventory[0],2); // Used to find new current quantity.  
console.log(message); // Used to display message 

// Task 4: Create a Function to Check Low Stock Products 

function checkLowStock(inventory) {
    for (let i = 0; i < inventory.length; i++) { // For loop used to iterate through the inventory array. 
        if (inventory.quantity <= inventory.lowStockLevel) // Calculation to determine if product quantity is less than the stock level. 
            return `${inventory.name} has a low stock level.`; { // Message will display if calculation is true. 
    }}
    return `All stock levels are sufficient`; // Message will display if calculation is false. 
}
console.log(checkLowStock(inventory)); // Function to display message. 

//Task 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue(inventory) {
   return inventory.reduce ((total, inventory) => {
       return total + (inventory.quantity * inventory.price)},0)}; // Used to calculate value of the product. 


let totalInventoryValue = calculateInventoryValue(inventory); // Used to create message.
console.log(`The total inventory value is: $${totalInventoryValue}`); // Will display message and output of previous calculation. 

// Task 6: Create a Function to Process a Sale

function processSale(productName,unitsSold) {
    let results = inventory.find ((product => {inventory.name === product}));
    if(results) {
       return updateStock(productName, unitsSold);
    } else {
        return (`ERROR: ${productName} is not in the inventory!`); // Message that will be displayed. 
    }
}
console.log(processSale(`Camera Lens`)); // Function will display message for the Example Product. 
