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
        private readonly hasMilk: boolean;

        constructor(bean: string, shots: number, hasMilk: boolean) {
            this.bean = bean;
            this.shots = shots;
            this.hasMilk = hasMilk;
        }

    }

    class CoffeeMachine {

        private stockCoffeeWeight: number;

        constructor(stock: number = 0) {
            this.stockCoffeeWeight = stock;
        }

        public makeCoffee(shots: number): Coffee {
            this.spendCoffeeBean(shots);
            return new Coffee('Robusta', shots, true);
        }

        private spendCoffeeBean(shots: number): void {
            const spendWeight: number = CoffeeBean.totalWeight(shots);
            if (this.stockCoffeeWeight < spendWeight) {
                throw Error('Not Enough Coffee Beans');
            }
            this.stockCoffeeWeight -= spendWeight;
        }

        public fillCoffeeBean(count: number): void {
            if (count <0) {
                throw new Error("충전하려는 커피빈의 갯수는 0이상이어야 합니다.")
            }

            this.stockCoffeeWeight += CoffeeBean.totalWeight(count);
        }
    }

    const coffeeMachine: CoffeeMachine = new CoffeeMachine();
    coffeeMachine.fillCoffeeBean(10);

    const coffee: Coffee = coffeeMachine.makeCoffee(4);
    console.log(coffee);
}
