{
    interface Employee {
        pay(): void;
    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log('work full time!');
        }

        workFullTime() {};
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log('work part time!');
        }
        workPartTime() {};
    }


    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    function payGood<E extends Employee>(employee: E): E {
        employee.pay();
        return employee;
    }

    const ttasjwi = new FullTimeEmployee();
    const bob = new PartTimeEmployee();
    ttasjwi.workFullTime();
    bob.workPartTime();

    // const ttasjwiAfterPay = payBad(ttasjwi);
    // const bobAfterPay = payBad(bob);
    const ttasjwiAfterPay = payGood(ttasjwi);
    const bobAfterPay = payGood(bob);

    ttasjwiAfterPay.workFullTime();
    bobAfterPay.workPartTime();

    const obj1 = {
        name: 'ttasjwi',
        age:20
    }

    const obj2 = {
        animal: '🐕',
    }

    /**
     * keyof 연산자 : ~의 키
     */

    function getValue<T, K extends keyof T>(obj: T, key: K) : T[K] {
        return obj[key];
    }

    console.log(getValue(obj1, 'name')); // ttasjwi
    console.log(getValue(obj1, 'age')); // ttasjwi
    console.log(getValue(obj2, 'animal')); // ttasjwi
}

