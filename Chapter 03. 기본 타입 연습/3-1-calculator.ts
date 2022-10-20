{
    // 숫자 계산기

    type Operator = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

    function add(num1: number, num2: number) : number {
        return num1 + num2;
    }

    function subtract(num1: number, num2: number) : number {
        return num1 - num2;
    }

    function multiply(num1: number, num2:number) : number {
        return num1 * num2;
    }

    function divide(num1: number, num2:number) : number | never {
        if (num2 === 0) {
            throw new Error('0으로 나눌 수 없어요.');
        }
        return num1/num2;
    }

    function remainder(num1: number, num2:number) : number | never {
        if (num2 === 0) {
            throw new Error('0으로 난 몫은 구할 수 없어요.');
        }
        return num1%num2;
    }

    function calculate(operator:Operator, num1:number, num2:number) : number | never {
        switch (operator) {
            case 'add':
                return add(num1, num2);
            case 'subtract':
                return subtract(num1, num2);
            case 'multiply':
                return multiply(num1, num2);
            case 'divide':
                return divide(num1, num2);
            case 'remainder':
                return remainder(num1, num2);
            default:
                throw new Error('unknown command');
        }
    }

    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('subtract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1

}
