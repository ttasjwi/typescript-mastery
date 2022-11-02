{
    function checkNotNull(arg: number | null) : number {
        if (arg === null) {
            throw new Error('number가 아니에요');
        }
        return arg; // 숫자에 대해서만 판단할 수 있음ㅁㅁㅁ
    }

    checkNotNull(123);
    // checkNotNull(null);

    function checkNotNullBad(arg: any | null) : any {
        if (arg === null) {
            throw new Error('not valid number');
        }
        return arg; // null이 아니면 모두 통과하고, 타입 안정성이 보장 안 됨.
    }

    function checkNotNullGeneric<T>(arg: T | null) : T {
        if (arg === null) {
            throw new Error('null임');
        }
        return arg;
    }

    const result1 = checkNotNullGeneric<string>('안녕');
    console.log(typeof result1); // string
    const result2 = checkNotNullGeneric<number>(123);
    console.log(typeof result2); // number

    // checkNotNullGeneric(null);
}
