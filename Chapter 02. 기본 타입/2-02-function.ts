{
    // 1-1. JavaScript

    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // 1-2. TypeScript
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }

    const sum = tsAdd(1, 2);
    console.log(sum);



    // 2-1. JavaScript
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise(resolve => resolve(100));
    // }

    // 2-2. TypeScript
    function tsFetchNum(id: number) : Promise<number> {
        // code...
        // code ...
        return new Promise<number>(resolve => resolve(100));
    }

    tsFetchNum(123)
        .then(console.log);
}
