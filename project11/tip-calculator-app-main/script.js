const inputBill = document.getElementById('input1');
const inputNumberPeople = document.getElementById('input2');
const inputButton = document.getElementById('input-button');
const allInputFields = document.querySelectorAll('input');
const flex1 = document.getElementById('flex1');
const flex2 = document.getElementById('flex2');
const tipAmount = document.createElement('p');
tipAmount.textContent = '$0.00';
tipAmount.className = 'tipnode';
const tipTotal = document.createElement('p');
tipTotal.textContent = '$0.00';
tipTotal.className = 'tipnode';

flex1.appendChild(tipAmount);
flex2.appendChild(tipTotal);

const tipButtons = document.getElementById('tip-buttons').children;
const reset = document.getElementById('reset');

Array.from(allInputFields).forEach((field) => {
  console.log(reset);
  field.addEventListener('input', () => {
    console.log('I am here');
    console.log('Field: ', field.value);
    if (field.value === '') {
      reset.classList.remove('not-empty-reset');
      console.log(reset);
    } else {
      reset.classList.add('not-empty-reset');
    }
  });
});

reset.addEventListener('click', () => {
  tipAmount.textContent = '$0.00';
  tipTotal.textContent = '$0.00';
  inputBill && (inputBill.value = '');
  inputNumberPeople && (inputNumberPeople.value = '');
  inputButton && (inputButton.value = '');
  Array.from(tipButtons).forEach((button) => {
    button.classList.remove('clicked');
  });
});

Array.from(tipButtons).forEach((button) => {
  button.addEventListener('click', () => {
    if (inputBill.value === '' || inputNumberPeople.value === '') {
      return;
    }

    const { tip, total } = applyTip(
      button,
      inputNumberPeople.value,
      inputBill.value
    );
    tipAmount.textContent = `$${tip}`;
    tipTotal.textContent = `$${total}`;

    inputBill.value = '';
    inputNumberPeople.value = '';
    button.value = '';
  });
});

function applyTip(button, numberOfPeople, billValue) {
  const value = parseFloat(billValue);
  let result = 0;

  if (button.textContent === '5%') {
    result = value * 0.05;
  } else if (button.textContent === '10%') {
    result = value * 0.1;
  } else if (button.textContent === '15%') {
    result = value * 0.15;
  } else if (button.textContent === '20%') {
    result = value * 0.2;
  } else if (button.textContent === '25%') {
    result = value * 0.25;
  } else if (button.textContent === '50%') {
    result = value * 0.5;
  } else {
    result = value * (button.value / 100);
  }

  const tip = result / numberOfPeople;
  const total = (value + result) / numberOfPeople;

  return {
    tip: tip.toFixed(2),
    total: total.toFixed(2)
  };
}
