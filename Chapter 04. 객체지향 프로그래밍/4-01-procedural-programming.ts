{
    let stockCoffeeAmount: number = 0;

    type CoffeeBean = string;
    type Coffee = {
        bean: CoffeeBean,
        hasMilk: boolean,
        shots: number
    };

    const GRAM_PER_COFFEE_BEAN: number = 7;

    stockCoffeeAmount += 50;

    function makeCoffee(shots: number) : Coffee {
        if (stockCoffeeAmount < shots * GRAM_PER_COFFEE_BEAN) {
            throw Error('Not Enough Coffee Beans');
        }
        stockCoffeeAmount -= shots * GRAM_PER_COFFEE_BEAN;
        return {
            bean: 'Robusta',
            shots: shots,
            hasMilk: false,
        }
    }

    const coffee = makeCoffee(3);
    console.log(coffee);
}
