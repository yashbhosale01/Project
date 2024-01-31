let inputBox = document.getElementById('inputBox');

function append(value) {
    inputBox.value += value;
}

function clearInput() {
    inputBox.value = '';
}

function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = 'Error';
    }
}