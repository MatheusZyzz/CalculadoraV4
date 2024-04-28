let currentInput = '0';
let currentOperation = '';
let memory = 0;
let isPowered = true;
let memoryStored = false;
let accumulator = 0;

function updateDisplay() {
    const result = document.getElementById('result');
    const operation = document.getElementById('operation');
    if (!isPowered) {
        result.textContent = '';
        operation.textContent = '';
    } else {
        result.textContent = currentInput;
        operation.textContent = currentOperation + (memoryStored ? ' M' : '');
    }
}

function pressKey(key) {
    if (!isPowered) return;

    
    if (currentInput === '0' && key === '0') {
        return; 
    } else if (currentInput === '0') {
        currentInput = key; 
    } else {
        currentInput += key; 
    }

    updateDisplay();
}


function setOperation(op) {
    if (!isPowered) return;
    if (currentOperation && currentInput !== '') {
        calculate();
    }
    currentOperation = op;
    accumulator = parseFloat(currentInput); 
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (!isPowered) return;
    let result = 0;
    const current = parseFloat(currentInput);
    switch (currentOperation) {
        case '+': result = accumulator + current; break;
        case '-': result = accumulator - current; break;
        case '*': result = accumulator * current; break;
        case '/': 
            result = current === 0 ? 'Erro: Divisão por zero' : accumulator / current;
            break;
    }
    accumulator = result;
    currentInput = result.toString().substring(0, 10);
    currentOperation = '';
    updateDisplay();
}

function pressKey(key) {
    if (!isPowered) return;
    
    if (key === '.' && currentInput.includes('.')) {
        return; 
    }

    if (currentInput === '0' && key === '0') {
        return; 
    } else if (currentInput === '0') {
        currentInput = key; 
    } else {
        
        if (key === '.' && !currentInput.includes('.')) {
            currentInput += key; 
        } else if (key !== '.') {
            currentInput += key; 
        }
    }

    updateDisplay();
}

function toggleSign() {
    if (!isPowered || currentInput === '0') return;
    currentInput = String(-parseFloat(currentInput));
    updateDisplay();
}

function calculateSquare() {
    if (!isPowered) return;
    let value = parseFloat(currentInput);
    currentInput = (value * value).toString().substring(0, 10);
    updateDisplay();
}

function calculateSquareRoot() {
    if (!isPowered) return;
    let value = parseFloat(currentInput);
    currentInput = value < 0 ? 'Erro: Raiz Negativa' : Math.sqrt(value).toString().substring(0, 10);
    updateDisplay();
}
function calculateInverse() {
    if (!isPowered) return;
    let value = parseFloat(currentInput);
    currentInput = value === 0 ? 'Erro: Divisão por zero' : (1 / value).toString().substring(0, 10);
    updateDisplay();
}

function clearDisplay() {
    if (!isPowered) return;
    clearEntry();
}

function togglePower() {
    isPowered = !isPowered;
    if (isPowered) {
        clearAll();
    } else {
        const result = document.getElementById('result');
        const operation = document.getElementById('operation');
        result.textContent = '';
        operation.textContent = '';
    }
}

function memoryAdd() {
    if (!isPowered) return;
    memory += parseFloat(currentInput);
    memoryStored = true;
    clearEntry();
}

function memorySubtract() {
    if (!isPowered) return;
    memory -= parseFloat(currentInput);
    memoryStored = true;
    clearEntry();
}

function memoryRecall() {
    if (!isPowered || !memoryStored) return;
    currentInput = memory.toString().substring(0, 10);
    updateDisplay();
}

function memoryClear() {
    if (!isPowered) return;
    memory = 0;
    memoryStored = false;
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    currentOperation = '';
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    currentOperation = '';
    accumulator = 0;
    memory = 0;
    memoryStored = false;
    updateDisplay();
}
