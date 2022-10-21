{
    class CoffeeBean {
        private static readonly WEIGHT_OF_BEAN: number = 7;

        public static totalWeight(count: number): number {
            return count * this.WEIGHT_OF_BEAN;
        }
    }

    class Coffee {
        private readonly bean: string;
        private readonly shots: number;
        private hasMilk: boolean;
        private hasSugar: boolean;

        public constructor(bean: string, shots = 0, hasMilk= false, hasSugar = false) {
            this.bean = bean;
            this.shots = shots;
            this.hasMilk = hasMilk;
            this.hasSugar = hasSugar;
        }

        public addMilk(): void {
            this.hasMilk = true;
        }

        public addSugar(): void {
            this.hasSugar = true;
        }

    }

    class CoffeeMachine {

        private stockCoffeeWeight: number;

        public constructor(stock: number = 0) {
            this.stockCoffeeWeight = stock;
        }

        public makeCoffee(shots: number): Coffee {
            this.spendCoffeeBean(shots);
            return new Coffee('Robusta', shots);
        }

        public fillCoffeeBean(count: number): void {
            if (count < 0) {
                throw new Error("충전하려는 커피빈의 갯수는 0이상이어야 합니다.")
            }
            this.stockCoffeeWeight += CoffeeBean.totalWeight(count);
        }

        public clean(): void {
            console.log('그냥 커피 머신 청소를 했어요. 샤라라라~~~');
        }

        private spendCoffeeBean(shots: number): void {
            const spendWeight: number = CoffeeBean.totalWeight(shots);
            if (this.stockCoffeeWeight < spendWeight) {
                throw Error('Not Enough Coffee Beans');
            }
            this.stockCoffeeWeight -= spendWeight;
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {

        public makeCoffee(shots: number): Coffee {
            const coffee = super.makeCoffee(shots);
            coffee.addMilk();
            return coffee;
        }

        public clean(): void {
            console.log('카페라떼 머신 청소를 했습니닷...!!!')
        }

    }

    class SweetCoffeeMachine extends  CoffeeMachine {

        public makeCoffee(shots: number): Coffee {
            const coffee = super.makeCoffee(shots);
            coffee.addSugar();
            return coffee;
        }

        public clean(): void {
            console.log('달콤한 커피 머신 청소!!!!!!!!!!!!!!!!!!!!!!!!')
        }

    }

    const coffeeMachine = new CoffeeMachine(30);
    const caffeLatteMachine = new CaffeLatteMachine(30);
    const sweetCoffeeMachine = new SweetCoffeeMachine(30);

    const coffee: Coffee = coffeeMachine.makeCoffee(3);
    const latte: Coffee = caffeLatteMachine.makeCoffee(3);
    const sweetCoffee: Coffee = sweetCoffeeMachine.makeCoffee(3);

    console.log(coffee);
    console.log(latte);
    console.log(sweetCoffee);

    coffeeMachine.clean();
    caffeLatteMachine.clean();
    sweetCoffeeMachine.clean();
}
