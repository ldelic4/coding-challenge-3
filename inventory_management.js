//task 1
const inventory= [
    {name:'Laptop', price: 1200, quantity: 10, lowStocklevel: 3},
    {name:'Smartphone', price: 800, quantity: 5, lowStocklevel: 2},
    {name:'Tablet', price: 400, quantity: 5, lowStocklevel: 1},
    {name: ' headphones', price:100, quantity: 15, lowStocklevel:5},
    {name:'smartwatch', price:250, quantity:3, lowStocklevel:1}
];

//task 2

function displayProductDetails(name, price, quantity, lowStocklevel){
    return lowStocklevel>3? "High stock level": "Low stock level";

}
console.log(message);
