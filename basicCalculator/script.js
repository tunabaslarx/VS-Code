var num1, num2 = 0;

function defineOperator(op) {

    num1 = Number(document.getElementById("inputBox1").value);

    switch (op) {
        case "+":
            num2 += num1;
            break;

        case "-":
            num2 -= num1;
            break;
        
        case "*":
            num2 *= num1;
            break;

        case "/":
            num2 /= num1;
            break;
    }

    document.getElementById("inputBox1").value = 0;
    document.getElementById("result").value = num2;
    return 0;
}
