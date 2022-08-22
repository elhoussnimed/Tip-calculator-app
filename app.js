const bill = document.getElementById("bill");
const people = document.getElementById("people");
const customTip = document.getElementById("custom-tip");
const tipBtn = document.querySelectorAll(".tip-num button");
const tipAmount = document.querySelector(".tip-amount span:nth-child(2)");
const total = document.querySelector(".total-to-pay span:nth-child(2)");
const reset = document.getElementById("reset");
let tipStatus;
let tipValue;
let btnValue;

let billValue; 
bill.oninput = () => billValue = parseInt(bill.value);

let peopleNumber;
people.addEventListener("input", ()=>{
    peopleNumber = parseInt(people.value);
});

let customTipValue;
customTip.oninput = () => {
    tipBtn.forEach(btn => btn.style.backgroundColor = "var(--Very-dark-cyan)");
    tipStatus = false;
    customTipValue = parseInt(customTip.value);
}

tipBtn.forEach(btn => {
    btn.onclick = () => {
        customTip.value = "";
        tipStatus = true;
        tipBtn.forEach(btn => btn.style.backgroundColor = "var(--Very-dark-cyan)");
        btn.style.backgroundColor = "var(--Strong-cyan)";
        btnValue = parseInt(btn.innerHTML);
    }
})

function setFinalDataToDom() {
    // Get The Chosen Tip Amount
    if (tipStatus === true) {
        tipValue = btnValue;
    } else {
        tipValue = customTipValue
    }
    // Calc The Final Amount And Append All To DOM
    const finalTip = (billValue * tipValue) / 100;
    tipAmount.innerHTML = `\$${(finalTip / peopleNumber).toFixed(2)}`
    total.innerHTML = `\$${((finalTip / peopleNumber) + (billValue / peopleNumber)).toFixed(2)}`
};

function resetAllData() {
    bill.value = "";
    people.value = "";
    customTip.value = "";
    tipBtn.forEach(btn => btn.style.backgroundColor = "var(--Very-dark-cyan)");
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
};

people.addEventListener("input", setFinalDataToDom);
reset.addEventListener("click", resetAllData);
