let inputField = document.getElementById('input-field');
var undoButton = document.getElementById("undoButton");

undoButton.addEventListener("click", function () {
  inputField.value = inputField.value.slice(0, -1);
});

function appendValue(value) {
  inputField.value += value;
}

function performOperation(operator) {
  inputField.value += operator;
}

function calculate() {
  let result = eval(inputField.value);
  inputField.value = result;
}

function clearInput() {
  inputField.value = '';
}
