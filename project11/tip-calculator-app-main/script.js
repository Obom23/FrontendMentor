(function () {
  const billInput = document.getElementById('input1');
  const peopleInput = document.getElementById('input2');
  const customTipInput = document.getElementById('input-button');
  const resetButton = document.getElementById('reset');
  const allInputs = document.querySelectorAll('input');
  const tipButtons = Array.from(
    document.getElementById('tip-buttons').children
  );
  const errorMessage = document.getElementById('error-message');
  const tipDisplay = createDisplayElement('flex1', '$0.00');
  const totalDisplay = createDisplayElement('flex2', '$0.00');

  allInputs.forEach((field) => {
    field.addEventListener('input', handleFieldInput);
  });

  resetButton.addEventListener('click', handleReset);

  tipButtons.forEach((button) => {
    button.addEventListener('click', () => handleTipButtonClick(button));
  });

  function handleFieldInput() {
    const anyFieldHasValue = Array.from(allInputs).some(
      (input) => input.value !== ''
    );
    resetButton.classList.toggle('not-empty-reset', anyFieldHasValue);
  }

  function handleReset() {
    updateDisplay(tipDisplay, '$0.00');
    updateDisplay(totalDisplay, '$0.00');

    clearInputs(billInput, peopleInput, customTipInput);

    tipButtons.forEach((button) => button.classList.remove('clicked'));

    resetButton.classList.remove('not-empty-reset');
  }

  function handleTipButtonClick(button) {
    if (validateInputs(billInput.value, peopleInput.value)) {
      return;
    }

    toggleErrorState(false);

    tipButtons.forEach((btn) => btn.classList.remove('clicked'));
    button.classList.add('clicked');

    const { tip, total } = calculateTipAndTotal(
      parseFloat(billInput.value),
      parseFloat(button.value || convertTextToTipPercent(button.textContent)),
      parseInt(peopleInput.value, 10)
    );

    updateDisplay(tipDisplay, `$${tip.toFixed(2)}`);
    updateDisplay(totalDisplay, `$${total.toFixed(2)}`);

    clearInputs(billInput, peopleInput, customTipInput);
  }

  function createDisplayElement(containerId, defaultText) {
    const container = document.getElementById(containerId);
    const displayElement = document.createElement('p');
    displayElement.className = 'tipnode';
    displayElement.textContent = defaultText;
    container.appendChild(displayElement);
    return displayElement;
  }

  function updateDisplay(element, text) {
    element.textContent = text;
  }

  function validateInputs(bill, people) {
    if (!bill) {
      return true;
    }

    if (people < 1) {
      toggleErrorState(true);
      return true;
    }

    return false;
  }

  function toggleErrorState(showError) {
    if (showError) {
      errorMessage.classList.remove('error-message-hidden');
      peopleInput.classList.add('error');
    } else {
      errorMessage.classList.add('error-message-hidden');
      peopleInput.classList.remove('error');
    }
  }

  function convertTextToTipPercent(text) {
    return parseFloat(text) || 0;
  }

  function calculateTipAndTotal(billValue, tipPercent, numberOfPeople) {
    const tipTotal = billValue * (tipPercent / 100);
    const tipPerPerson = tipTotal / numberOfPeople;
    const totalPerPerson = (billValue + tipTotal) / numberOfPeople;
    return { tip: tipPerPerson, total: totalPerPerson };
  }

  function clearInputs(input1, input2, input3) {
    input1 && (input1.value = '');
    input2 && (input2.value = '');
    input3 && (input3.value = '');
  }
})();
