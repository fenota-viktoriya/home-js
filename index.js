let input;
let result = 0;

while (input !== null) {
    input = prompt("Введите число");
    if (input !== null) {
        let numberInput=(Number(input));
        if (Number.isNaN(numberInput)) {
            alert("Было введено не число, попробуйте еще раз");
        } else {
            result += numberInput;
        }
    }
}
alert(`Общая сумма чисел равна ${result}`);

    