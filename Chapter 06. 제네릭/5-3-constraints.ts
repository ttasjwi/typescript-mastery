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
}
