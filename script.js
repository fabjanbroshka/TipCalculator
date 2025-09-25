let bill = 0;
let amount = document.getElementById('amount');
let tip = document.getElementById('tip');
let display = document.getElementById('display');

function Calculate (){
    let amountValue = Number(amount.value);
    let tipValue = Number(tip.value / 100) * Number(amount.value);
    bill = Number(amountValue) + Number(tipValue);
    display.value = bill.toFixed(2) + `$`;
}
