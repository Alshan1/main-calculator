function getScreen() {
    return document.getElementById('screen');
}
function clearScreen() {
    getScreen().textContent = '0';
}
function appendNumber(number) {
    var screen = getScreen();
    if (screen.textContent === '0') {
        screen.textContent = number;
    } else {
        screen.textContent += number;
    }
}

function appendDecimal(decimal) {
    var screen = getScreen();
    var currentText = screen.textContent;

    // Split the current expression by operators (+, -, *, /)
    var segments = currentText.split(/[+\-*\/]/);

    // Get the last segment (current operand)
    var lastSegment = segments[segments.length - 1];

    // Check if the last segment already includes a decimal point
    if (!lastSegment.includes(decimal)) {
        screen.textContent += decimal;
    }
}

function operate(operator) {
    var screen = getScreen();
    screen.textContent += operator;
}
function backspace() {
    var screen = getScreen();
    screen.textContent = screen.textContent.slice(0, -1);
    if (screen.textContent === '') {
        screen.textContent = '0';
    }
}

function calculate() {
    var screen = getScreen();
    var expression = screen.textContent;

    // Using JavaScript's built-in eval() function for simplicity
    try {
        var result = eval(expression);
        screen.textContent = result;
    } catch (error) {
        screen.textContent = 'Error';
    }
}
