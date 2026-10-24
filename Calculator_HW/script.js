/**
 * Выполняет математическую операцию с использованием switch.
 */
function calculateOperation(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Деление на ноль невозможно! 🙅‍♀️');
            }
            return a / b;
        default:
            throw new Error('Неизвестная операция 🤷‍♀️');
    }
}

/**
 * Главная функция калькулятора.
 */
function calculate() {
    const num1Input = document.getElementById('num1').value.trim();
    const num2Input = document.getElementById('num2').value.trim();
    const operation = document.getElementById('operation').value;
    const resultBox = document.getElementById('result');

    // Сбрасываем стили ошибки
    resultBox.classList.remove('error');

    // Проверка на пустые поля
    if (num1Input === '' || num2Input === '') {
        showError('Пожалуйста, введите оба числа! 🥺');
        return;
    }

    // Преобразуем в числа
    const a = parseFloat(num1Input);
    const b = parseFloat(num2Input);

    // Проверка на корректность
    if (isNaN(a) || isNaN(b)) {
        showError('Введены некорректные числа! 😿');
        return;
    }

    // Вычисление
    try {
        const result = calculateOperation(a, b, operation);
        // Добавляем эмодзи в зависимости от операции
        let emoji = '🎉';
        if (operation === '+') emoji = '💖';
        if (operation === '-') emoji = '🍂';
        if (operation === '*') emoji = '✨';
        if (operation === '/') emoji = '🌸';

        resultBox.textContent = `${a} ${operation} ${b} = ${result} ${emoji}`;
    } catch (error) {
        showError(error.message);
    }
}

/**
 * Вывод ошибки.
 */
function showError(message) {
    const resultBox = document.getElementById('result');
    resultBox.textContent = '⚠️ ' + message;
    resultBox.classList.add('error');
}