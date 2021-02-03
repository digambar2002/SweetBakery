


// Product Detail
// Adding all the values in to the html page of order summary
document.getElementById("ProductName").innerText=localStorage.getItem("cakename");
document.getElementById("CakeType").innerText=localStorage.getItem("CakeType");
document.getElementById("CakeWeight").innerText=localStorage.getItem("Weight");
document.getElementById("Quantity").innerText=localStorage.getItem("ProductQuantity");


// Price Detail
// Adding all the price value into the html page of orser summary
document.getElementById("CakeWeightPrice").innerText=localStorage.getItem("Weight");
document.getElementById("WeightPrice").innerText=localStorage.getItem("WeightPrice");
document.getElementById("TotalQuantity").innerText=localStorage.getItem("ProductQuantity");
document.getElementById("SubTotal").innerText=localStorage.getItem("SubTotal");
document.getElementById("Total").innerText=localStorage.getItem("TotalPrice");