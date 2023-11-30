// function number one
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const inputFieldFloat = parseFloat(inputFieldString);
  inputField.value = "";
  return inputFieldFloat;
}

// function number two
function getElementTextValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementString = textElement.innerText;
  const textElementFloat = parseFloat(textElementString);
  return textElementFloat;
}

// function number three
function setTexElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
