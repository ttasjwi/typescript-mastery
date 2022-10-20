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

        public constructor(bean: string, shots: number, hasMilk: boolean) {
            this.bean = bean;
            this.shots = shots;
            this.hasMilk = hasMilk;
        }

        public addMilk(): void {
            this.hasMilk = true;
        }

    }

    class CoffeeMachine {

        private stockCoffeeWeight: number;

        public constructor(stock: number = 0) {
            this.stockCoffeeWeight = stock;
        }

        public makeCoffee(shots: number): Coffee {
            this.spendCoffeeBean(shots);
            return new Coffee('Robusta', shots, false);
        }

        public fillCoffeeBean(count: number): void {
            if (count < 0) {
                throw new Error("충전하려는 커피빈의 갯수는 0이상이어야 합니다.")
            }

            this.stockCoffeeWeight += CoffeeBean.totalWeight(count);
        }

        public clean(): void {
            console.log('청소를 했어요. 샤라라라~~~');
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
            const latte = super.makeCoffee(shots);
            this.addMilk();
            return latte;
        }

        private addMilk(): void {
            latte.addMilk();
        }
    }

    const coffeeMachine = new CoffeeMachine(30);

    const coffee: Coffee = coffeeMachine.makeCoffee(3);
    console.log(coffee);
    coffeeMachine.clean();

    const caffeLatteMachine = new CaffeLatteMachine(40);

    const latte: Coffee = caffeLatteMachine.makeCoffee(2);
    console.log(latte);
}
