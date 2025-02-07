let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;

    document.getElementById("result").innerText = `The area of the rectangle is ${area}`;
}

function calculateTotalExpenditure() {
    let price1 = parseFloat(document.getElementById("grocery-1-price").value);
    let price2 = parseFloat(document.getElementById("grocery-2-price").value);
    let price3 = parseFloat(document.getElementById("grocery-3-price").value);

    let total_amount = price1 + price2 + price3;

    document.getElementById("result-amount").innerText = `Total amount: $ ${total_amount}`

}