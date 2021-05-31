/* 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for) */

function getAliquotNumbers(n, k) {
    for (let i=1; i <= n; i++) {
        if (i % k == 0) {
            console.log(i);
        }
    }
}


console.log(getAliquotNumbers(25, 5));

// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных. => in home

function consoleNumbers() {
    n = prompt('Введите число: ');

    for (let i=1; i <= n; i++) {
        console.log(i);
    }
}

function isSimple() {
    n = prompt('Введите число: ');

    for (let d = 2; d < n; d++) {
        if (n % d === 0) {
            return false;
        }
    }

    return true;
}

function getAliquotNumbers() {
    n = prompt('Введите число, до которого будет сформирован диапазон от 1 до n: ');
    k = prompt('Введите число для проверки на кратность: ');

    for (let i=1; i <= n; i++) {
        if (i % k == 0) {
            console.log(i);
        }
    }
}
