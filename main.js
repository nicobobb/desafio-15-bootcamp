let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
const additionButton = document.getElementById("addition");
const subtractionButton = document.getElementById("subtraction");
const multiplicationButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");
const resultInput = document.getElementById("result");

const validationNumber = (number) => {
    const regex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
    return regex.test(number);
};

const operation = (type) => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;

    if (validationNumber(num1) && validationNumber(num2)) {
        switch (type) {
            case "addition":
                result = num1 + num2;
                break;
            case "subtraction":
                result = num1 - num2;
                break;
            case "multiplication":
                result = num1 * num2;
                break;
            case "division":
                if (num2 === 0) {
                    resultInput.value = "No se puede dividir por cero";
                    return;
                }
                result = num1 / num2;
                break;
        }
        resultInput.value = result;
    } else {
        resultInput.value = "Por favor escribe un número correcto";
    }
};

additionButton.addEventListener("click", () => operation("addition"));

subtractionButton.addEventListener("click", () => operation("subtraction"));

divisionButton.addEventListener("click", () => operation("division"));

multiplicationButton.addEventListener("click", () =>
    operation("multiplication")
);
