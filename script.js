const display = document.getElementById('display');

function appendValue(val) {
  if (display.value === '0' && val !== '.') {
    display.value = val;
  } else {
    display.value += val;
  }
}

function clearDisplay() {
  display.value = '0';
}

function toggleSign() {
  if (display.value !== '0' && display.value !== '') {
    if (display.value.startsWith('-')) {
      display.value = display.value.slice(1);
    } else {
      display.value = '-' + display.value;
    }
  }
}

function calculate() {
  try {
    let expression = display.value
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/%/g, '/100');

    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1500);
  }
}