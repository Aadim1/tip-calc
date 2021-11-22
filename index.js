const billDOM = document.getElementById("money");
const tipPercentBtn = document.querySelectorAll(".btn");
const tipPercentDOM = document.querySelector("#tip-percent-custom");
const noOfPeopleDOM = document.querySelector('#numberOfPeople');
const buttonReset = document.querySelector('.btn-result');
const tipAmountPerPersonDOM = document.querySelector('.tip-amount-person');
const totalAmountPerPersonDOM = document.querySelector('.total-per-person');
let bill = 0.00;
let tipPercent = 0.00;
let noOfPeople = 1;

const calculateTip = () => {
    totalTip = (tipPercent / 100) * bill;
    totalAmount = parseFloat(bill) + parseFloat(totalTip);
    tipAmountPerPerson = (totalTip / noOfPeople).toFixed(2);
    totalAmountPerson = (totalAmount / noOfPeople).toFixed(2);
    tipAmountPerPersonDOM.innerHTML = `$${tipAmountPerPerson}`;
    totalAmountPerPersonDOM.innerHTML = `$${totalAmountPerson}`;
    if (isNaN(totalAmountPerson)) {
        totalAmountPerPersonDOM.innerHTML = `$0.00`;
    };
    buttonReset.style.backgroundColor = 'hsl(172,67%,45%)';
    buttonReset.style.color = 'black';
};


billDOM.addEventListener('input', (e) => {
    bill = e.target.value;
    calculateTip();
});

tipPercentBtn.forEach((e) => {
    e.style.transition = '0.5s';
    e.addEventListener('click', () => {
        tipPercentDOM.value = '';
        tipPercentBtn.forEach((event) => {
            event.style.backgroundColor = 'hsl(183,100%,15%)';
        });
        e.style.backgroundColor = 'hsl(172,67%,45%)';
        tipPercent = parseFloat((e.innerHTML).replace('%', ''));
        calculateTip();
    });
});

tipPercentDOM.addEventListener('input', (e) => {
    tipPercentBtn.forEach((event) => {
        event.style.transition = '0.5s';
        event.style.backgroundColor = 'hsl(183,100%,15%)';
    });
    tipPercent = e.target.value;
    calculateTip();
});

noOfPeopleDOM.addEventListener('input', (e) => {
    noOfPeople = e.target.value;
    if (noOfPeople <= 0) {
        noOfPeople = 1;
    }
    calculateTip();
});

buttonReset.addEventListener('click', (e) => {
    buttonReset.style.backgroundColor = 'hsl(186,14%,43%)';
    bill = 0;
    billDOM.value = '';
    tipPercentBtn.forEach((event) => {
        event.style.backgroundColor = 'hsl(183,100%,15%)';
    });
    tipPercentDOM.value = '';
    noOfPeopleDOM.value = '';
    tipAmountPerPersonDOM.innerHTML = `$0.00`;
    totalAmountPerPersonDOM.innerHTML = `$0.00`;
});