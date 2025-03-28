function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        alert("Invalid Expression");
        clearDisplay();
    }
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
