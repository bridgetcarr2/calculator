// This function clears all the values on the screen.
function clear_answer() {
    document.getElementById("result").value = "";
}

// This function shows the values.
function show_value(value) {
    document.getElementById("result").value += value;
}
    
// This function evaluates the expression and returns the result.
function calculate() {
    var num1 = document.getElementById("result").value;
    var num2 = eval(num1);
    document.getElementById("result").value = num2;
}
