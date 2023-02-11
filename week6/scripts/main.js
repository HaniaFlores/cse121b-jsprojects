let results = {};

function calculateTaxes(bill, rate) {
    return bill * (rate / 100);
}

function getTaxes() {
    let billElement = parseFloat(document.getElementById("amount").value);
    let taxRate = parseFloat(document.getElementById("tax-rate").value);
    let taxes = calculateTaxes(billElement, taxRate);
    results.billAmount = billElement;
    results.salesTax = taxes;
    return taxes;
}

function calculateTip(bill, rate) {
    return bill * rate;
}

function getTip() {
    let billElement = parseFloat(document.getElementById("amount").value);
    let tipRate = parseFloat(document.getElementById("services").value);
    let tip = calculateTip(billElement, tipRate);
    results.tipAmount = tip;
    return tip;
}

function calculateTotal(bill, taxes, tip) {
    return bill + taxes + tip;
}

function getTotal() {
    let bill = results.billAmount;
    let taxes = results.salesTax;
    let tip = results.tipAmount;
    let total = calculateTotal(bill, taxes, tip);
    results.total = total;
}

// *** RESULTS ***
function displayResults() {
    getTaxes();
    getTip();
    getTotal(); 

    if (isNaN(results.billAmount) || results.billAmount == 0 || isNaN(results.tipAmount) || isNaN(results.salesTax) || results.salesTax == 0)
    {
        alert("Please insert valid values.")
    }
    else {
        document.querySelector(".results").style.display = "block";
        document.getElementById("subtotal").textContent = results.billAmount.toFixed(2);
        document.getElementById("tax-amount").textContent = results.salesTax.toFixed(2);
        document.getElementById("tip-amount").textContent = results.tipAmount.toFixed(2);
        document.getElementById("total").textContent = results.total.toFixed(2);
    }
    
}


document.getElementById("calculate").addEventListener("click", () => {
    displayResults();
});

const d = new Date();
const year = d.getFullYear()
document.getElementById("year").innerHTML = year;

