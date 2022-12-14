{
    /**
     * JavaScript
     * Primitive : number, String, boolean, bigint, symbol, null, undefined
     * Object : function, array, ...
     */


    // number
    const num: number = -6;
    console.log(num);

    // string
    const str: string = 'μλ';
    console.log(str);

    // boolean
    const bool: boolean = false;

    // undefined
    let name: undefined; //π©
    let age: number | undefined;
    age = undefined;
    age = 10;

    function find(): number | undefined {
        return undefined;
    }

    // null : μλ¬΄ κ²λ λ°ννμ§ μμ. μ£Όλ‘ null κ°λ₯μ±μ΄ μλ κ²λ€κ³Ό λ¬Άμ΄μ νμμ μ μΈ
    let person: null; //π©
    let person2: string | null;

    // unknown π© λ¬΄μ¨ νμμ΄ μ¬μ§ λͺ°λΌ...
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any π© λ λͺ¨λ  νμμ΄ μ¬ μ μμ΄!
    let anything: any = 0;
    anything = 'hello';
    anything = false;

    // void : μλ¬΄κ²λ λ°ννμ§ μλ ν¨μμ μ£Όλ‘ μ¬μ©
    function print() : void {
        console.log('hello');
        return;
    }

    let unusable: void = undefined; // π© voidλ₯Ό λ³μ νμμΌλ‘ μ μΈνλ κ²½μ°λ κ±°μ μμ

    // never (μλ¬λ₯Ό λμ§κ±°λ, λ¬΄ν λ°λ³΅)
    function throwError(message : string) : never {
        // message -> server (log)
        throw new Error(message);
    }

    function endless() : never {
        while(true) {
            console.log('fire Punch!');
        }
        // return; // λ¬΄μΈκ°λ₯Ό μ λ λμ§ μ μμ.
    }

    let neverEnding: never; // π© never νμμΌλ‘ λ°ννλ κ²½μ°κ° κ±°μ μμ.

    // object : μμ νμμ μ μΈν λͺ¨λ  νμμ ν λΉν  μ μμ
    let obj: object; // π© νμμ΄ λΆλΆλͺν¨.
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'ttasjwi'});
    acceptSomeObject({animal: 'dog'});

}
