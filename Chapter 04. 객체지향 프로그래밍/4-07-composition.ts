{
    /**
     * 상속의 문제점
     * - 하위 클래스가 상위 클래스의 코드에 강하게 의존하고 있다. 상위 클래스가 변경되면 모든 하위클래스를 변경해야한다.
     * - 더 나아가, 상속 계층이 복잡해지면 상위 클래스 변경 시 이를 의존하는 하위 클래스 상당수를 변경해야한다.
     * - 상속 관계로 강하게 두 클래스가 결합되어 있고, 다중 상속이 불가능하다.
     */

    class CoffeeCup {
        private readonly shots: number;
        private readonly hasMilk: boolean;
        private readonly hasSugar: boolean;

        constructor(shots: number, hasMilk = false, hasSugar = false) {
            this.shots = shots;
            this.hasMilk = hasMilk;
            this.hasSugar = hasSugar;
        }

        public addMilk(): CoffeeCup {
            return new CoffeeCup(this.shots, true, this.hasSugar);
        }

        public addSugar(): CoffeeCup {
            return new CoffeeCup(this.shots, this.hasMilk, true);
        }
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother {
        addSteamMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarSource {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {

        private static BEANS_GRAM_PER_SHOT: number = 7; // class level

        private coffeeBeans: number = 0; // instance (object) level
        private milkFrother: MilkFrother;
        private sugarSource: SugarSource;

        public constructor(coffeeBeans: number, milkFrother: MilkFrother, sugarSource: SugarSource) {
            this.coffeeBeans = coffeeBeans;
            this.milkFrother = milkFrother;
            this.sugarSource = sugarSource;
        }

        public makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffeeCup = this.extract(shots);
            const steamMilkAddedCoffee = this.milkFrother.addSteamMilk(coffeeCup);
            const sugarAddedCoffee = this.sugarSource.addSugar(steamMilkAddedCoffee);
            return sugarAddedCoffee;
        }

        public fillCoffeeBeans(beans: number): void {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            console.log('fill coffeBeans to CoffeeMachine... ')
            this.coffeeBeans += beans;
        }

        public clean(): void {
            console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up... 🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕️`);
            return new CoffeeCup(shots);
        }
    }

    class CheapMilkSteamer implements MilkFrother {

        addSteamMilk(cup: CoffeeCup): CoffeeCup {
            console.log(`Steaming some milk🥛...`);
            return cup.addMilk();
        }
    }

    class FancyMilkSteamer implements MilkFrother {
        addSteamMilk(cup: CoffeeCup): CoffeeCup {
            console.log(`Fancy!!!! Steaming some milk🥛...`);
            return cup.addMilk();
        }
    }

    class NoMilkSteamer implements MilkFrother {
        addSteamMilk(cup: CoffeeCup): CoffeeCup {
            console.log(`No milk Add...`);
            return cup;
        }
    }

    class NoSugarMixer implements SugarSource {

        addSugar(cup: CoffeeCup): CoffeeCup {
            console.log('No sugar add...')
            return cup;
        }

    }

    class CandySugarMixer implements SugarSource {

        addSugar(cup: CoffeeCup) : CoffeeCup {
            console.log('CandySugar Add!!');
            return cup.addSugar();
        }
    }

    class DefaultSugarMixer implements SugarSource {
        addSugar(cuppa: CoffeeCup): CoffeeCup {
            console.log(`Adding sugar...`);
            return cuppa.addSugar();
        }
    }

    // MilkSteamer
    const cheapMilkSteamer = new CheapMilkSteamer();
    const fancyMilkSteamer = new FancyMilkSteamer();
    const noMilkSteamAdder = new NoMilkSteamer();

        // Sugar
    const candySugarMixer = new CandySugarMixer();
    const noSugarMixer = new NoSugarMixer();
    const defaultSugarMixer = new DefaultSugarMixer();


    const sweetCandySugarCoffeeMachine = new CoffeeMachine(40, noMilkSteamAdder, candySugarMixer);
    const sweetCaffeLatteMachine = new CoffeeMachine(0, fancyMilkSteamer, defaultSugarMixer);
    sweetCaffeLatteMachine.fillCoffeeBeans(32);
    const coffee = sweetCaffeLatteMachine.makeCoffee(2);
    console.log(coffee);
    sweetCaffeLatteMachine.clean();

}
